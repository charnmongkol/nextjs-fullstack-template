import Image from 'next/image';
import Primary from '../components/Layouts/Primary/Primary';
import SlideMobile from '../components/Slide/SlideMobile/SlideMobile';
import BoxSection from '../components/utilities/BoxSection/BoxSection';
import { mockBoxSectionProps } from '../components/utilities/BoxSection/BoxSection.mocks';
import BoxSectionLeft from '../components/utilities/BoxSectionLeft/BoxSectionLeft';
import { mockBoxSectionLeftProps } from '../components/utilities/BoxSectionLeft/BoxSectionLeft.mocks';
import baseketballer from '../public/images/baseketball.png';
import footballer from '../public/images/footballer.png';
import { useMediaQuery } from '../utils/breakpointsRender';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <section className="container overflow-x-hidden mx-auto">
      {!isBreakpoint ? (
        <>
          <div className="relative">
            <div className="absolute w-full h-full md:left-0 sm:-left-72 xs:-left-72">
              <div className="w-full h-full flex justify-start items-center md:pl-14 md:pt-24 ">
                <Image alt="footballer" src={footballer} layout="fixed" />
              </div>
            </div>
            <BoxSection {...mockBoxSectionProps.base} />
            <BoxSection {...mockBoxSectionProps.base2} />
            <BoxSection {...mockBoxSectionProps.base3} />
          </div>
          <div className="md:static sm:relative xs:relative">
            <div className="absolute w-full h-auto md:right-0 sm:-right-96 xs:-right-96">
              <div className="w-full h-auto flex justify-end items-center md:pr-14 sm:pt-24 ">
                <div className="md:w-6/12 w-full h-full ">
                  <Image
                    alt="baseketballer"
                    src={baseketballer}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <BoxSectionLeft {...mockBoxSectionLeftProps.base} />
            <BoxSectionLeft {...mockBoxSectionLeftProps.base2} />
            <BoxSectionLeft {...mockBoxSectionLeftProps.base3} />
          </div>
        </>
      ) : (
        <>
          <SlideMobile></SlideMobile>
        </>
      )}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Primary>{page}</Primary>;
};
