import { useState } from 'react';
import styles from './ConnectionPage.module.scss';
import RecommendeCompnay from './company/RecommendeCompnay';
import ConnectionRecommendation from './connection-recommendation/ConnectionRecommendation';
import ConnectionRequests from './connection-requests/ConnectionRequests';
import CreateCompanyButton from './create-company-button/CreateCompanyButton';
import CreateGroupButton from './create-group-button/CreateGroupButton';
import Drawer, { DrawerItemEnum } from './drawer/Drawer';
import RecommendedGroups from './groups/RecommendedGroups';

const middleComponentMap = {
  // [DrawerItemEnum.SEARCH]: <Search />,
  [DrawerItemEnum.SEARCH]: <ConnectionRecommendation />,
  [DrawerItemEnum.REQUESTS]: <ConnectionRequests />,
  [DrawerItemEnum.GROUPS]: <RecommendedGroups />,
  [DrawerItemEnum.COMPANY]: <RecommendeCompnay />,
  [DrawerItemEnum.MANAGE]: <div className="">Manage Jobs</div>,
};

const ConnectionPage = () => {
  const [selectedDrawerItem, setSelectedDrawerItem] = useState(
    DrawerItemEnum.SEARCH
  );

  const handleSelectDrawerItem = (drawerItem) => {
    setSelectedDrawerItem(drawerItem);
  };
  return (
    <div className={styles.container}>
      <div className={styles.cLeft}>
        <CreateCompanyButton />
        <CreateGroupButton />
        <Drawer
          selected={selectedDrawerItem}
          onClick={handleSelectDrawerItem}
        />
      </div>
      <div className={styles.cRight}>
        {middleComponentMap[selectedDrawerItem]}
      </div>
    </div>
  );
};

export default ConnectionPage;
