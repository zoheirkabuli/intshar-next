import Head from 'next/head';
import client from '@/lib/apollo-client';

// * query
import { GET_IMAGE_CAROUSEL_BY_TITLE } from '@/lib/queries';

// * components
import HeroSlider from '@/components/home/HeroSlider';
import HomeAbout from '@/components/home/HomeAbout';

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
      <HomeAbout />
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
