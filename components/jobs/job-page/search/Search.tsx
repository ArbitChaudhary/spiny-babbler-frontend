import { SearchOutlined } from "@mui/icons-material";
import { Divider, Paper } from "@mui/material";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { PostTypeEnum, jobService } from "../../../../services/services/jobs.service";
import Job from "../job/Job";
import styles from './Search.module.scss';

export interface ISearch {
}

const Search: React.FC<ISearch> = () => {
    const [searchText, setSearchText] = useState("")
    const [jobs, setJobs] = useState([])

    const fetchJobs = async (value) => {
        try {

            const response = await jobService.getJobs({
                title: value
            })

            const jobLists = response?.docs;

            setJobs(jobLists)

        } catch (error) {
            console.log(error)
        }
    }


    const delayedSearch = useCallback(debounce(async (value) => fetchJobs(value)
        , 1000), [])

    useEffect(() => {
        fetchJobs("")
    }, [])


    useEffect(() => {
        delayedSearch(searchText)
    }, [searchText, delayedSearch])


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }


    return (
        <Paper className={styles.container}>
            <div className={styles.searchBar}>
                <input placeholder="Search Jobs" onChange={handleChange} />
                <div className={styles.searchIcon}>
                    <SearchOutlined />
                </div>
            </div>
            <Divider />
            <div className={styles.jobListing}>
                {jobs.length > 0 ? (
                    jobs.map((job) => (<Job key={job._id} job={{
                        _id: job._id,
                        location: job.location,
                        title: job.title,
                        ...(job.postType === PostTypeEnum.USER && {
                            user: {
                                name: job.author.firstName,
                                imageUrl: "https://dummyimage.com/200x200/000/fff"
                            }
                        })
                    }} />))
                ) : <div>No Result Found</div>}
            </div>
        </Paper>
    )
}

export default Search;