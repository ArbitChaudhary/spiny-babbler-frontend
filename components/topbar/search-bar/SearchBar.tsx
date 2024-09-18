import styles from './SearchBar.module.scss';

import SearchIcon from '@mui/icons-material/Search';

export interface ISearchBar {
}

const SearchBar: React.FC<ISearchBar> = () => {
    return (
        <div className={styles.searchBar}>
            <SearchIcon />
            <input type="text" placeholder='search for jobs and more..' />
        </div>
    )
}

export default SearchBar
