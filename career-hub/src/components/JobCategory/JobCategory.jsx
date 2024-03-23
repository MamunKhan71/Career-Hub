import {useEffect, useState} from "react";
import Category from "./Category.jsx";

const JobCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('data/categories.json')
            .then(res => res.json())
            .then(data => setCategory((data)))
    }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-[#1A1919] text-4xl font-extrabold text-center mt-28">Job Category List</h1>
            <p className="text-center text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-8">
                {
                    category.map(cat => <Category key={cat.id} category={cat}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;