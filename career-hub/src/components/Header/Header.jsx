const Header = () => {
    return (
        <>
            <div className="hero px-0">
                <div className="hero-content flex-col lg:gap-24 lg:flex-row-reverse">
                    <img className="w-1/2 h-1/2" src="/public/assets/images/user.png" />
                    <div>
                        <h1 className="leading-[100px] text-7xl gap font-extrabold text-[#1A1919]">One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h1>
                        <p className="py-6 pr-8 text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="font font-extrabold text-white btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] px-4">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;