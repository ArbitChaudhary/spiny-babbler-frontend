import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './JobEditLayout.module.scss';

export interface IJobEditLayout extends IChildrenProps {}

const JobEditLayout: React.FC<IJobEditLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default JobEditLayout;
