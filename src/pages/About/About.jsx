import Technology from "../../components/Technology";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";

const About = () => {
    return (
        <div className="abou min-h-screen bg-black">
            <div className="">
                <header className="flex justify-between items-center text-white h-[50px] px-4 bg-primary">
                    <ToggleBtn />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">About</h1>
                    </div>
                </header>
                <section className="bg-black py-8">
                    <div className="container mx-auto px-6">
                        <header className="text-fade">
                            <h2 className="section_heading">WHO AM I?</h2>
                            <p className="pt-3">Software Engineer</p>
                        </header>
                        <div className="flex-col lg:flex-row flex items-center gap-4 lg:gap-16 mt-8 lg:mt-16">
                            <div>
                                <img
                                    src="https://i.ibb.co/9N1y5yx/profile-v2.png"
                                    alt="profile-v2"
                                    border="0"
                                    className="h-[150px] w-[150px] rounded-full bg-cover bg-orange-300 border-2 border-indigo"
                                />
                            </div>
                            <div className="text-fade">
                                <p className="mt-6">
                                    <span className="font-bold ml-2">
                                        Hello,
                                    </span>
                                </p>
                                <div className="flex items-start mt-4">
                                    <span className="ml-2 text-md text-justify">
                                        I am Rushikesh Mungse currently pursuing
                                        my B.Tech in Mechanical Engineering from
                                        MIT Academy of Engineering, Alandi, But
                                        my interest in Software Engineering.
                                    </span>
                                </div>
                                <div className="flex items-start mt-2">
                                    <span className="ml-2 text-md text-justify">
                                        Software Engineer with excellent
                                        problem-solving skill and ability to
                                        perform well in a team. Passionate about
                                        Full-Stack developer with creative
                                        designing.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className={`border-none w-full h-[0.5px] bg-fade my-2`} />
                <Technology text={"SKILLS"} />
            </div>
        </div>
    );
};
export default About;
