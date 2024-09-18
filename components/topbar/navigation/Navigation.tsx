import { Link, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

import styles from './Navigation.module.scss';

import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';


const navElementList = [
    {
        name: 'Home',
        icon: <HomeIcon />,
        href: '/'
    },
    {
        name: 'Connections',
        icon: <PeopleAltIcon />,
        href: '/connections'
    },
    {
        name: 'Jobs',
        icon: <WorkIcon />,
        href: '/jobs'
    },
]

export interface INavigation {
}

const Navigation: React.FC<INavigation> = () => {
    const theme = useTheme()
    const matchesSmall = useMediaQuery(theme.breakpoints.up('sm'))
    const matchesMedium = useMediaQuery(theme.breakpoints.up('md'))

    const lengthOfNavElementMap = {
        xs: 0,
        sm: 2,
        md: 3
    }

    const [moreAnchorEl, setMoreAnchorEl] = useState(null)
    const moreOpen = Boolean(moreAnchorEl)

    const handleMoreClick = (e) => {
        setMoreAnchorEl(e.currentTarget)
    }

    const handleMoreClose = (e) => {
        setMoreAnchorEl(null)
    }


    const lengthOfNavElement = (matchesMedium ? lengthOfNavElementMap['md'] : matchesSmall ? lengthOfNavElementMap['sm'] : lengthOfNavElementMap['xs'])
    let menuItems = matchesSmall ? navElementList.slice(lengthOfNavElement, navElementList.length) : navElementList;

    const MoreMenu = menuItems.length > 0 && (
        <>
            <button className={styles.navItem} onClick={handleMoreClick}>
                <MoreHorizIcon />
            </button>
            <Menu
                anchorEl={moreAnchorEl}
                open={moreOpen}
                onClose={handleMoreClose}
            >
                {
                    menuItems.map(el => (
                        <MenuItem key={el.name}>
                            <Link href={el.href} className={styles.menuItem}>
                                {el.icon}
                                {el.name}
                            </Link>
                        </MenuItem>
                    ))
                }
            </ Menu>
        </>
    )

    return (
        <div className={styles.navigation}>
            {!matchesSmall && <button className={styles.navItem}>
                <SearchIcon />
            </button>}
            {matchesSmall && (
                <>
                    {navElementList.slice(0, lengthOfNavElement).map(el => (
                        <Link href={el.href} key={el.name} className={styles.navItem}>
                            {el.icon}
                        </Link>
                    ))}
                </>
            )}
            {MoreMenu}
        </div>
    )
}

export default Navigation
