import { useState } from 'react';
import styles from './JobPage.module.scss';
import AppliedJobs from './applied-jobs/AppliedJobs';
import CreateJobButton from './create-job-button/CreateJobButton';
import Drawer, { DrawerItemEnum } from './drawer/Drawer';
import ManageJobs from './manage-jobs/ManageJobs';
import SavedJobs from './saved-jobs/SavedJobs';
import Search from './search/Search';

export interface IJobPage { }

const middleComponentMap = {
  [DrawerItemEnum.SEARCH]: <Search />,
  [DrawerItemEnum.SAVED]: <SavedJobs />,
  [DrawerItemEnum.APPLIED]: <AppliedJobs />,
  [DrawerItemEnum.MANAGE]: <ManageJobs />
}

const JobPage: React.FC<IJobPage> = () => {

  const [selectedDrawerItem, setSelectedDrawerItem] = useState(DrawerItemEnum.SEARCH)

  const handleSelectDrawerItem = (drawerItem) => {
    setSelectedDrawerItem(drawerItem)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CreateJobButton />
        <Drawer selected={selectedDrawerItem} onClick={handleSelectDrawerItem} />
      </div>
      <div className={styles.middle}>
        {middleComponentMap[selectedDrawerItem]}
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          Suggest me something to place here to look this page better
        </div>
      </div>
    </div>
  );
};

export default JobPage;
