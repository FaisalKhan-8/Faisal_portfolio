import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: 'Campus Credentials',
      role: 'Graphic Designer',
      url: 'https://www.linkedin.com/company/campus-credentials/mycompany/',
      start: 'May 2023',
      end: 'July 2023',
      shortDescription: [
        'I have experience working on a large Team',
        "Throughout my work, I've utilized various technologies, Adobe, DaVinci, Figma.",
      ],
    },
   
  ];
  return (
    <motion.div
      className='experience'
      id='experience'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}>
      <div className='title'>
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div className='underline'></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && 'exp-slider-item-selected'
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}>
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className='exp-details-position-company'>
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className='link'>
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className='exp-details-range'>
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className='exp-details-list'>
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
