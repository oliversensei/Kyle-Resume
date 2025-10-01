import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
        <a href="https://tech-bsp-2.vercel.app/">
            <button className='absolute rounded-xl top-9 left-5 p-4 text-white bg-black text-center dark:bg-white dark:text-black transition-all duration-300'>
                <FaArrowLeft size={12} /> 
            </button>
        </a>

        <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>
            <div className="space-y-6">
                <h1 className='text-3xl font-bold md:text-5xl'>Professional Summary</h1>
                <p className='text-base text-gray-600 dark:text-gray-400 md:text-lg'>
                    Highly motivated and adaptable professional with broad experience across several fields. 
                    I have worked in operations management (Ground Crew/Supervisor), sales, and food service 
                    (Waiter/Assistant Chef). Most importantly, my experience as a Customer Service Representative 
                    in Business Process Outsourcing (BPO) has built strong skills in customer service, clear 
                    communication, and problem-solving. I am a flexible, reliable, and results-focused team member 
                    ready for new opportunities.
                </p>
            </div>

            <div className='space-y-6'>
                {/* Professional Skills */}
                <div className='flex flex-col items-start justify-start gap-4'>
                    <h1 className='text-3xl font-bold md:text-5xl'>Professional Skills</h1>
                    <div className='flex flex-wrap gap-4'>
                        {[
                            "Leadership",
                            "Problem Solving",
                            "Adaptable",
                            "Customer Service",
                        ].map((skill, i) => (
                            <span
                                key={i}
                                className='rounded-xl bg-black text-white p-4 text-base text-center dark:bg-white dark:text-black'
                                aria-label={`Professional Skill: ${skill}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Relevant Skills */}
                <br />
                <div className='flex flex-col items-start justify-start gap-4'>
                    <h1 className='text-3xl font-bold md:text-5xl'>Relevant Skills</h1>
                    <div className='flex flex-wrap gap-4'>
                        {[
                            "Customer Service Excellence",
                            "Product Presentation",
                            "Task Prioritization",
                            "Time Management",
                        ].map((skill, i) => (
                            <span
                                key={i}
                                className='rounded-xl bg-black text-white p-4 text-base text-center dark:bg-white dark:text-black'
                                aria-label={`Relevant Skill: ${skill}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                <h1 className='text-3xl font-bold md:text-5xl'>Experience</h1>
                <div className='flex flex-col lg:flex-row lg:gap-20'>
                    <ul>
                        {/* 1 */}
                        <li className='relative flex flex-col gap-2 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-xl font-semibold'>Alorica</span>
                            <span className='text-base text-gray-400'>July 2025 - Present</span>
                            <span className='font-light text-base'>Customer Service Representative</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Managing customer interactions and resolving issues related to the clients they serve.
                            </p>
                        </li>

                        {/* 2 */}
                        <li className='relative flex flex-col gap-2 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-xl font-semibold'>1Aviation Ground Handling (Cebu Pacific)</span>
                            <span className='text-base text-gray-400'>2022 - 2025</span>
                            <span className='font-light text-base'>Station Agent 1</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Oversee the accurate loading and unloading of aircraft, ensuring the safe handling of baggage to maintain operational integrity and prevent delays.
                            </p>
                            <br />
                            <span className='font-light text-base'>Baggage Master</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Responsible for overseeing the safe and efficient loading and unloading of luggage for all flights.
                            </p>
                            <br />
                            <span className='font-light text-base'>Duty Supervisor</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Responsible for the immediate, real-time success of all aircraft operations during their shift.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative flex flex-col gap-2 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-xl font-semibold'>Frontrow International</span>
                            <span className='text-base text-gray-400'>2019 - 2022</span>
                            <span className='font-light text-base'>Sales Associate</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Engaged with potential clients to introduce and sell the company's health and beauty products, focusing on benefits and personalizing pitches to meet individual needs. <br /><br />
                                Developed and maintained strong relationships with customers, providing exceptional follow-up and support to ensure satisfaction and repeat business.
                            </p>
                        </li>  

                        <li className='relative flex flex-col gap-2 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-xl font-semibold'>KaFatt Kitchennete Cafe</span>
                            <span className='text-base text-gray-400'>2016 - 2019</span>
                            <span className='font-light text-base'>Waiter & Assistant Chef</span>
                            <p className='text-base text-gray-600 dark:text-gray-400'>
                                Developed and maintained strong relationships with customers, providing exceptional follow-up and support to ensure satisfaction and repeat business.
                            </p>
                        </li>   
                    </ul>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home
