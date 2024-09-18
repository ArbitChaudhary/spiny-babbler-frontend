import PageWrapper from '../../common/components/PageWrapper';
import CreateGroup from '../../components/Group/create-group/CreateGroup';
import CreateGroupLayout from '../../components/layouts/pages/create-group-layout/CreateGroupLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Create: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <PrimaryLayout>
        <CreateGroupLayout>
          <CreateGroup />
        </CreateGroupLayout>
      </PrimaryLayout>
    </PageWrapper>
  );
};

export default Create;
