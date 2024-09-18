import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './GroupLayout.module.scss';

export interface IGroupLayout extends IChildrenProps {}

const GroupLayout: React.FC<IGroupLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default GroupLayout;
