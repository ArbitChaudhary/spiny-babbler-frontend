import { Avatar } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../../../../common/ui/button/Button';
import CardContainer from '../../../../common/ui/card-container/CardContainer';
import styles from './RecommendedGroups.module.scss';

export interface IRecommendedGroups {}

const RecommendedGroups: React.FC<IRecommendedGroups> = () => {
  return (
    <CardContainer title="Recommended Groups">
      <div className={styles.container}>
        <div className={styles.recGroups}>
          <div className={styles.recGroup}>
            <Avatar className={styles.avatar}>
              <Image src="" alt="" fill />
            </Avatar>
            <div className={styles.gName}>GroupName</div>
            <div className={styles.headline}>
              Code is poetry written for machines to dance.
            </div>
            <div className={styles.memCount}>100 members</div>
            <CustomButton>Join</CustomButton>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default RecommendedGroups;
