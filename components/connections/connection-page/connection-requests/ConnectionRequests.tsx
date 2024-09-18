import CardContainer from '../../../../common/ui/card-container/CardContainer';
import styles from './ConnectionRequests.module.scss';

import GroupIcon from '@mui/icons-material/Group';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../../../../common/ui/button/Button';
import { userService } from '../../../../services/services/users.service';

export interface IIConnectionRequests {
  conRequest: any;
}

const ConnectionRequest: React.FC<IIConnectionRequests> = ({ conRequest }) => {
  return (
    <div className={styles.request}>
      <div className={styles.left}>
        <div className={styles.avatar}>
          <Avatar className={styles.avatar} alt={'User'}>
            <Image src={'https://picsum.photos/200/200'} alt={'image'} fill />
          </Avatar>
        </div>
        <div className={styles.content}>
          <div className={styles.name}>User Name</div>
          <div className={styles.detail}>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </div>
    </div>
  );
};

export interface IConnectionRequests {}

const ConnectionRequests: React.FC<IConnectionRequests> = () => {
  const [conRequests, setConRequests] = useState([]);

  useEffect(() => {
    const func = async () => {
      const conrequests = await userService.getUserSelfConnectionRequests();
      setConRequests(conrequests.docs);
    };
  });
  return (
    <CardContainer title="Connection Requests" titleIcon={<GroupIcon />}>
      <div className={styles.requestList}>
        {conRequests.map((request, idx) => (
          <ConnectionRequest key={idx} conRequest={request} />
        ))}
        {/* <ConnectionRequest /> */}
        {/* <ConnectionRequest /> */}
      </div>
    </CardContainer>
  );
};

export default ConnectionRequests;
