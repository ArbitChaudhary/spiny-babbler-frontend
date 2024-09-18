
import PageWrapper from '../common/components/PageWrapper';
import SearchLayout from '../components/layouts/pages/search-layout/SearchLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SearchContainer from '../components/search/search-container/SearchContainer';
import { NextPageWithLayout } from './page';

const Jobs: NextPageWithLayout = () => {


    return (
        <PageWrapper >
            <SearchLayout>
                <SearchContainer />
            </SearchLayout>
        </PageWrapper>
    );
}


Jobs.getLayout = (page) => {
    return (
        <PrimaryLayout>
            {page}
        </PrimaryLayout>
    )
}

export default Jobs

