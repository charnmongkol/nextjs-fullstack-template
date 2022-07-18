import { IBoxSectionLeft } from './BoxSectionLeft';

//testing interface
const base: IBoxSectionLeft = {
  header: 'PLAYERS',
  title: 'CONNECTION',
  text: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
  num: '01',
  borderColor: '#603ebe',
  bgColor: '#FFFFFF',
};
const base2: IBoxSectionLeft = {
  header: '',
  title: 'COLLABORATION',
  text: 'Work with recruiter to increase your chances of finding talented athlete.',
  num: '02',
  borderColor: '#603ebe',
  bgColor: '#F5F4F9',
};

const base3: IBoxSectionLeft = {
  header: '',
  title: 'GROWTH',
  text: 'Save your time, recruit proper athlets for your team.',
  num: '03',
  borderColor: '#FFFFFF',
  bgColor: '#090C35',
};

export const mockBoxSectionLeftProps = {
  base,
  base2,
  base3,
};
