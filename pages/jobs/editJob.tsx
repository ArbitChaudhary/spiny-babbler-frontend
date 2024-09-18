import PageWrapper from '../../common/components/PageWrapper';
import JobEdit from '../../components/jobs/edit-job/JobEdit';
import JobEditLayout from '../../components/layouts/pages/job-edit-layout/JobEditLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';

const EditJob = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <JobEditLayout>
          <JobEdit />
        </JobEditLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default EditJob;
