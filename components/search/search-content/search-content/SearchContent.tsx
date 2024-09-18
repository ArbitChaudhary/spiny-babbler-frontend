import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import JobCard from '../../../cards/job-card/JobCard';
import UserCard from '../../../cards/user-card/UserCard';
import styles from './SearchContent.module.scss';

export interface ISearchContent {
}

const SearchContent: React.FC<ISearchContent> = () => {
    const [currnetSearch, setCurrentSearch] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentSearch(newValue);
    };

    const gridSizings = [
        {
            xs: 12,
            sm: 6,
            md: 4
        },
        {
            xs: 12,
            sm: 6,
        },
        {
            xs: 12,
            sm: 6,
        },
    ]

    const searchItems = [
        () => <UserCard user={undefined} />,
        () => <JobCard />,
        () => <JobCard />,
    ]


    return (
        <div className={styles.container}>
            <Tabs value={currnetSearch} onChange={handleChange} className={styles.tabs}>
                <Tab label={'Users'} className={styles.tab} />
                <Tab label={'Companies'} className={styles.tab} />
                <Tab label={'Jobs'} className={styles.tab} />
            </Tabs>
            <Grid container className={styles.content} spacing={2}>
                <Grid item {...gridSizings[currnetSearch]}>
                    {searchItems[currnetSearch]()}
                </Grid>
                <Grid item {...gridSizings[currnetSearch]}>
                    {searchItems[currnetSearch]()}
                </Grid>
                <Grid item {...gridSizings[currnetSearch]}>
                    {searchItems[currnetSearch]()}
                </Grid>
                <Grid item {...gridSizings[currnetSearch]}>
                    {searchItems[currnetSearch]()}
                </Grid>
                <Grid item {...gridSizings[currnetSearch]}>
                    {searchItems[currnetSearch]()}
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchContent
