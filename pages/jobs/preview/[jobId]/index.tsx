import { useEffect, useState } from 'react';
import JobPreviews from '../../../../components/jobs/job-preview/JobPreview';
import JobPreviewLayout from '../../../../components/layouts/pages/job-preview-layout/JobPreviewLayout';
import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';
import { jobService } from '../../../../services/services/jobs.service';

const JobPreview = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const func = async () => {
      const job = await jobService.getJobById(`{id}`);
      return setJobs(job.docs);
    };
  });
  return (
    <PrimaryLayout>
      <JobPreviewLayout>
        <JobPreviews />
      </JobPreviewLayout>
    </PrimaryLayout>
  );
};

export default JobPreview;
