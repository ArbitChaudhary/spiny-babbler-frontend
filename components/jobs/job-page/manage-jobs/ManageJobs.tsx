
import { Divider, Paper } from '@mui/material';
import styles from './ManageJobs.module.scss';

import { Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { PostTypeEnum, jobService } from '../../../../services/services/jobs.service';
import Job from './job/Job';

export interface IManageJobs { }

const ManageJobs: React.FC<IManageJobs> = () => {

    const [manageJobs, setManageJobs] = useState([]);

    useEffect(() => {
        const fetchManageJobs = async () => {
            try {

                const response = await jobService.getMeCreatedJobs()

                const jobList = response?.docs;

                return jobList
            } catch (error) {
                console.log(error)
            }
        }

        fetchManageJobs().then(jobList => {
            setManageJobs(jobList)
        })
    }, [])

    return (
        <Paper>
            <div className={styles.title}>
                <div className={styles.titleIcon}>
                    <Edit />
                </div>
                <div className={styles.text}>
                    Manage Jobs
                </div>
            </div>
            <Divider />
            <div className={styles.jobList}>
                {manageJobs && (
                    manageJobs.map((job) => (<Job key={job._id} job={{
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

export default ManageJobs;
