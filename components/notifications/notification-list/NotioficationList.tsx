import Notification from '../notification/Notification';
import styles from './NotificationList.module.scss';


export interface INotificationList {
}

const NotificationList: React.FC<INotificationList> = () => {
    return (
        <div className={styles.container}>
            <Notification />
            <Notification />
            <Notification />
        </div>
    )
}

export default NotificationList
