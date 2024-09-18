import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context';
import styles from './UserRegister.module.scss';

export interface FormData {
  firstName: string;
  email: string;
  password: string;
}

export interface IUserRegister {}

const UserRegister: React.FC<IUserRegister> = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const { signUp } = useContext(UserContext);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const result = await signUp(
      data.firstName,
      'Chaudhary',
      data.email,
      'Code is poetry written for machines to dance!',
      'Kathmandu',
      984522,
      Date.now(),
      'This is something about me!!',
      data.password
    );

    if (result.data) {
      router.push('/login');
    } else {
      console.log('error :>> ', result.error);
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.RegisterContent}>
        <div className={styles.allContent}>
          <div className={styles.logo}>
            {/* <Image
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompany-logo.dc179fb2.png&w=1920&q=75"
              alt="logo"
              fill
            /> */}
          </div>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit
            quasi nesciunt numquam eius quod!
          </div>
          <form
            className={styles.registerForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.formContent}>
              <span>First Name</span>
              <input
                id="firstName"
                type="text"
                placeholder="first name"
                {...register('firstName')}
              />
            </div>
            {/* <div className={styles.formContent}>
              <span>Family Name</span>
              <input
                id="familyName"
                type="text"
                placeholder="family name"
                {...register('familyName')}
              />
            </div> */}
            <div className={styles.formContent}>
              <span>Email</span>
              <input
                id="email"
                type="email"
                placeholder="email"
                {...register('email')}
              />
            </div>

            {/* <div className={styles.formContent}>
              <span>Date of birth</span>
              <input
                id="dob"
                type="date"
                placeholder="dob"
                {...register('dateOfBirth')}
              />
            </div> */}

            <div className={styles.formContent}>
              <span>Password</span>
              <input
                id="password"
                type="password"
                placeholder="password"
                {...register('password')}
              />
            </div>
            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UserRegister;
