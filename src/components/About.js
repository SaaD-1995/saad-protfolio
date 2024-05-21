import Footer from "./Footer";

function About(){
    return(
        <>
            <div className="bg-[#161513] pt-28 pb-20 ">
                <section className="container mx-auto md:px-16 sm:px-8 px-8 ">
                    <h1 className="text-5xl text-white font-medium text-center pt-10 pb-10">About Me</h1>
                    <div>
                        <h2 className="text-white text-4xl font-bold">My Background</h2>
                        
                    </div>
                    <p className="text-base  pt-10 text-gray-300 "> 
                        Enthusiastic and skilled front-end web developer with over 2 years of experience in crafting exceptional user experiences and interfaces. 
                        Proficient in JavaScript, HTML5, and CSS, with a strong specialization in Vue.js and React.js. 
                        Demonstrated expertise in developing client-facing landing pages that seamlessly blend creativity and functionality. 
                        Experienced in using modern front-end frameworks and libraries including Nuxt.js, Vuetify, Tailwind CSS, and Bootstrap to deliver high-quality, responsive, and visually appealing web applications.
                        Adept at collaborating with cross-functional teams to convert Figma design concepts into interactive and user-friendly web interfaces. Committed to continuous learning and staying updated with the latest industry trends to deliver innovative solutions.
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
}
export default About;