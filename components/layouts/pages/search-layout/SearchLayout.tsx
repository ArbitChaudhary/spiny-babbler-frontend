import { Container } from '@mui/material';
import { IChildrenProps } from '../../../../common/interfaces/children-props.interface';
import styles from './SearchLayout.module.scss';

export interface ISearchLayout extends IChildrenProps {
}

const SearchLayout: React.FC<ISearchLayout> = ({ children }) => {
    return (
        <Container className={styles.container}>{children}</Container>
    )
}

export default SearchLayout
