import PropTypes from 'prop-types';

const SelectsCard = (props) => {
  return (
    <div className='relative lg:cursor-pointer lg:hover:scale-105 ease-in-out duration-300'>
      <img className='w-full h- object-cover' src={props.bg} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgb(0,0,0)] absolute'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

SelectsCard.propTypes = {
  bg: PropTypes.any,
  text: PropTypes.string.isRequired,
}

export default SelectsCard;
