import PageWrapper from '../common/components/PageWrapper';
import LoginLayout from '../components/layouts/pages/login-layout/LoginLayout';
import LoginModule from '../components/login/Login';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <LoginModule />
    </PageWrapper>
  );
};

Login.getLayout = (page) => {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Login;
