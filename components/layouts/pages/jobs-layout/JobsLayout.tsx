import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './JobsLayout.module.scss';

export interface IJobsLayout extends IChildrenProps { }

const JobsLayout: React.FC<IJobsLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <>{children}</>}
    </Container>
  );
};

export default JobsLayout;
