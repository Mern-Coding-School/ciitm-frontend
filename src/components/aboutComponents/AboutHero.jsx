import React, {
  useEffect,
  useState,
} from 'react';
import About_BG from '../../assets/images/aboutbg.svg';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import useAbout from '../../hooks/useAbout';

const AboutHero = () => {
  const [image, setimage] =
    useState('');
  const [para, setpara] = useState('');
  const [heading, setheading] =
    useState('');

  useAbout();

  let about = useSelector(
    state => state.about.aboutPage,
  );

  useEffect(() => {
    if (about) {
      setimage(about.AboutHero.image);
      setpara(
        about.AboutHero.paragraph,
      );
      setheading(
        about.AboutHero.Heading,
      );
    }
  }, [about]);
  return (
    <section className='bg-black w-full text-white'>
      <div className='about_hero relative w-full h-[90vh] bg-gradient-to-b from-white via-gray-700 to-black'>
        <img
          className='w-full h-full object-cover opacity-75 blur-[1.5px] object-top'
          src={image}
          alt=''
        />

        <div className='txt w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5 max-[599px]:gap-6 flex-col pt-10 max-[599px]:pt-20'>
          <h1 className='w-1/2 max-[599px]:w-full text-center leading-tight text-[3.33vw] max-[599px]:text-[10vw] font-bold font-[Montserrat]'>
            {heading}
          </h1>
          <p className='w-[58%] max-[599px]:w-[85%] text-[1.25vw] max-[599px]:text-[3.5vw] font-medium text-center font-[Poppins]'>
            {para}
          </p>
          <div className='btns flex items-center gap-4 max-[599px]:mt-4'>
            <button className='bg-transparent text-[1vw] max-[599px]:text-[2.5vw] border-[1px] border-white px-3 py-2 rounded-md font-bold'>
              Let's Started
            </button>
            <button className='bg-white text-[1vw] max-[599px]:text-[2.5vw] text-black px-4 py-2 rounded-md font-bold'>
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
