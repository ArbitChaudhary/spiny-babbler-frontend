import { Container } from '@mui/material';
import React from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './CompanyEditLayout.module.scss';
export interface ICompanyEditLayout extends IChildrenProps {}

const CompanyEditLayout: React.FC<ICompanyEditLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default CompanyEditLayout;
