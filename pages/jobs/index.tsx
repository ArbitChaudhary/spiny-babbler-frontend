import PageWrapper from '../../common/components/PageWrapper';
import JobPage from '../../components/jobs/job-page/JobPage';
import JobsLayout from '../../components/layouts/pages/jobs-layout/JobsLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Jobs: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <JobsLayout>
        <JobPage />
      </JobsLayout>
    </PageWrapper>
  );
};

Jobs.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Jobs;
