import PageWrapper from '../../common/components/PageWrapper';
import CreateJob from '../../components/jobs/create-job/CreateJob';
import CreateJobLayout from '../../components/layouts/pages/createjob-layout/CreateJobLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';

const Create = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <CreateJobLayout>
          <CreateJob />
        </CreateJobLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default Create;
