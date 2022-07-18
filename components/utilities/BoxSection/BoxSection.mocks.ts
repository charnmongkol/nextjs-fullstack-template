import { IBoxSection } from './BoxSection';

//testing interface
const base: IBoxSection = {
  header: 'ATHLETS',
  title: 'CONNECTION',
  text: 'Connect with coaches directly, you can ping coaches to view profile.',
  num: '01',
  borderColor: '#603ebe',
  bgColor: '#FFFFFF',
};
const base2: IBoxSection = {
  header: '',
  title: 'COLLABORATION',
  text: 'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
  num: '02',
  borderColor: '#603ebe',
  bgColor: '#F5F4F9',
};

const base3: IBoxSection = {
  header: '',
  title: 'GROWTH',
  text: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ',
  num: '03',
  borderColor: '#FFFFFF',
  bgColor: '#5E3DB3',
};

export const mockBoxSectionProps = {
  base,
  base2,
  base3,
};
