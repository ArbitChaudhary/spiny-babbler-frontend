import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './BlogLayout.module.scss';

export interface IBlogLayout extends IChildrenProps { }

const BlogLayout: React.FC<IBlogLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <>{children}</>}
    </Container>
  );
};

export default BlogLayout;
