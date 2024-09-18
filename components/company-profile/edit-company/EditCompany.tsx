import { Card, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '../../../common/ui/button/Button';
import styles from './EditCompany.module.scss';

export interface IEditCompany {}

const EditCompany: React.FC<IEditCompany> = () => {
  const { register, control } = useForm();
  return (
    <Card>
      <div className={styles.container}>
        {/* <div className={styles.formHead}>Create Your Company</div> */}
        <form className={styles.companyForm}>
          <div className={styles.formFields}>
            <div className={styles.inputFields}>
              <TextField label="Company Name" {...register('name')} />
            </div>
            <div className={styles.inputFields}>
              <TextField label="Address" {...register('address')} />
            </div>
            <div className={styles.inputFields}>
              <TextField label="Industry" {...register('industry')} />
            </div>
            <div className={styles.inputFields}>
              <Controller
                control={control}
                name="foundationDate"
                render={({ field: { onChange, value, name, ref } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
                    label="Foundation Date"
                  />
                )}
              />
            </div>

            {/* <div className={styles.inputFields}>
            <span>Addresss</span>
            <input type="text" {...register('address')} />
          </div> */}
            <div className={styles.inputFields}>
              <TextField label="Website Url" {...register('websiteUrl')} />
            </div>
          </div>
          <div className={styles.inputFields}>
            <TextField label="Headline" {...register('headline')} />
          </div>
          <div className={styles.inputFields}>
            <TextField label="Description" {...register('description')} />
          </div>
          <div className={styles.button}>
            <CustomButton>Delete Company</CustomButton>
            <CustomButton>Update Company</CustomButton>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditCompany;
