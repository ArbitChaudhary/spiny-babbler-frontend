import Comapny from '../../components/company-profile/Comapny';
import CompanyProfileLayout from '../../components/layouts/pages/company-profile-layout/CompanyProfileLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';

const CompanyProfile = () => {
  return (
    <PrimaryLayout>
      <CompanyProfileLayout>
        <Comapny />
      </CompanyProfileLayout>
    </PrimaryLayout>
  );
};

export default CompanyProfile;
