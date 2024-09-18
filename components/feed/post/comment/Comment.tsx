import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { userService } from '../../../../services/services/users.service';
import styles from './Comment.module.scss';

export interface IComment {
    comment: any;
}

const Comment: React.FC<IComment> = ({ comment }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const func = async () => {
            const data = await userService.getById(comment.author)
            setUser(data)
        }
        func()
    }, [])

    return (
        (user && (
            <div className={styles.comment}>
                <div className={styles.avatar}>
                    <Avatar alt={'User'} sx={{ width: 40, height: 40 }}>
                        <Image src={user.profileImage.url} alt={user.profileImage.name} fill />
                    </Avatar>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <div className={styles.user}>
                            {`${user.firstName} ${user.familyName}`}
                        </div>
                        <div className={styles.time}>
                            2 min ago
                        </div>
                    </div>
                    <div className={styles.content}>{comment.content}</div>
                </div>
            </div>
        ))

    )
}

export default Comment
