import "./Job.css";
import { useEffect, useState } from "react";

function Job() {
    // Khai báo state để quản lý dữ liệu của component
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCatId, setSelectedCatId] = useState(0);

    // Sử dụng useEffect -> thay thế cho các hàm: componentDidMount()
    useEffect(() => {
        // Gọi API: http://localhost:9999/jobs
        fetch("http://localhost:9999/jobs")
            .then(response => response.json())
            .then(result => {
                if (search.length == 0) {
                    let newJobs = [];
                    if (selectedCatId == 0)
                        newJobs = [...result];
                    else
                        newJobs = result?.filter(j => j?.cId == selectedCatId);

                    setJobs(newJobs);
                } else {
                    let newJobs = [];
                    if (selectedCatId == 0)
                        newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()));
                    else
                        newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()) && j?.cId == selectedCatId);

                    setJobs(newJobs);
                }
            });

        // Gọi API: http://localhost:9999/categories
        fetch("http://localhost:9999/categories")
            .then(response => response.json())
            .then(result => setCategories(result));   // Cập nhật trạng thái dữ liệu của categories

    }, [search, selectedCatId]);


    return (
        <div>
            <h3>Job List</h3>
            <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Input title to search ..." /> <br />

            Category:
            <select onChange={e => setSelectedCatId(parseInt(e.target.value))}>
                <option value="0">-- Choice a Category --</option>
                {
                    categories?.map(c => (
                        <option key={c?.id} value={c?.id}>{c?.name}</option>
                    ))
                }
            </select>

            Status:
            <select>
                <option value="">-- Choice a Status</option>
                <option value="true">Completed</option>
                <option value="false">In-Completed</option>
            </select>

            <hr />
            {
                jobs.length == 0 ? <div style={{ color: "red" }}>Job not found</div> :
                    <table>
                        <tr>
                            <th>JobId</th><th>Title</th><th>Category</th><th>Status</th><th colSpan={2}>Functions</th>
                        </tr>
                        {
                            jobs?.map(j => (
                                <tr key={j?.id}>
                                    <td>{j?.id}</td>
                                    <td>{j?.title}</td>
                                    <td>
                                        {
                                            categories?.find(c => c?.id == j?.cId)?.name
                                        }
                                    </td>
                                    <td>{j?.status == true ? <span style={{ color: "blue" }}>Completed</span> : <>In-Completed</>}</td>
                                    <td>Detail</td>
                                    <td>Remove</td>
                                </tr>
                            ))
                        }
                    </table>
            }
        </div>
    );
}

export default Job;