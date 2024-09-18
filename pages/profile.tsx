import { useContext } from 'react';
import PageWrapper from '../common/components/PageWrapper';
import ProfileLayout from '../components/layouts/pages/profile-layout/ProfileLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import UserInfo from '../components/profile/user-info/UserInfo';
import { UserContext } from '../contexts/user.context';
import { NextPageWithLayout } from './page';

const Profile: NextPageWithLayout = () => {

  const { user } = useContext(UserContext);

  return (
    <PageWrapper>
      <ProfileLayout>
        {user && (
          <>
            <UserInfo user={user} />
            {/* <Educations /> */}
            {/* {user?.aboutMe && <AboutUser aboutMe={user?.aboutMe} />} */}
            {/* {user?.experiences.length > 0 && ( */}
            {/* <Experiences experiences={user?.experiences} /> */}
            {/* )} */}
            {/* {user?.educations.length > 0 && ( */}
            {/* <Educations educations={user?.educations} /> */}
            {/* )} */}
            {/* {user?.skills.length > 0 && ( */}
            {/* <SkillAndEndorsment skills={user?.skills} /> */}
            {/* )} */}
          </>
        )}
      </ProfileLayout>
    </PageWrapper>
  );
};

Profile.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Profile;
