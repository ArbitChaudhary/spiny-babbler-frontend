import Blogs from '../components/blogs/Blogs';
import BlogLayout from '../components/layouts/pages/blog-layout/BlogLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

const blog = () => {
  return (
    <PrimaryLayout>
      <BlogLayout>
        <Blogs />
      </BlogLayout>
    </PrimaryLayout>
  );
};

export default blog;
