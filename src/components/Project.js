import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from './Footer';

function Project() {
  const { id } = useParams();
  const location = useLocation();

  // Array of project data
  const projects = [
    {
      id: 0,
      name: "Next Grade",
      link: "https://nxgrade.com/",
      imageSrc: "/nxgrade.png",
      description: `The All-in-One Platform for Educational Assessments. Next Grade is a simple, customizable & smart online testing platform for teachers, students & trainers. Create interactive assessments through online and mobile tests that can help students gauge success & deliver results without a hassle. Technology used: HTML, CSS, Vue.js and Vuetify`
    },
    {
      id: 1,
      name: "Safr Care",
      link: "https://safrcare.com/",
      imageSrc: "/safrcare.png",
      description: `An all-in-one platform facilitating medical transportation for patients. Users can create ride requests to reach hospitals, and dedicated rides pick up patients for hospital visits. Developed using HTML, CSS, Vue.js, and Vuetify for seamless and user-friendly interactions.`
    },
    {
      id: 2,
      name: "Omc Global",
      link: "https://omc-global-v3.vercel.app/",
      imageSrc: "/omcgolobal.png",
      description: `OMC Global offers ride facilities for users to conveniently request rides to their destinations. Whether it's a one-way trip or a round trip, users can easily book their rides. Developed with HTML, CSS, Vue.js, Nuxt.js, storyblok, and Tailwind CSS for user-friendly interaction.`
    },
    {
      id: 3,
      name: "Saad Portfolio",
      link: "https://saad-portfolio-1.netlify.app/",
      imageSrc: "/portfolio.png",
      description: `This is my portfolio website using techcnolygy React.js & Tailwind css`
    }

  ];

  const selectedProject = projects.find(project => project.id === parseInt(id));

  return (
    <>
      {location.pathname === '/' && (
        <>
          <h1 className="text-5xl text-transparent text-center font-bold">
            <span className="bg-gradient-to-t from-[#E7633A] to-[#FF8660] text-transparent bg-clip-text">Project</span>
          </h1>
          <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {projects.map((project, index) => (
              <article key={index}>
                <div className="sm:max-w-sm max-w-full rounded-lg shadow dark:bg-gray-800">
                  <Link to={project.link}>
                    <img className="rounded-t-lg w-full" src={project.imageSrc} alt={project.name} />
                  </Link>
                  <div className='px-3 py-3 bg-[#222222] rounded-b-lg flex justify-between'>
                    <div>
                      <p className="font-normal text-gray-200 text-sm">CLICK HERE TO VISIT</p>
                      <h4 className="text-white font-medium text-xl">{project.name}</h4>
                    </div>
                    <div className='pt-3'>
                      <Link className='rounded' to={`/project/${project.id}`}>
                        <img src='/view-Icon.svg' alt='arrow' />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </>
      )}
      {location.pathname.startsWith('/project') && selectedProject && (
        <>
          <div className='bg-[#161513]'>
            <section className="container mx-auto lg:px-44 md:px-32 sm:px-8 px-8 pt-28 pb-20">
              <h1 className="text-5xl text-transparent text-center font-bold">
                <span className="bg-gradient-to-t from-[#E7633A] to-[#FF8660] text-transparent bg-clip-text">Project</span>
              </h1>
              <div className='flex justify-center items-center'>
                <section className="mt-10">
                  <article className='mt-5 flex justify-center items-center'>
                    <div className="w-full sm:w-auto">
                      <div className="sm:max-w-lg max-w-full rounded-lg shadow dark:bg-gray-800">
                        <Link to={selectedProject.link}>
                          <img className="rounded-t-lg w-full" src={selectedProject.imageSrc} alt={selectedProject.name} />
                        </Link>
                        <div className='px-3 py-3 bg-[#222222] rounded-b-lg'>
                          <div>
                            <h4 className="text-white font-medium text-xl text-center py-3">{selectedProject.name}</h4>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                   
                  </article>
                  <p className="text-gray-400 font-medium text-base text-center pt-2 mb-15">{selectedProject.description}</p>
                </section>
              </div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Project;
