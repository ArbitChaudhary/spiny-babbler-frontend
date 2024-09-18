import { Avatar } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../../../../common/ui/button/Button';
import CardContainer from '../../../../common/ui/card-container/CardContainer';
import styles from './RecommendedCompany.module.scss';
const RecommendeCompnay = () => {
  return (
    <CardContainer title="Recommended Company">
      <div className={styles.container}>
        <div className={styles.recCompanies}>
          <div className={styles.recCompany}>
            <Avatar className={styles.avatar}>
              <Image src="" alt="" fill />
            </Avatar>
            <div className={styles.cName}>Company Name</div>
            <div className={styles.cHeadline}>
              Code is poetry written for machines to dance.
            </div>
            <div className={styles.memCount}>100 Followers</div>
            <CustomButton>Follow</CustomButton>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default RecommendeCompnay;
