import { Edit, Save, Search, Work } from '@mui/icons-material';
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
  SAVED,
  APPLIED,
  MANAGE,
}

const drawerItemMap = {
  [DrawerItemEnum.SEARCH]: {
    title: 'Search For Jobs',
    icon: <Search />,
  },
  [DrawerItemEnum.SAVED]: {
    title: 'Saved Jobs',
    icon: <Save />,
  },
  [DrawerItemEnum.APPLIED]: {
    title: 'Applied Jobs',
    icon: <Work />,
  },
  [DrawerItemEnum.MANAGE]: {
    title: 'Manage Your Jobs',
    icon: <Edit />,
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
