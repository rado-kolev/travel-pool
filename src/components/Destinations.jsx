import { saintLucia, grenada1, jamaica, antigua1, bahamas1 } from '../assets/images';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4 text-xl font-bold'>On the Caribbean&apos;s Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={saintLucia} alt="/" />
        <img className='w-full h-full object-cover' src={grenada1} alt="/" />
        <img className='w-full h-full object-cover' src={jamaica} alt="/" />
        <img className='w-full h-full object-cover' src={antigua1} alt="/" />
        <img className='w-full h-full object-cover' src={bahamas1} alt="/" />
      </div>
    </div>
  )
}

export default Destinations