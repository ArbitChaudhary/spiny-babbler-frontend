import PageWrapper from '../common/components/PageWrapper';
import UserProfileLayout from '../components/layouts/pages/user-profile-layout/UserProfileLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import UserProfile from '../components/user-profile/UserProfile';
import { NextPageWithLayout } from './page';

const UsersProfile: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      {/* <PrimaryLayout> */}
      <UserProfileLayout>
        <UserProfile />
      </UserProfileLayout>
      {/* </PrimaryLayout> */}
    </PageWrapper>
  );
};
UsersProfile.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default UsersProfile;
