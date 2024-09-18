import { Container } from '@mui/material';
import React from 'react';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './ProfileEditLayout.module.scss';

export interface IProfileEditLayout extends IChildrenProps {}

const ProfileEditLayout: React.FC<IProfileEditLayout> = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default ProfileEditLayout;
