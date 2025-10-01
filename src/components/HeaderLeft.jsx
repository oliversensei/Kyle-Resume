import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiMoon, BiPhone, BiSun } from 'react-icons/bi';
import { personalInfo, socials, education, skills, hobbies, languages } from './Assets';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700'>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src="https://kylelubayan.netlify.app/assets/img/kyle.jpg" alt="Kyle Lubayan" className='w-32 rounded-full' />

          <div className='text-center space-y-1'>
            <h1 className='text-4xl font-light'>
              {personalInfo.name.split(' ')[0]} <span className='font-semibold'>{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <h3 className='text-xl font-light'>{personalInfo.role}</h3>
          </div>

          <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
            {darkMode ? <BiSun className='text-2xl' /> : <BiMoon className='text-2xl' />}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <BiCurrentLocation className='text-xl' />
              <span>{personalInfo.location}</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiEnvelope className='text-xl' />
              <span>{personalInfo.email}</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiPhone className='text-xl' />
              <span>{personalInfo.phone}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className='text-base font-semibold md:text-2xl'>SOCIAL</h1>
          <ul className='space-y-3'>
            {socials.map(({ icon, label }, index) => (
              <li key={index} className='flex items-center gap-2'>
                {React.createElement(require('react-icons/bi')[icon], { className: 'text-xl' })}
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className='text-base font-semibold md:text-2xl'>EDUCATION</h1>
          <ul>
            {education.map((edu, index) => (
              <li key={index} className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold md:text-lg'>{edu.degree}</span>
                <span className='font-light'>{edu.institution}</span>
                <span className='text-sm text-gray-400'>{edu.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>SKILLS</h1>
          {skills.map((group, index) => (
            <div key={index} className='flex flex-wrap gap-3'>
              {group.map((skill, i) => (
                <span key={i} className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>HOBBIES</h1>
          <div className='flex flex-wrap gap-16 p-3'>
            {hobbies.map((group, index) => (
              <ul key={index} className='flex list-disc flex-col gap-3'>
                {group.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>LANGUAGES</h1>
          <ul className='flex list-disc flex-wrap gap-12 md:text-lg'>
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
