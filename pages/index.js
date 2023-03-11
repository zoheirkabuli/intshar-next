import Head from 'next/head';

// * components
import HeroSlider from '@/components/home/HeroSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>الانتشار</title>
        <meta
          name="description"
          content="شركة رائدة في مجال الخدمات الالكترونية وتوزيع بطاقات الهدايا الرقمية"
        />
      </Head>
      <HeroSlider />
    </>
  );
}
