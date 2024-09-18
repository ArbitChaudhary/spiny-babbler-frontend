import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './NotificationsLayout.module.scss';

export interface INotificationsLayout extends IChildrenProps {
}

const NotificationsLayout: React.FC<INotificationsLayout> = ({ children }) => {
    return <Container className={styles.container}>{children}</Container>
}

export default NotificationsLayout
