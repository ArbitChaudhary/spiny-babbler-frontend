import { Avatar } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../../../common/ui/button/Button';
import styles from './AutoSuggestion.module.scss';

export interface IAutoSuggestion {
  //   suggestion: {
  //     author: {
  //       firstName: string;
  //       familyName: string;
  //       profileImage: {
  //         url: string;
  //         name: string;
  //       };
  //     };
  //   };
  recuser: any;
}

const AutoSuggestion: React.FC<IAutoSuggestion> = ({ recuser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.suggestionList}>
        {/* start of suggestions */}
        {/* {author && ( */}
        <>
          {/* {author.map((suggestionList, index) => ( */}
          <div className={styles.suggestion}>
            <div className={styles.avatar}>
              <Avatar className={styles.image}>
                <Image
                  src={recuser.profileImage.url}
                  alt={recuser.profileImage.name}
                  fill
                />
              </Avatar>
              <div className={styles.name}>
                <span>
                  {recuser.firstName} {recuser.familyName}
                </span>
                <span>Art Designer</span>
              </div>
            </div>
            <CustomButton>Connect</CustomButton>
          </div>
          {/* ))} */}
        </>
        {/* )} */}

        {/* end of suggestions */}
        {/* <div className={styles.seeAll}>See All</div> */}
      </div>
    </div>
  );
};

export default AutoSuggestion;
