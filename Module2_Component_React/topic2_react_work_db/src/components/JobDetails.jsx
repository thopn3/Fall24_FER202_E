import { useParams } from "react-router-dom";
import "./Job.css";
import { useEffect } from "react";

function JobDetails(){
    // Lấy các parameters từ URL
    const {id} = useParams();

    useEffect(()=>{

    }, []);

    return (
        <div>
            <h3>Job details</h3>
            <div>JobId: {id}</div>
            <div>Title: </div>
            <button>+</button>
            <h4>List of Issues:</h4>
            <table>
                <tr>
                    <th>IssueId</th><th>Title</th><th>Start</th><th>End</th><th>Status</th>
                </tr>
            </table>
        </div>
    );
}

export default JobDetails;