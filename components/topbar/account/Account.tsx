import { Avatar, Link, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react';

import styles from './Account.module.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UserContext } from '../../../contexts/user.context';
import { signOutFirebase } from '../../../services/firebase';

enum ActionEnum {
    LINK = 'link',
    ACTION = 'action',
}

interface AccountMenuItem {
    name: string,
    icon: React.ReactNode,
    action: {
        type: ActionEnum,
        href?: string,
        onClick?: any
    }
}



export interface IAccount {
}

const Account: React.FC<IAccount> = () => {
    const [userAnchorEl, setUserAnchorEl] = useState(null)
    const userOpen = Boolean(userAnchorEl)
    const router = useRouter()

    const accountMenuItemList: AccountMenuItem[] = [
        {
            name: 'Profile',
            icon: <AccountCircleIcon />,
            action: {
                type: ActionEnum.LINK,
                href: '/profile'
            }
        },
        {
            name: 'Setting',
            icon: <SettingsIcon />,
            action: {
                type: ActionEnum.LINK,
                href: '/settings'
            }
        },
        {
            name: 'Switch Account',
            icon: <SwitchAccountIcon />,
            action: {
                type: ActionEnum.ACTION,
                onClick: () => { }
            }
        },
        {
            name: 'Logout',
            icon: <ExitToAppIcon />,
            action: {
                type: ActionEnum.ACTION,
                onClick: () => {
                    signOutFirebase().then(
                        () => router.push('/login')
                    )
                }
            }
        }
    ]

    const handleUserClick = (e) => {
        setUserAnchorEl(e.currentTarget)
    }

    const handleUserClose = (e) => {
        setUserAnchorEl(null)
    }

    const { user } = useContext(UserContext)


    const UserMenu = <Menu
        anchorEl={userAnchorEl}
        open={userOpen}
        onClose={handleUserClose}
        onClick={handleUserClose}
    >
        {accountMenuItemList.map(el => (
            <MenuItem key={el.name}>
                {
                    (el.action.type === ActionEnum.LINK && el.action.href) ? (
                        <Link href={el.action.href} className={styles.menuItem}>
                            {el.icon}
                            {el.name}
                        </Link>
                    ) : el.action.type === ActionEnum.ACTION && el.action.onClick ? (
                        <div className={styles.menuItem} onClick={(e) => el.action.onClick()}>
                            {el.icon}
                            {el.name}
                        </div>
                    ) : <></>
                }

            </MenuItem>
        ))}
    </Menu >

    return (
        <>
            <button className={styles.accountButton} onClick={handleUserClick}>
                {user && (
                    <Avatar className={styles.avatar} alt={'User'} >
                        <Image src={user.profileImage.url} alt={user.profileImage.name} fill />
                    </Avatar>
                )}

            </button>
            {UserMenu}
        </>
    )
}

export default Account
