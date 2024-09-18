import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './JobPreviewLayout.module.scss';

export interface IJobPreviewLayout extends IChildrenProps { }

const JobPreviewLayout: React.FC<IJobPreviewLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <> {children} </>}
    </Container>
  );
};

export default JobPreviewLayout;
