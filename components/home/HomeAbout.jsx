/** @jsxImportSource @emotion/react */
import Image from 'next/image';

// * assets
import logo from '../../assets/img/about-logo.webp';

const HomeAbout = () => {
  return (
    <div
      css={(theme) => ({
        width: '100%',
        backgroundColor: theme.colors.bg,
        paddingBlock: '4rem',
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <div
        css={(theme) => ({
          width: theme.size.width,
          maxWidth: theme.size.maxWidth,
          display: 'flex',
          gap: '5rem',
          alignItems: 'center',
          '@media screen and (max-width:768px)': {
            flexDirection: 'column',
            gap: '2rem',
          },
        })}
      >
        <Image
          src={logo}
          alt="logo"
          css={{
            width: '40rem',
            aspectRatio: '1',
            height: 'auto',
            padding: '4rem',
            '@media screen and (max-width:768px)': {
              width: '100%',
            },
          }}
        />

        <div
          css={{
            flex: '1 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p
            css={(theme) => ({
              fontSize: '1.8rem',
              color: theme.colors.primary,
            })}
          >
            عن الانتشار
          </p>
          <h2 css={{ fontSize: '4rem', lineHeight: '1' }}>من نحن</h2>
          <div
            css={{
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'justify',
            }}
          >
            <p>
              مع استمرار اعتماد العالم أكثر فأكثر على التكنولوجيا ، أصبحت شركات
              التكنولوجيا جزءًا لا يتجزأ من حياتنا اليومية. من تزويدنا بالأدوات
              التي نحتاجها للبقاء على اتصال ، إلى مساعدتنا في إيجاد طرق جديدة
              للقيام بالأشياء بشكل أسرع وأفضل ، تُحدث شركات التكنولوجيا ثورة في
              طريقة عيشنا.
            </p>
            <p>
              يعتمد نجاح أي عمل في جوهره على رضا العملاء وجودة المنتجات أو
              الخدمات. يجب أن تكون شركات التكنولوجيا قادرة على مواكبة المشهد
              التكنولوجي المتغير باستمرار من خلال مواكبة الاتجاهات وإنشاء حلول
              مبتكرة تلبي احتياجات العملاء.
            </p>
            <p>
              هناك العديد من العوامل التي تساهم في جعل شركة تكنولوجيا ناجحة ولكن
              بعض العوامل الرئيسية تشمل تصميم منتج ممتاز قيادة إستراتيجية لخدمة
              العملاء وتمكين بيئة العمل وتعزيز التعاون الإبداعي.
            </p>
            <p>
              ومن هذا المنطلق فإن “الانتشار” شركة رائدة في مجال توزيع بطاقات
              الهدايا الرقمية والخدمات الالكترونية، تتميز بطاقم اداري ذو خبرة
              واسعة في هذا المجال لتصبح بذلك واحدة من أفضل الشركات في المنطقة،
              توفر حلول تكنولوجية حديثة للتوزيع الإلكتروني، قابلة للتوسع
              والريادة، تسعى لكسب ثقة زبائتها من خلال توفير اكثر من ٢٠٠ نوعا من
              البطاقات، وباسعار تنافسية وخدمة دعم فني ممتازة، مما يسهل التعامل
              اليومي لاصحاب المحال التجارية بتوفير جميع الكروت والبطاقات بجميع
              الفئات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
