import { Link } from "react-router-dom";
import '../../assets/custom.css'
function Header(){
    return(
        <>
        <div className="h-full ">
            <section className=" flex justify-center items-center  ">
                <article>
                <div className="flex justify-center items-center ">
                    <img class="w-32 h-32 rounded-full" src="/saadrasool.jpg" alt="Rounded avatar"/>
                </div>
                    <h1 className="md:text-6xl sm:text-4xl text-3xl pt-5 text-white font-bold text-center lg:mx-52">
                        I do code and make content&nbsp;
                        <span className="gradient-text">
                             about it!
                        </span>
                    </h1>
                <p className="text-base text-center pt-10 text-gray-300 lg:px-52"> 
                Enthusiastic and skilled front-end web developer with over 2 years of experience in crafting exceptional user experiences and interfaces. 
                Proficient in JavaScript, HTML5, and CSS, with a strong specialization in Vue.js and React.js. 
                Demonstrated expertise in developing client-facing landing pages that seamlessly blend creativity and functionality. 
                Experienced in using modern front-end frameworks and libraries including Nuxt.js, Vuetify, Tailwind CSS, and Bootstrap to deliver high-quality, responsive, and visually appealing web applications.
                 Adept at collaborating with cross-functional teams to convert Figma design concepts into interactive and user-friendly web interfaces. Committed to continuous learning and staying updated with the latest industry trends to deliver innovative solutions.
                </p>
                <div className="flex justify-center gap-4 mt-10">
                    <Link to="/contact" className="bg-white px-4 py-2 rounded-full text-lg font-medium">
                        Get In Touch
                    </Link>
                    {/* <button className="border-2 border-white px-4 py-2 rounded-full text-lg text-white font-medium">
                        Download CV
                    </button> */}
                    <a href="/saad.pdf" download className="border-2 border-white px-4 py-2 rounded-full text-lg text-white font-medium">
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
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/html.png" alt="HTML"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/css.png" alt="css"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/bootstrap-5-1.svg" alt="Bootstrap-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/tailwind.png" alt="tailwind"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/js.png" alt="js-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/vue-logo-12.png" alt="Vue-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/logo512.png" alt="React-logo"/>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  lg:w-20 lg:h-20" src="/nuxt.png" alt="Nuxt"/>
                </div>
            </section>
        </div>
            
        </>
    );
}

export default Header;