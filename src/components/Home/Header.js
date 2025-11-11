import { Link } from "react-router-dom";
import '../../assets/custom.css'
function Header(){
    return(
        <>
        <div className="h-full ">
            <section className=" flex justify-center items-center  ">
                <article>
                <div className="flex justify-center items-center ">
                    <img class="w-32 h-32 rounded-full" src="/saadrasool-image.webp" alt="Rounded avatar"/>
                </div>
                    <h1 className="md:text-6xl sm:text-4xl text-4xl pt-5 text-white font-bold text-center mx-20 sm:mx-0 md:mx-10 lg:mx-52 xl:mx-72 ">
                        I do code and make content&nbsp;
                        <span className="gradient-text">
                             about it!
                        </span>
                    </h1>
                    <p className="text-base text-center pt-10 text-gray-300 mx-3 sm:mx-5 md:mx-8 lg:mx-10 xl:mx-52">
                    Enthusiastic and highly skilled front-end web developer with a strong track record of delivering polished, user-focused web applications and interfaces.
                    I bring hands-on experience in building responsive landing pages, pixel-perfect UI components, and full dashboard layouts — from initial Figma designs through to production deployment.
                    My core strengths include JavaScript, HTML5, and modern CSS, with deep expertise in Vue.js and React.js frameworks. I also regularly work with Nuxt.js, Vuetify, Tailwind CSS, and Bootstrap to speed development while keeping interfaces accessible and performant.
                    Beyond static UI work I design and implement robust client-side integrations: REST and GraphQL API integration, real-time updates (WebSockets), and end-to-end data flows between front end and backend services. I am experienced building data-driven dashboards that include interactive charts, tables, filters, and custom visualizations (Chart.js, Recharts, or similar).
                    I enjoy solving complex UX problems and collaborating with cross-functional teams to convert Figma designs into maintainable, testable, and responsive code. I follow best practices for state management, component architecture, performance optimisation, and accessibility.
                    Committed to continuous learning, I keep up with the latest industry trends and tooling so I can deliver modern, scalable solutions — whether it’s a lead-generating landing page, a graph-heavy analytics dashboard, or a full product front end ready for production.
                    </p>

                <div className="flex justify-center gap-4 mt-10">
                    <Link to="/contact" className="bg-white px-4 py-2 rounded-full text-lg font-medium">
                        Get In Touch
                    </Link>
                    {/* <button className="border-2 border-white px-4 py-2 rounded-full text-lg text-white font-medium">
                        Download CV
                    </button> */}
                    <a href="/saad_rasool.pdf" download className="border-2 border-white px-4 py-2 rounded-full text-lg text-white font-medium">
                        Download CV
                    </a>
                </div>
                </article>
            </section>
            <section >
                <h2 className="text-center mt-10 text-white text-2xl font-medium">
                    EXPERIENCE WITH
                </h2>
                <div className="flex flex-wrap gap-5 justify-center mt-10">
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/js.webp" alt="js-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/vue-logo-12.webp" alt="Vue-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/logo512.webp" alt="React-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/nuxt.webp" alt="Nuxt"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/git.webp" alt="git"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/html.webp" alt="HTML"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/css.webp" alt="css"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/bootstrap-5-1.svg" alt="Bootstrap-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/tailwind.webp" alt="tailwind"/>
                </div>
            </section>
        </div>
            
        </>
    );
}

export default Header;