import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';

// * query

import { GET_IMAGE_CAROUSEL_BY_TITLE } from '@/lib/queries';

// * components
import HeroSlider from '@/components/home/HeroSlider';

export default function Home({ heroCarousel }) {
  return (
    <>
      <Head>
        <title>الانتشار</title>
        <meta
          name="description"
          content="شركة رائدة في مجال الخدمات الالكترونية وتوزيع بطاقات الهدايا الرقمية"
        />
      </Head>
      <HeroSlider carousel={heroCarousel} />
    </>
  );
}

export async function getServerSideProps() {
  const {
    data: { imageCarousel },
  } = await client.query({
    query: GET_IMAGE_CAROUSEL_BY_TITLE,
    variables: { title: 'Hero Image Carousel' },
  });

  return {
    props: {
      heroCarousel: imageCarousel.slides,
    },
  };
}
