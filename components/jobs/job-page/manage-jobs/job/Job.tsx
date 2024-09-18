
import { Delete, Publish } from '@mui/icons-material';
import Edit from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Job.module.scss';

//TODO: this extends JobDto
export interface IJob {
    job: {
        _id: string;
        company?: {
            name: string;
            imageUrl: string;
        };
        user?: {
            name: string;
            imageUrl: string;
        }
        location: string;
        title: string;
    };
}

const Job: React.FC<IJob> = ({ job }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={job.user.imageUrl} alt={'image'} fill />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.text}>
                        <Link href={`jobs/preview/${job._id}`}>
                            {job?.title}
                        </Link>
                    </div>
                </div>
                <div className={styles.user}>{job?.user.name}</div>
                <div className={styles.location}>{job?.location}</div>
                <div className={styles.stats}>
                    <span className={styles.time}>1 week ago</span>
                    <span className={styles.applicant}>11 applicant</span>
                </div>
            </div>
            <div className={styles.actions}>
                <div className={styles.action}>
                    <IconButton color={'primary'}>
                        <Edit />
                    </IconButton>
                </div>
                <div className={styles.action}>
                    <IconButton color={'error'}>
                        <Delete />
                    </IconButton>
                </div>
                <div className={styles.action}>
                    <IconButton color={'default'}>
                        <Publish />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Job;
