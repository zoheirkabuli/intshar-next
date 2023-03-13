import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';

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
    query: gql`
      query MyQuery(
        $where: ImageCarouselWhereUniqueInput = { title: "Hero Image Carousel" }
      ) {
        imageCarousel(where: $where) {
          id
          slides {
            id
            title
            image {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      heroCarousel: imageCarousel.slides,
    },
  };
}
