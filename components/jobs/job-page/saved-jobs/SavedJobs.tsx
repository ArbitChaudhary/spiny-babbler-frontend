import { Divider, Paper } from '@mui/material';
import styles from './SavedJobs.module.scss';

import { Save } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { PostTypeEnum } from '../../../../services/services/jobs.service';
import { userService } from '../../../../services/services/users.service';
import Job from '../job/Job';

export interface ISavedJobs { }

const SavedJobs: React.FC<ISavedJobs> = () => {

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {

        const response = await userService.getUserSavedJobs()

        const jobLists = response?.docs;

        setSavedJobs(jobLists)

      } catch (error) {
        console.log(error)
      }
    }

    fetchSavedJobs()

  }, [])

  return (
    <Paper>
      <div className={styles.title}>
        <div className={styles.titleIcon}>
          <Save />
        </div>
        <div className={styles.text}>
          Saved Jobs
        </div>
      </div>
      <Divider />
      <div className={styles.jobList}>
        {savedJobs && (
          savedJobs.map((job) => (<Job key={job._id} job={{
            _id: job._id,
            location: job.location,
            title: job.title,
            ...(job.postType === PostTypeEnum.USER && {
              user: {
                name: job.author.firstName,
                imageUrl: "https://dummyimage.com/200x200/000/fff"
              }
            })
          }} />))
        )}
      </div>
    </Paper>
  );
};

export default SavedJobs;
