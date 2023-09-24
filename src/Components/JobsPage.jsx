import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../Utility/LocalStorage";

const JobsPage = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const idnum=parseInt(id)
    const job=data.find((na)=>na.id===idnum)
    console.log(job,id)
    
    const handleApplyJOb=()=>{
        saveApplication(id)
        toast('handle Apple job')
    }
    return (
        <div>
            <h1>This is Job Page {id}</h1>
            <div className="grid grid-cols-4 border my-10 justify-center items-center">
                <div className=" col-span-3 border h-64"> <h1>Details comming soon</h1></div>
                <div className="border h-64 p-10">
                    <button onClick={handleApplyJOb} className="btn btn-submit">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobsPage;