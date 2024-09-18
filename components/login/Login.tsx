import Image from 'next/image';
import styles from './Login.module.scss';

import { useRouter } from 'next/router';
import companyLogo from 'public/images/company-logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import Card from '../../common/ui/card/Card';
import { signInFirebase } from '../../services/firebase';

export interface IInputs {
  email: string;
  password: string;
}

export interface ILogin { }

const Login: React.FC<ILogin> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const result = await signInFirebase(data.email, data.password);

    if (result) {
      router.push('/');
    } else {
      console.log('error :>> ', result);
    }
  };

  return (
    <Card>
      <div className={styles.loginForm}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image fill src={companyLogo} alt={'company name'} />
          </div>
          <div className={styles.text}>
            <h2>Welcome Back</h2>
            <p>
              Do not miss your next opportunity. Sign in to stay updated on your
              professional world.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="email"
              {...register('email')}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              {...register('password')}
            />
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
