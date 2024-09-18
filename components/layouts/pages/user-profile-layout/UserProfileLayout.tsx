import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './UserProfileLayout.module.scss';

export interface IUserProfileLayout extends IChildrenProps { }

const UserProfileLayout: React.FC<IUserProfileLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <> {children} </>}
    </Container>
  );
};

export default UserProfileLayout;
