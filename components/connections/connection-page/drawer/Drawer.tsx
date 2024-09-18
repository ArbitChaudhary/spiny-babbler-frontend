import { Search } from '@mui/icons-material';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
} from '@mui/material';
import styles from './Drawer.module.scss';

export interface IDrawer {
  selected: DrawerItemEnum;
  onClick: (drawerItem: string) => void;
}

export enum DrawerItemEnum {
  SEARCH,
  REQUESTS,
  RECOMMENDED,
  GROUPS,
  COMPANY,
  MANAGE,
}

const drawerItemMap = {
  [DrawerItemEnum.SEARCH]: {
    title: 'Search for people',
    icon: <Search />,
  },
  [DrawerItemEnum.REQUESTS]: {
    title: 'Requests',
    icon: <PersonIcon />,
  },
  [DrawerItemEnum.GROUPS]: {
    title: 'Groups',
    icon: <GroupIcon />,
  },
  [DrawerItemEnum.COMPANY]: {
    title: 'Company',
    icon: <BadgeIcon />,
  },
};

const Drawer: React.FC<IDrawer> = ({ selected, onClick }) => {
  return (
    <Paper>
      <List className={styles.list}>
        {Object.keys(drawerItemMap).map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              selected={selected.toString() === item}
              onClick={(e) => {
                onClick(item);
              }}
            >
              <ListItemIcon>{drawerItemMap[item].icon}</ListItemIcon>
              {drawerItemMap[item].title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Drawer;
