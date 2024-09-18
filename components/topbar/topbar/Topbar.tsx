import { Badge, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

import companyLogo from 'public/images/company-logo.png';
import styles from './Topbar.module.scss';

import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import Account from '../account/Account';
import Navigation from '../navigation/Navigation';
import SearchBar from '../search-bar/SearchBar';

export interface ITopbar {}

const Topbar: React.FC<ITopbar> = () => {
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={styles.container}>
      <Container className={styles.body}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={companyLogo} alt={'company name'} fill />
          </div>
          {matchesSmall && <SearchBar />}
        </div>
        <div className={styles.right}>
          <Navigation />
          <Link href={'/chat'} className={styles.chat}>
            <Badge badgeContent={2} color={'primary'}>
              <MessageIcon />
            </Badge>
          </Link>
          <Link href={'/notifications'} className={styles.notification}>
            <Badge badgeContent={4} color={'secondary'}>
              <NotificationsIcon />
            </Badge>
          </Link>
          <Account />
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
