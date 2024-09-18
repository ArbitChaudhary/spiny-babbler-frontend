import Image from 'next/image';
import CustomButton from '../../../common/ui/button/Button';
import styles from './JobCard.module.scss';

export interface IJobCard {
}

const JobCard: React.FC<IJobCard> = () => {
    return (
        <div className={styles.job}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <Image src={'https://picsum.photos/200/300'} alt={'image'} fill />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Job Title
                    </div>
                    <div className={styles.companyName}>
                        Company Name
                    </div>
                    <div className={styles.stats}>
                        <span className={styles.time}>3 weeks ago</span>
                        <span className={styles.dot}>.</span>
                        <span className={styles.applicants}>23 applicants</span>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <CustomButton>Apply</CustomButton>
            </div>
        </div>
    )
}

export default JobCard
