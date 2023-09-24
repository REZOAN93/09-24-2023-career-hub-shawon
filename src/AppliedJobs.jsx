import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs=useLoaderData()
    const [appliedJobs,setAppliedJobs]=useState([])
    useEffect(()=>{
        const storedJobsId=getStoredJobApplication()
        if (jobs.length>0) {
            // const jobsApplied=jobs.filter((na)=>storedJobsId.includes(na.id))
            const jobApplied=[]
            for (const id of storedJobsId) {
                const job=jobs.find(na=>na.id==id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied)
        }
    },[])
    return (
        <div>
            <h1>{appliedJobs.length}</h1>
            <ul>
                {
                    appliedJobs.map()
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;