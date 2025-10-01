import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiLogoFacebook, BiLogoInstagram, BiMoon, BiPhone, BiSun } from 'react-icons/bi';
import { personalInfo, socials, education, skills, hobbies, languages } from './Assets';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700'>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src="https://kylelubayan.netlify.app/assets/img/kyle.jpg" alt="Kyle Lubayan" className='w-36 rounded-full' />

          <div className='text-center space-y-2'>
            <h1 className='text-5xl font-light'>
              {personalInfo.name.split(' ')[0]} <span className='font-semibold'>{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <h3 className='text-2xl font-light'>{personalInfo.role}</h3>
          </div>

          <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
            {darkMode ? <BiSun className='text-3xl' /> : <BiMoon className='text-3xl' />}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700">
          <ul className='space-y-4'>
            <li className='flex items-center gap-3'>
              <BiCurrentLocation className='text-2xl' />
              <span className='text-base'>{personalInfo.location}</span>
            </li>
            <li className='flex items-center gap-3'>
              <BiEnvelope className='text-2xl' />
              <span className='text-base'>{personalInfo.email}</span>
            </li>
            <li className='flex items-center gap-3'>
              <BiPhone className='text-2xl' />
              <span className='text-base'>{personalInfo.phone}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700">
          <h1 className='text-lg font-semibold md:text-3xl'>SOCIAL</h1>
          <ul className='space-y-4'>
            {socials.map(({ icon, label }, index) => (
              <li key={index} className='flex items-center gap-3'>
                {React.createElement(require('react-icons/bi')[icon], { className: 'text-2xl' })}
                <span className='text-base'>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700">
          <h1 className='text-lg font-semibold md:text-3xl'>EDUCATION</h1>
          <ul>
            {education.map((edu, index) => (
              <li key={index} className='relative flex flex-col gap-2 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg md:text-xl'>{edu.degree}</span>
                <span className='font-light text-base'>{edu.institution}</span>
                <span className='text-base text-gray-400'>{edu.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700'>
          <h1 className='text-lg font-semibold md:text-3xl'>SKILLS</h1>
          {skills.map((group, index) => (
            <div key={index} className='flex flex-wrap gap-4'>
              {group.map((skill, i) => (
                <span key={i} className='rounded-xl bg-black text-white p-4 text-base text-center dark:bg-white dark:text-black'>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700'>
          <h1 className='text-lg font-semibold md:text-3xl'>HOBBIES</h1>
          <div className='flex flex-wrap gap-16 p-4'>
            {hobbies.map((group, index) => (
              <ul key={index} className='flex list-disc flex-col gap-4'>
                {group.map((hobby, i) => (
                  <li key={i} className='text-base'>{hobby}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-start justify-start gap-6 border-b p-6 dark:border-gray-700'>
          <h1 className='text-lg font-semibold md:text-3xl'>LANGUAGES</h1>
          <ul className='flex list-disc flex-wrap gap-12 text-base md:text-lg'>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
