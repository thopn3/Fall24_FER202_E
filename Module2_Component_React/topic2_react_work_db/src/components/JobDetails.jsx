import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function JobDetails(){
    // Lấy các parameters từ URL
    const {id} = useParams();
    const [jobDetail, setJobDetail] = useState(null);
    const [issueTitle, setIssueTitle] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(()=>{
        // Gửi yêu cầu tới http://localhost:9999/jobs/:id để lấy thông tin của Job theo id
        fetch("http://localhost:9999/jobs/"+id)
            .then(response => response.json())
            .then(result => setJobDetail(result))
            .catch(err => console.error(err));

    }, []);

    function handleAddIssues(e){
        e.preventDefault();
        const newIssue = {
            iId: jobDetail?.issues?.length + 1,
            title: issueTitle,
            start: new Date().toLocaleString(),
            end: endDate,
            status: false
        };

        const newIssues = [newIssue, ...jobDetail?.issues];

        // Gửi request tới API để update job (bổ sung thêm newIssue) theo id
        fetch("http://localhost:9999/jobs/"+id, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "issues": newIssues
            })
        }).then(()=>{
            alert("Add new Issue successfully!");
            window.location.reload();
        })
    }
    
    return (
        <div>
            <Link to={"/jobs"}>Back to Jobs list</Link>
            <h3>Job details</h3>
            <div>JobId: {jobDetail?.id}</div>
            <div>Title: {jobDetail?.title}</div>
            <div>Status: {jobDetail?.status==true?<>Completed</>:<>In-Completed</>}</div>
            Add new issues: <button>+</button>

            <p style={{paddingLeft:"50px"}}>
                <form onSubmit={(e)=>handleAddIssues(e)}>
                    Issue Title <input placeholder="Input title ..." onChange={e=>setIssueTitle(e.target.value)}/>
                    EndDate <input type="datetime-local" onChange={e=>setEndDate(e.target.value)}/> <br/>
                    <input type="submit" value="Add Issues"/>
                </form>
            </p>

            <h4>List of Issues:</h4>
            <table>
                <tr>
                    <th>IssueId</th><th>Title</th><th>Start</th><th>End</th><th>Status</th>
                </tr>
                {
                    jobDetail?.issues?.map(i => (
                        <tr key={i?.iId}>
                            <td>{i?.iId}</td>
                            <td>{i?.title}</td>
                            <td>{i?.start}</td>
                            <td>{i?.end}</td>
                            <td>
                                {
                                    i?.status==true? 
                                    <>
                                        <input type="checkbox" checked={true}/>
                                    </>
                                    :
                                    <>
                                        <input type="checkbox" checked={false}/>
                                    </>
                                }
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default JobDetails;