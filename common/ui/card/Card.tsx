import { Paper } from '@mui/material';
import { IChildrenProps } from '../../../common/interfaces/children-props.interface';
import styles from './Card.module.scss';

export interface ICardContainer extends IChildrenProps {
}

const Card: React.FC<ICardContainer> = ({ children }) => {
    return (
        <Paper className={styles.container}>
            {children}
        </Paper >
    )
}

export default Card
