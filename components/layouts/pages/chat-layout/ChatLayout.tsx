import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './ChatLayout.module.scss';

export interface IChatLayout extends IChildrenProps { }

const ChatLayout: React.FC<IChatLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <>{children}</>}
    </Container>
  );
};

export default ChatLayout;
