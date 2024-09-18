import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './LoginLayout.module.scss';

export interface ILoginLayout extends IChildrenProps {}

const LoginLayout: React.FC<ILoginLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default LoginLayout;
