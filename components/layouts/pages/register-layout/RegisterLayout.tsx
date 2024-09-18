import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './RegisterLayout.module.scss';

export interface IRegisterLayout extends IChildrenProps {}

const RegisterLayout: React.FC<IRegisterLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default RegisterLayout;
