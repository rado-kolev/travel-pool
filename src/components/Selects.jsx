import {
  saintLucia1,
  grenada,
  jamaica1,
  antigua,
  bahamas,
  curacao
} from '../assets/images';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={antigua} text='Antigua' />
      <SelectsCard bg={curacao} text='Curacao' />
      <SelectsCard bg={saintLucia1} text='Saint Lucia' />
      <SelectsCard bg={bahamas} text='The Bahamas' />
      <SelectsCard bg={grenada} text='Grenada' />
      <SelectsCard bg={jamaica1} text='Jamaica' />
    </div>
  );
};

export default Selects;
