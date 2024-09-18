import PageWrapper from '../common/components/PageWrapper';
import NotificationsLayout from '../components/layouts/pages/notifications-layout/NotificationsLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import NotificationList from '../components/notifications/notification-list/NotioficationList';
import { NextPageWithLayout } from './page';

const Notifications: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <NotificationsLayout>
        <NotificationList />
      </NotificationsLayout>
    </PageWrapper>
  );
};

Notifications.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Notifications;
