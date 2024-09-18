import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { EditorState, convertToRaw } from 'draft-js';
import moment, { Moment } from 'moment';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../contexts/user.context';
import { industryService } from '../../../services/services/industries.service';
import {
  JobTypeEnum,
  PostTypeEnum,
  WorkplaceTypeEnum,
  jobService,
} from '../../../services/services/jobs.service';
import { skillService } from '../../../services/services/skills.service';
import styles from './CreateJob.module.scss';
import Editor from './Editor/Editor';

export interface IJobCreate { }

export interface JobFormData {
  title: string;
  workplaceType: WorkplaceTypeEnum;
  jobType: JobTypeEnum;
  closingAt: Moment;
  location: string;
  body: EditorState;
  isActiveRecruit: boolean;
  industry: string;
  postType: PostTypeEnum;
  company?: string;
  requiredSkills: string[];
}

const CreateJob: React.FC<IJobCreate> = () => {
  const [industries, setIndustries] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedPostType, setSelectedPostType] = useState(PostTypeEnum.USER);
  const { user } = useContext(UserContext);
  const { register, handleSubmit, control } = useForm<JobFormData>({
    defaultValues: {
      workplaceType: WorkplaceTypeEnum.ON_SITE,
      jobType: JobTypeEnum.FULL_TIME,
      postType: PostTypeEnum.USER,
      closingAt: moment.utc(),
      industry: '',
      body: EditorState.createEmpty(),
      isActiveRecruit: false,
      requiredSkills: [],
    },
  });
  const router = useRouter();

  useEffect(() => {
    const industriesSetup = async () => {
      const industries = await industryService.getAll();

      //TODO: error handle
      setIndustries(industries.docs);
    };

    const skillsSetup = async () => {
      const skills = await skillService.getAll();

      //TODO: error handle
      setSkills(skills.docs);
    };

    industriesSetup();
    skillsSetup();
  }, []);

  const onSubmit: SubmitHandler<JobFormData> = async (data) => {
    const result = await jobService.createJob({
      ...data,
      closingAt: data.closingAt.toDate(),
      body: JSON.stringify(convertToRaw(data.body.getCurrentContent())),
    });

    if (result) {
      router.push('/jobs');
    } else {
      console.log('error >> :', result.error);
    }
  };

  return (
    <>
      {user && (
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.head}>
              <span>Create a job</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, soluta!
              </span>
            </div>
            <form className={styles.jobForm} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                className={styles.jobTitle}
                id="title-input"
                label="Job Title"
                variant="outlined"
                {...register('title')}
              />
              <TextField
                id="location-input"
                label="Location"
                variant="outlined"
                {...register('location')}
              />
              <FormControl>
                <InputLabel id="workplace-select">Workplace Type</InputLabel>
                <Controller
                  control={control}
                  name="workplaceType"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      labelId="workplace-select"
                      id="workplace-select"
                      value={value}
                      name={name}
                      ref={ref}
                      label="Workplace Type"
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      {Object.keys(WorkplaceTypeEnum).map(
                        (workplaceType, idx) => (
                          <MenuItem
                            key={idx}
                            value={WorkplaceTypeEnum[workplaceType]}
                          >
                            {workplaceType}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl>
                <InputLabel id="job-type-select">Job Type</InputLabel>
                <Controller
                  control={control}
                  name="jobType"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      labelId="job-type-select"
                      id="job-type-select"
                      value={value}
                      name={name}
                      ref={ref}
                      label="Job Type"
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      {Object.keys(JobTypeEnum).map((jobType, idx) => (
                        <MenuItem key={idx} value={JobTypeEnum[jobType]}>
                          {jobType}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <Controller
                control={control}
                name="closingAt"
                render={({ field: { onChange, value, name, ref } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
                    label="Closing At"
                  />
                )}
              />
              <FormControl>
                <InputLabel id="industry-select">Industry</InputLabel>
                <Controller
                  control={control}
                  name="industry"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      labelId="industry-select"
                      id="industry-select"
                      value={value}
                      name={name}
                      ref={ref}
                      label="Industry"
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      {industries.map(({ _id, name }) => (
                        <MenuItem key={_id} value={_id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl>
                <InputLabel id="required-skills-select">
                  Required Skills
                </InputLabel>
                <Controller
                  control={control}
                  name="requiredSkills"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      labelId="required-skills-select"
                      id="required-skills-select"
                      value={value}
                      name={name}
                      ref={ref}
                      label="Required Skills"
                      onChange={onChange}
                      onBlur={onBlur}
                      multiple
                    >
                      {skills.map(({ _id, name }) => (
                        <MenuItem key={_id} value={_id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <div className={styles.postType}>
                <FormControl>
                  <InputLabel id="post-type-select">Post Type</InputLabel>
                  <Controller
                    control={control}
                    name="postType"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Select
                        labelId="post-type-select"
                        id="post-type-select"
                        value={value}
                        name={name}
                        ref={ref}
                        label="Post Type"
                        onChange={(e) => {
                          setSelectedPostType(e.target.value as PostTypeEnum);
                          onChange(e);
                        }}
                        onBlur={onBlur}
                      >
                        {Object.keys(PostTypeEnum).map((postType, idx) => (
                          <MenuItem key={idx} value={PostTypeEnum[postType]}>
                            {postType}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
                {selectedPostType === PostTypeEnum.COMPANY && (
                  <TextField
                    id="company-input"
                    label="Company"
                    variant="outlined"
                    {...register('company')}
                  />
                )}
                {selectedPostType === PostTypeEnum.GROUP && (
                  <TextField
                    id="group-input"
                    label="Group"
                    variant="outlined"
                  />
                )}
              </div>
              <Controller
                control={control}
                name="isActiveRecruit"
                render={({ field: { onChange, value, name, ref } }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={name}
                        ref={ref}
                        value={value}
                        onChange={onChange}
                      />
                    }
                    label="Is actively looking for recruit?"
                  />
                )}
              />
              <div className={styles.editor}>
                <Controller
                  control={control}
                  name="body"
                  render={({ field: { onChange, value } }) => (
                    <Editor editorState={value} onChange={onChange} />
                  )}
                />
              </div>
              <div className={styles.button}>
                <Button type="submit" variant="contained">
                  Create Job
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateJob;
