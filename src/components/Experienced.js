import Footer from "./Footer";
function Experienced(){
    return(
        <>
            <div className="bg-[#161513] pt-28 pb-20 ">
                <div className="container mx-auto md:px-16 sm:px-8 px-8">
                    <h1 className="text-5xl text-transparent text-center font-bold">
                        <span className="bg-gradient-to-t from-[#1373D1] to-[#5BADFF] text-transparent bg-clip-text">Experience</span>
                    </h1>
                    <section className="mt-8">
                        <div className="md:flex block justify-between ">
                            <h2 className="text-3xl text-white font-medium">
                                Front End Developer -
                                <span className="text-xl text-gray-400 font-light"> TGI(Tabs Group of International), Lahore</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-medium pt-2">
                            July 2022 - July 2023
                            </p>
                        </div>
                        <ul className="list-disc text-lg text-gray-400 hover:list-disc mt-5 lg:px-16 md:px-6 sm:px-4 px-2">
                            <li>
                                <p className="text-lg text-gray-400">
                                    Developed and maintained client-facing landing pages with a primary focus on enhancing user experience and interface design
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                Utilized Vue.js (Vuetify, vueBootstrap, tailwind CSS) and React.js to build dynamic and responsive web applications, ensuring optimal performance.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                Collaborated closely with cross-functional teams, converting Figma design concepts into functional and visually appealing web interfaces.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                Ensured seamless integration of design elements, maintaining a cohesive and polished look across all pages.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                Conducted regular code reviews and optimizations to enhance website performance and user interaction.
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <div className="md:flex block justify-between ">
                            <h2 className="text-3xl text-white font-medium">
                                Front End Developer - 
                                <span className="text-xl text-gray-400 font-light"> 13 pixels, UK (Base Remotely)</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-medium pt-2">
                                August 2023 - Present
                            </p>
                        </div>
                        <ul className="list-disc text-lg text-gray-400 hover:list-disc mt-5 lg:px-16 md:px-6 sm:px-4 px-2">
                            <li>
                                <p className="text-lg text-gray-400">
                                Developed and maintained client-facing landing pages with a primary focus on enhancing user experience and interface design.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Utilized Vue.js, Nuxt.js and Taiwind CSS to build dynamic and responsive web applications, ensuring optimal performance.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Use storyblok to attached with nuxt project (Like CMS Base).
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Api intergration in nuxt using library axios.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Collaborated closely with cross-functional teams, converting Figma design concepts into functional and visually appealing web interfaces.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Ensured seamless integration of design elements, maintaining a cohesive and polished look across all pages.
                                </p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-400 ">
                                    Conducted regular code reviews and optimizations to enhance website performance and user interaction.
                                </p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Experienced;