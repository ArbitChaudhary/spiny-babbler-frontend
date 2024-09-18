import React from 'react';
import Suggestion from '../suggestion/Suggestion';
import styles from './suggestionList.module.scss';

export interface ISuggestionList {}

const SuggestionList: React.FC<ISuggestionList> = () => {
  return (
    <div className={styles.container}>
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </div>
  );
};

export default SuggestionList;
