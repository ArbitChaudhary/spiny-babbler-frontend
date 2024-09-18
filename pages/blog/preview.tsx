import BlogDetail from '../../components/blog-preview/BlogDetail';
import BlogPreviewLayout from '../../components/layouts/pages/blog-preview-layout/BlogPreviewLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const BlogPreview: NextPageWithLayout = () => {
  return (
    <PrimaryLayout>
      <BlogPreviewLayout>
        <BlogDetail />
      </BlogPreviewLayout>
    </PrimaryLayout>
  );
};

export default BlogPreview;
