import { Container } from '@mui/material';
import React from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './CreateGroupLayout.module.scss';

export interface ICreateGroupLayout extends IChildrenProps {}

const CreateGroupLayout: React.FC<ICreateGroupLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default CreateGroupLayout;
