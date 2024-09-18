import { Avatar } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../../../common/ui/button/Button';
import styles from './UserCard.module.scss';

export interface IUserCard {
  user: any;
}

const UserCard: React.FC<IUserCard> = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar className={styles.avatar} alt={'User'}>
          <Image
            src={user.profileImage.url}
            alt={user.profileImage.name}
            fill
          />
        </Avatar>
      </div>
      <div className={styles.detail}>
        <h2 className={styles.name}>
          {user?.firstName} {user?.familyName}
        </h2>
        <div className={styles.headline}>{user?.headline}</div>
        <div className={styles.detail}>
          <span className={styles.followers}>10 followers</span>
        </div>
        <div className={styles.actions}>
          <CustomButton>Follow</CustomButton>
          <CustomButton>Connect</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
