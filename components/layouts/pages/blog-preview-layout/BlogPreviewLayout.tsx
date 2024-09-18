import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './BlogPreviewLayout.module.scss';

const BlogPreviewLayout: React.FC<IChildrenProps> = ({ children }) => {
  const { user } = useContext(UserContext);

  return <div className={styles.container}>{user && <>{children}</>}</div>;
};

export default BlogPreviewLayout;
