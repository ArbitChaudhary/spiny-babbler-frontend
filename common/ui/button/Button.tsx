import { Button } from '@mui/material';
import styles from './Button.module.scss';

export interface IButton {
    children: string
}

const CustomButton: React.FC<IButton> = ({ children }) => {
    return <Button variant='contained' className={styles.button}>{children}</Button>
}

export default CustomButton
