import Head from 'next/head';
import client from '@/lib/apollo-client';

// * query
import { GET_PAGE_BT_PATH } from '@/lib/queries';

// * components
import PageBox from '@/components/pages/PageBox';

const Page = ({ page }) => {
  return (
    <>
      <Head>
        <title>{`${page.title} | الانتشار`}</title>
      </Head>

      <PageBox page={page} />
    </>
  );
};

export default Page;

export async function getServerSideProps(ctx) {
  const {
    data: { page },
  } = await client.query({
    query: GET_PAGE_BT_PATH,
    variables: { path: ctx.params.pagePath },
  });

  return {
    props: {
      page: page,
    },
  };
}
