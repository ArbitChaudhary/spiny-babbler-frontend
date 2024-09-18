import Image from 'next/image';
import Link from 'next/link';
import styles from './Job.module.scss';

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
      <Link href={`jobs/preview/${job._id}`} className={styles.container}>
        <div className={styles.image}>
          <Image src={job.user.imageUrl} alt={'image'} fill />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {job?.title}
          </div>
          <div className={styles.user}>{job?.user.name}</div>
          <div className={styles.location}>{job?.location}</div>
          <div className={styles.stats}>
            <span className={styles.time}>1 week ago</span>
            <span className={styles.applicant}>11 applicant</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Job;
