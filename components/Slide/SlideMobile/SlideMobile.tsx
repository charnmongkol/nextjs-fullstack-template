import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import baseketballer from '../../../public/images/baseketball.png';
import footballer from '../../../public/images/footballer.png';
import BoxMobile from '../../utilities/BoxMobile/BoxMobile';
import { mockBoxMobileProps } from '../../utilities/BoxMobile/BoxMobile.mocks';
import styles from './SlideMobile.module.css';

export interface ISlideMobile {}

const SlideMobile: React.FC<ISlideMobile> = () => {
  return (
    <>
      <div className={styles.boxHeader}>
        <h1 className={styles.header}>ATHLETS</h1>
        <div className={styles.boxImage}>
          <Image
            alt="footballer"
            src={footballer}
            layout="fixed"
            width={200}
            height={281}
          />
        </div>
      </div>
      <div>
        <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          <BoxMobile {...mockBoxMobileProps.base} />
          <BoxMobile {...mockBoxMobileProps.base2} />
          <BoxMobile {...mockBoxMobileProps.base3} />
        </Carousel>
      </div>
      <div className={styles.boxHeader}>
        <h1 className={styles.header}>PLAYERS</h1>
        <div className={styles.boxImage}>
          <Image
            alt="baseketballer"
            src={baseketballer}
            layout="fixed"
            width={302}
            height={249}
          />
        </div>
      </div>
      <div id="carouselBox">
        <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          <BoxMobile {...mockBoxMobileProps.base4} />
          <BoxMobile {...mockBoxMobileProps.base5} />
          <BoxMobile {...mockBoxMobileProps.base6} />
        </Carousel>
      </div>
    </>
  );
};

export default SlideMobile;
