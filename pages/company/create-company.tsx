import PageWrapper from '../../common/components/PageWrapper';
import CreateNewCompany from '../../components/company-profile/create-company/CreateNewCompany';
import CreateCompanyLayout from '../../components/layouts/pages/create-company-layout/CreateCompanyLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';

const CreateCompany = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <CreateCompanyLayout>
          <CreateNewCompany />
        </CreateCompanyLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default CreateCompany;
