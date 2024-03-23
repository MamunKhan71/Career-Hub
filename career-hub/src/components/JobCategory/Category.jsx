const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="space-y-3 p-10 bg-[#7e90fe0d]  rounded-xl bg-gradient-t-r from-[#7e90fe0d] to-[#9873ff0d]">
            <div>
                <img className="bg-[#7e90fe1a] p-4 rounded-lg" src={logo} alt=""/>
            </div>
            <h2 className="text-[#474747] font-extrabold text-lg">{category_name}</h2>
            <p className="text-[#A3A3A3] font-medium">{availability}</p>
        </div>
    );
};

export default Category;