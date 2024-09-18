import Image from 'next/image';
import styles from './Notification.module.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface INotification {
}

const Notification: React.FC<INotification> = () => {
    return (
        <div className={styles.notification}>
            <div className={styles.image}>
                <Image src={'https://picsum.photos/200/300'} alt={'image'} fill />
            </div>
            <div className={styles.detail}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, explicabo.</div>
            <div className={styles.others}>
                <div className={styles.time}>
                    1h
                </div>
                <div className={styles.moreOptions}>
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}

export default Notification
