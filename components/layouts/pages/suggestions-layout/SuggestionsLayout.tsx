import { Container } from '@mui/material';
import { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './suggestionsLayout.module.scss';

export interface ISuggestionsLayout extends IChildrenProps { }

const SuggestionsLayout: React.FC<ISuggestionsLayout> = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Container className={styles.container}>
      {user && <>{children}</>}
    </Container>
  );
};

export default SuggestionsLayout;
