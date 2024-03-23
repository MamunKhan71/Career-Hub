import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import AppliedJobList from "./AppliedJobList.jsx";

const AppliedJob = () => {
    const localStorages = localStorage.getItem('jobs')
    const jobs = useLoaderData()
    const localJson = JSON.parse(localStorages)
    const [appliedjobs, setJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        const filteredJobs = jobs.filter(job => localJson.includes(job.id));
        setJobs(filteredJobs);
        setDisplayJobs(filteredJobs);
    }, []);

    const handleFilter = filterType =>{
        if(filterType === "All"){
            setDisplayJobs(appliedjobs)
        }
        else if(filterType === "Remote"){
            setDisplayJobs(appliedjobs.filter(job => job.remote_or_onsite === "Remote"))
        }else if(filterType === "Onsite"){
            setDisplayJobs(appliedjobs.filter(job => job.remote_or_onsite === "Onsite"))
        }
    }
    return (
        <div>
            <div>
                <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] h-40 flex items-center justify-center">
                    <img className="absolute top-0 right-0" src="/assets/images/bg2.png" alt=""/>
                    <h1 className=" text-center text-4xl font-black">Applied Jobs</h1>
                </div>
                <div className="flex items-center justify-center mt-12 gap-4 font-bold">
                    <h1 className="text-center">Filter Jobs</h1>
                    <details className="dropdown">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a onClick={()=> handleFilter("All")}>All</a></li>
                            <li><a onClick={()=> handleFilter("Remote")}>Remote</a></li>
                            <li><a onClick={()=> handleFilter("Onsite")}>On Site</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="my-12">
                {
                    // eslint-disable-next-line react/jsx-key
                    displayJobs.map(job => <AppliedJobList job={job}></AppliedJobList>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;