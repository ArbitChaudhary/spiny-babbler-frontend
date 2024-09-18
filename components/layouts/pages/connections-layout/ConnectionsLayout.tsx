import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './ConnectionsLayout.module.scss';

export interface IConnectionsLayout extends IChildrenProps { }

const ConnectionsLayout: React.FC<IConnectionsLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <>{children}</>}
    </Container>
  );
};

export default ConnectionsLayout;
