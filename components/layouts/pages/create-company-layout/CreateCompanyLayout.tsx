import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './CreateCompanyLayout.module.scss';

export interface ICreateCompanyLayout extends IChildrenProps {}

const CreateCompanyLayout: React.FC<ICreateCompanyLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default CreateCompanyLayout;
