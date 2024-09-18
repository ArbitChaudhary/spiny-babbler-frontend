import { Container } from '@mui/material';
import React from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './CreateJobLayout.module.scss';

export interface ICreateJobLayout extends IChildrenProps {}

const CreateJobLayout: React.FC<ICreateJobLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default CreateJobLayout;
