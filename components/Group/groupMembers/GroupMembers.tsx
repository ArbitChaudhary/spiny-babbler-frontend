import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import styles from './GroupMembers.module.scss';

const GroupMembers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.connections}>
        <div className={styles.connection}>
          <Avatar className={styles.image}>
            <Image
              src=""
              alt=""
              height={80}
              width={80}
              style={{ objectFit: 'cover' }}
            />
          </Avatar>
          <div className={styles.about}>
            <div className={styles.name}>Hero Alom</div>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
          <div className={styles.conNumber}>
            {' '}
            <span>100 Connections</span>
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.connection}>
          <Avatar className={styles.image}>
            <Image
              src=""
              alt=""
              height={80}
              width={80}
              style={{ objectFit: 'cover' }}
            />
          </Avatar>
          <div className={styles.about}>
            <div className={styles.name}>Hero Alom</div>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
          <div className={styles.conNumber}>
            {' '}
            <span>100 Connections</span>
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.connection}>
          <Avatar className={styles.image}>
            <Image
              src=""
              alt=""
              height={80}
              width={80}
              style={{ objectFit: 'cover' }}
            />
          </Avatar>
          <div className={styles.about}>
            <div className={styles.name}>Hero Alom</div>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
          <div className={styles.conNumber}>
            {' '}
            <span>100 Connections</span>
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.connection}>
          <Avatar className={styles.image}>
            <Image
              src=""
              alt=""
              height={80}
              width={80}
              style={{ objectFit: 'cover' }}
            />
          </Avatar>
          <div className={styles.about}>
            <div className={styles.name}>Hero Alom</div>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
          <div className={styles.conNumber}>
            {' '}
            <span>100 Connections</span>
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupMembers;
