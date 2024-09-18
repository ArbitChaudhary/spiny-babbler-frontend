import { Avatar } from '@mui/material';
import Image from 'next/image';
import styles from './Peoples.module.scss';

const People: React.FC = () => {
    return (
        <div className={styles.people}>
            <div className={styles.avatar}>
                <Avatar className={styles.avatar} alt={'User'} >
                    <Image src={'https://picsum.photos/200/200'} alt={'image'} fill />
                </Avatar>
            </div>
            <div className={styles.detail}>
                <div className={styles.name}>User Name</div>
                <div className={styles.lastMessage}>Lorem ipsum dolor sit amet.</div>
            </div>
        </div>
    )
}

export interface IPeoples {
}

const Peoples: React.FC<IPeoples> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                Peoples
            </div>
            <div className={styles.peopleList}>
                <People />
                <People />
                <People />
                <People />
            </div>
        </div>
    )
}

export default Peoples
