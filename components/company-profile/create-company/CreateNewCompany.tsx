import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../../../common/ui/button/Button';
import { UserContext } from '../../../contexts/user.context';
import styles from './CreateNewCompany.module.scss';

export interface ICreateNewCompany {}

export interface IICreateNewCompany {
  name: string;
  headline: string;
  description: string;
  websiteUrl: string;
  address: string;
  industry: string;
  foundationDate: Date;
  creator: string;
}

const CreateNewCompany: React.FC<ICreateNewCompany> = () => {
  const { register, handleSubmit, control } = useForm<IICreateNewCompany>();
  const { createCompany } = useContext(UserContext);
  const router = useRouter();

  const onSubmit: SubmitHandler<IICreateNewCompany> = async (data) => {
    const result = await createCompany(
      data.name,
      data.headline,
      data.description,
      data.websiteUrl,
      data.address,
      data.industry,
      data.foundationDate,
      'Arbeet'
    );
    if (result) {
      router.push('/company/create-company');
    } else {
      console.log('error >>', result.error);
    }
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.formHead}>Create Your Company</div> */}
      <form className={styles.companyForm} onSubmit={handleSubmit(onSubmit)}>
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
          <CustomButton>Create Company</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default CreateNewCompany;
