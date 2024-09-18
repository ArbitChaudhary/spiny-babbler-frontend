import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '../../../common/ui/button/Button';
import styles from './CreateGroup.module.scss';

export interface GroupData {
  name: string;
  headline: string;
  description: string;
  isPrivate: boolean;
}

export interface ICreateGroup {}

const CreateGroup: React.FC<ICreateGroup> = () => {
  const { register, handleSubmit, control } = useForm<GroupData>();
  return (
    <div className={styles.container}>
      <form className={styles.groupForm}>
        <TextField label="Group Name" {...register('name')} />
        <TextField label="Headline" {...register('headline')} />
        <Controller
          control={control}
          name="isPrivate"
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
              label="Keep Private?"
            />
          )}
        />
        <TextField label="Description" {...register('description')} />

        <div className={styles.submitButton}>
          <CustomButton>Create Group</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
