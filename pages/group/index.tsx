import PageWrapper from '../../common/components/PageWrapper';
import Group from '../../components/Group/Group';
import GroupLayout from '../../components/layouts/pages/group-layout/GroupLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Groups: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <GroupLayout>
          <Group />
        </GroupLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default Groups;
