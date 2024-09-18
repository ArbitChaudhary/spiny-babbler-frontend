import styles from './SearchBar.module.scss';

import SearchIcon from '@mui/icons-material/Search';

export interface ISearchBar {
}

const SearchBar: React.FC<ISearchBar> = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Search jobs' />
            <button>
                <SearchIcon />
            </button>
        </div>
    )
}

export default SearchBar
