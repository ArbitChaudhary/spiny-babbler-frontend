import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './ProfileLayout.module.scss';

export interface IProfileLayout extends IChildrenProps {
}

const ProfileLayout: React.FC<IProfileLayout> = ({ children }) => {
    return <Container className={styles.container}>{children}</Container>
}

export default ProfileLayout
