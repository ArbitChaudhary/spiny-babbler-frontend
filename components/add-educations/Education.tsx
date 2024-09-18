import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../../common/ui/button/Button';
import { AddEducationDto, userService } from '../../services/services/users.service';
import styles from './education.module.scss';

export interface iEducation { }

const Education: React.FC<iEducation> = () => {
  const { register, handleSubmit, control } = useForm<AddEducationDto>();
  const router = useRouter();


  const onSubmit: SubmitHandler<AddEducationDto> = async (data) => {
    const result = await userService.addEducation({ ...data });

    if (result.data) {
      console.log('Form Success');
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.education}>
        <form
          className={styles.addEducationForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formInputs}>
            <div className={styles.flexForm}>
              <TextField label="Context" {...register('context')} />
            </div>
            <div className={styles.flexForm}>
              <TextField
                label="Institute Name"
                {...register('instituteName')}
              />
            </div>
            <div className={styles.flexForm}>
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
            <div className={styles.flexForm}>
              <Controller
                control={control}
                name="endDate"
                render={({ field: { onChange, value, name, ref } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
                    label="End Date"
                  />
                )}
              />
            </div>
            {/* <div className={styles.flexForm}>
              <span className={styles.title}>Image</span>
              <input type="file" className={styles.image} />
            </div> */}
          </div>
          <div className={styles.button}>
            <CustomButton>Submit</CustomButton>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Education;
