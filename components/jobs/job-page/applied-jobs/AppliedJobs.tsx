
import { Divider, Paper } from '@mui/material';
import styles from './AppliedJobs.module.scss';

import { Work } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { PostTypeEnum, jobService } from '../../../../services/services/jobs.service';
import Job from '../job/Job';

export interface IAppliedJobs { }

const AppliedJobs: React.FC<IAppliedJobs> = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {

                const response = await jobService.getMeAppliedJobs()

                const jobList = response?.docs;

                return jobList;


            } catch (error) {
                console.log(error)
            }
        }

        fetchAppliedJobs().then(jobList => {
            setAppliedJobs(jobList)
        })

    }, [])

    return (
        <Paper>
            <div className={styles.title}>
                <div className={styles.titleIcon}>
                    <Work />
                </div>
                <div className={styles.text}>
                    Applied Jobs
                </div>
            </div>
            <Divider />
            <div className={styles.jobList}>
                {appliedJobs && (
                    appliedJobs.map((job) => (<Job key={job._id} job={{
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

export default AppliedJobs;
