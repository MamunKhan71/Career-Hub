import FeaturedJobs from "../Featured Jobs/FeaturedJobs.jsx";
import Header from "../Header/Header.jsx";
import JobCategory from "../JobCategory/JobCategory.jsx";

const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
                <Header></Header>
            </div>
            <div className="container mx-auto">
                <JobCategory></JobCategory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </>
    );
};

export default Home;