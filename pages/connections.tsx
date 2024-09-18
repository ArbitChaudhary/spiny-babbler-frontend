import PageWrapper from '../common/components/PageWrapper';
import ConnectionPage from '../components/connections/connection-page/ConnectionPage';
import ConnectionsLayout from '../components/layouts/pages/connections-layout/ConnectionsLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Connections: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <ConnectionsLayout>
        <ConnectionPage />
      </ConnectionsLayout>
    </PageWrapper>
  );
};

Connections.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Connections;
