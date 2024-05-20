import Header from "./Home/Header";
import Project from './Project.js';
import Footer from './Footer.js';
// import Experienced from "./Experienced.js"
function Home(){
    return(
        <>
            <div className="bg-[#161513] pt-44 pb-20 ">
                <section className="container mx-auto md:px-16 sm:px-8 px-8 flex justify-center items-center">
                    {/* <h1 className="text-6xl text-blue-600">Home page</h1> */}
                    <Header/>
                    
                </section>
                <section className="container mx-auto md:px-16 sm:px-8 px-8 mt-10">
                <Project></Project>
                {/* <div className="mt-10">
                <Experienced ></Experienced>
                </div> */}
                </section>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}
export default Home;