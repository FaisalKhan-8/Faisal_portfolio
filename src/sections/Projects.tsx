import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    {
      image: '/project1.png',
      projectName: 'Ai Music Player',
      projectLink: 'https://github.com/FaisalKhan-8/AI-Music-Player-Final-.git',
      projectDescription:
        'This is an AI Music Player project i created for my college final year project using Flutter and DART for AI i used Alan Ai',
      projectTech: ['Flutter', 'Dart', 'JavaScript', 'Alan Ai'],
      projectExternalLinks: {
        github: 'https://github.com/FaisalKhan-8/AI-Music-Player-Final-.git',
        externalLink:
          'https://drive.google.com/file/d/1ohvxTdtpKOMaTrlFpuHGljgz8oWcMUvS/view?usp=drive_link',
      },
    },
    {
      image: '/project2.png',
      projectName: 'BeatShop',
      projectLink: 'https://e-commerce-backend-wine.vercel.app/',
      projectDescription:
        'This is an E-Commerce web application that uses the React & NodeJs Fully functional ecommerce website ready to be used.With fully functional admin Panel.',
      projectTech: [
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'MongoDB',
        'JavaScript',
        'Nodemailer',
        'NodeJs',
        'ExpressJS',
        'Stripe',
      ],
      projectExternalLinks: {
        github: 'https://github.com/FaisalKhan-8/E-commerce-Backend',
        externalLink: 'https://e-commerce-backend-wine.vercel.app/',
      },
    },
    {
      image: '/project3.png',
      projectName: 'Netflix App',
      projectLink: 'https://netflix-clone-by-faisalkhan.netlify.app/',
      projectDescription:
        'I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.',
      projectTech: ['React', 'Firebase', 'TMBD Api'],
      projectExternalLinks: {
        github: 'https://github.com/FaisalKhan-8/netflix-clone.git',
        externalLink: 'https://netflix-clone-by-faisalkhan.netlify.app/',
      },
    },
  ];
  return (
    <div className='projects' id='work'>
      <motion.div
        className='title'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}>
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className='project'
                key={projectName}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}>
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className='project-info'>
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map((tech) => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.github}
                        target='_blank'
                        className='project-info-links-item-link'>
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.externalLink}
                        target='_blank'
                        className='project-info-links-item-link'>
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
