import PageWrapper from '../../common/components/PageWrapper';
import EditCompany from '../../components/company-profile/edit-company/EditCompany';
import CompanyEditLayout from '../../components/layouts/pages/compay-edit-layout/CompanyEditLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';

const Edit = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <CompanyEditLayout>
          <EditCompany />
        </CompanyEditLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default Edit;
