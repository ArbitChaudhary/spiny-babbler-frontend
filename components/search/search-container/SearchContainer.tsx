import { Divider } from '@mui/material';
import Card from '../../../common/ui/card/Card';
import SearchBar from '../search-bar/SearchBar';
import SearchContent from '../search-content/search-content/SearchContent';

import styles from './SearchContainer.module.scss';

export interface ISearchContainer {
}

const SearchContainer: React.FC<ISearchContainer> = () => {
    return (
        <Card>
            <div className={styles.container}>
                <div className={styles.top}>
                    <SearchBar />
                </div>
                <Divider />
                <div className={styles.content}>
                    <SearchContent />
                </div>
            </div>
        </Card>
    )
}

export default SearchContainer
