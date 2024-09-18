import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../../common/ui/button/Button';
import { AddExperienceDto, userService } from '../../services/services/users.service';
import styles from './experience.module.scss';

export interface iExperiences { }

const Experiences: React.FC<iExperiences> = () => {
  const { register, handleSubmit, control } = useForm<AddExperienceDto>();
  const router = useRouter();


  const onSubmit: SubmitHandler<AddExperienceDto> = async (data) => {
    const result = await userService.addExperience({ ...data });

    if (result.data) {
      // router.push('/profile');
      console.log('Done');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.experiences}>
        <form
          className={styles.AddExperienceForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formInputs}>
            <div className={styles.inputs}>
              <TextField label="Context" {...register('context')} />
            </div>
            <div className={styles.inputs}>
              <TextField label="Company" {...register('companyName')} />
            </div>
            <div className={styles.inputs}>
              <Controller
                control={control}
                name="startDate"
                render={({ field: { onChange, value, name, ref } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
                    label="Start Date"
                  />
                )}
              />
            </div>
            <div className={styles.inputs}>
              <Controller
                control={control}
                name="startDate"
                render={({ field: { onChange, value, name, ref } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
                    label="Start Date"
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.button}>
            <CustomButton>SUBMIT</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experiences;
