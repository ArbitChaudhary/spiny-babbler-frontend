import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { userService } from '../../../services/services/users.service';
import styles from './MyConnections.module.scss';

export interface IMyConnections {}

const MyConnections: React.FC<IMyConnections> = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const func = async () => {
      const connection = await userService.getUserSelfConnections();
      return setConnections(connection.docs);
    };
    func();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.connections}>
        {/* start of connection */}

        {connections.map((connection, idx) => (
          <div className={styles.connection} key={idx}>
            <Avatar className={styles.image}>
              <Image
                src={connection.profileImage.url}
                alt={connection.profileImage.name}
                height={80}
                width={80}
                style={{ objectFit: 'cover' }}
              />
            </Avatar>
            <div className={styles.about}>
              <div className={styles.name}>
                {connection.firstName} {connection.familyName}
              </div>
              <p>{connection.headline} </p>
            </div>
            <div className={styles.conNumber}>
              {' '}
              <span>{connection.connections.length} connections</span>
              <MoreVertIcon />
            </div>
          </div>
        ))}
        {/* end of connection */}
      </div>
    </div>
  );
};

export default MyConnections;
