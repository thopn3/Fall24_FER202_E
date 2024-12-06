import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddNewJob(){
    const [categories, setCategories] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [catId, setCatId] = useState(0);
    const [msgTitle, setMsgTitle] = useState("");
    const [msgCatId, setMsgCatId] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        // Fetch all categoris from API
        axios.get("http://localhost:9999/categories")
            .then(response => setCategories(response.data))
            .catch(err => console.log(err));
    }, []);

    function validateInputData(){
        let flag = true;
        if(jobTitle.length==0){
            setMsgTitle("Job title is required!");
            flag = false;
        }else{
            setMsgTitle("");
        }

        if(catId==0){
            setMsgCatId("Category must be selected!");
            flag = false;
        }else{
            setMsgCatId("");
        }

        if(!flag)
            return false;
        return true;
    }

    function handleAddNewJob(e){
        e.preventDefault();
        if(validateInputData()){
            // Send request (POST) -> API -> save new Job -> into DB
            axios.post("http://localhost:9999/jobs", {
                title: jobTitle,
                cId: catId,
                uId: 1,
                status: false,
                issues: []
            }).then(()=>{
                alert("Add new Job successfully");
                navigate("/jobs");
            }).catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Link to={"/jobs"}>Back to Job list</Link>
            <h3>Add a new Job</h3>
            <form onSubmit={(e)=>handleAddNewJob(e)}>
                Job Title *
                <input onChange={e=>setJobTitle(e.target.value)}/>
                {msgTitle && <div style={{color:"red"}}>{msgTitle}</div>}
                <br/>
                Category *
                <select onChange={e=>setCatId(parseInt(e.target.value))}>
                    <option value={0}>-- Select Category --</option>
                    {
                        categories?.map(c => (
                            <option key={c?.id} value={c?.id}>{c?.name}</option>
                        ))
                    }
                </select>
                {msgCatId && <div style={{color:"red"}}>{msgCatId}</div>}
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddNewJob;