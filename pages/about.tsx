import Primary from '../components/Layouts/Primary/Primary';
import BoxSection from '../components/utilities/BoxSection/BoxSection';
import { mockBoxSectionProps } from '../components/utilities/BoxSection/BoxSection.mocks';
import BoxSectionLeft from '../components/utilities/BoxSectionLeft/BoxSectionLeft';
import { mockBoxSectionLeftProps } from '../components/utilities/BoxSectionLeft/BoxSectionLeft.mocks';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <BoxSection {...mockBoxSectionProps.base} />
      <BoxSection {...mockBoxSectionProps.base2} />
      <BoxSection {...mockBoxSectionProps.base3} />
      <BoxSectionLeft {...mockBoxSectionLeftProps.base} />
      <BoxSectionLeft {...mockBoxSectionLeftProps.base2} />
      <BoxSectionLeft {...mockBoxSectionLeftProps.base3} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Primary>{page}</Primary>;
};
