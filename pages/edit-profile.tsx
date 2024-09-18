import ProfileEdit from '../components/edit-profile/ProfileEdit';
import ProfileEditLayout from '../components/layouts/pages/profile-edit-layout/ProfileEditLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

const EditProfile = () => {
  return (
    <PrimaryLayout>
      <ProfileEditLayout>
        <ProfileEdit />
      </ProfileEditLayout>
    </PrimaryLayout>
  );
};

export default EditProfile;
