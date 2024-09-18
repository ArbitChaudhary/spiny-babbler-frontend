import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import { UserContext } from '../../../../contexts/user.context';
import styles from './CompanyProfileLayout.module.scss';

export interface ICompanyProfileLayout extends IChildrenProps { }

const CompanyProfileLayout: React.FC<ICompanyProfileLayout> = ({
  children,
}) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Container className={styles.container}>
        {user && <>{children}</>}
      </Container>
    </>
  );
};

export default CompanyProfileLayout;
