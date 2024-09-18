import CardContainer from '../../../../common/ui/card-container/CardContainer';
import styles from './ConnectionRecommendation.module.scss';

import PeopleIcon from '@mui/icons-material/People';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { userService } from '../../../../services/services/users.service';
import UserCard from '../../../cards/user-card/UserCard';
import Search from '../../../jobs/job-page/search/Search';

export interface IConnectionRecommendation {}

const ConnectionRecommendation: React.FC<IConnectionRecommendation> = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const func = async () => {
      const allusers = await userService.getAllUsers();
      setAllUsers(allusers.docs);
    };
    func();
  }, []);

  return (
    <>
      <Search />
      <CardContainer
        title="Connection Recommendation"
        titleIcon={<PeopleIcon />}
      >
        <Grid container className={styles.recommendationList} spacing={2}>
          {allUsers.map((users, idx) => (
            <Grid item xs={12} sm={6} md={4}>
              <UserCard key={idx} user={users} />
            </Grid>
          ))}

          {/* <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid> */}
        </Grid>
      </CardContainer>
    </>
  );
};

export default ConnectionRecommendation;
