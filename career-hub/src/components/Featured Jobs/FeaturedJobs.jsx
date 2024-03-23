import {useEffect, useState} from "react";
import Job from "./Job.jsx";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className="space-y-4 mb-12">
            <h1 className="text-[#1A1919] text-4xl font-extrabold text-center mt-28">Featured Jobs</h1>
            <p className="text-center text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-8">
                {
                    // eslint-disable-next-line react/jsx-key
                    jobs.slice(0, dataLength).map(job => <Job job={job}></Job>)
                }
            </div>
            {
                dataLength === jobs.length ? '' : <>
                    <div className="flex items-center justify-center">
                        <button
                            className="mb-28 mt-4 font font-extrabold text-white btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff]"
                            onClick={() => setDataLength(jobs.length)}>See All Jobs
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default FeaturedJobs;