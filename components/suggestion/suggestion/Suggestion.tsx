import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Image from 'next/image';
import styles from './suggestion.module.scss';

export interface ISuggestion {}

const Suggestion: React.FC<ISuggestion> = () => {
  return (
    <div className={styles.suggestion}>
      <div className={styles.ImagesAndName}>
        <div className={styles.image}>
          <Image src={'https://picsum.photos/200/300'} alt={'image'} fill />
        </div>
        <div className={styles.name}>Suggested Names</div>
      </div>
      <PersonAddAltIcon className={styles.addIcon} />
    </div>
  );
};

export default Suggestion;
