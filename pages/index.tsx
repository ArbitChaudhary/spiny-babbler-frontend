import PageWrapper from '../common/components/PageWrapper';
import Feed from '../components/feed/feed/Feed';
import { mockFeedProps } from '../components/feed/feed/Feed.mocks';
import HomeLayout from '../components/layouts/pages/home-layout/HomeLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import PostCreate from '../components/post-create/PostCreate';
import { mockPostCreateProps } from '../components/post-create/PostCreate.mocks';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <HomeLayout>
        <PostCreate {...mockPostCreateProps.base} />
        <Feed {...mockFeedProps.base} />
      </HomeLayout>
    </PageWrapper>
  );
};

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
