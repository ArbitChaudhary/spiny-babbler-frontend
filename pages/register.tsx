import PageWrapper from '../common/components/PageWrapper';
import RegisterLayout from '../components/layouts/pages/register-layout/RegisterLayout';
import UserRegister from '../components/register/UserRegister';
import { NextPageWithLayout } from './page';

const Register: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      {/* <RegisterLayout> */}
      <UserRegister />
      {/* </RegisterLayout> */}
    </PageWrapper>
  );
};

Register.getLayout = (page) => {
  return <RegisterLayout>{page}</RegisterLayout>;
};
export default Register;
