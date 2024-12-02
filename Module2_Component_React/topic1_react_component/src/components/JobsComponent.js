import { Component } from "react";

class Job extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                New Job {this.props.index} | <a href="#" onClick={this.props.delete}>x</a>
            </div>
        )
    }
}

class ManagementJob extends Component {
    // 1
    constructor(props) {
        super(props);
        this.state = { JobsList: [] }
    }

    addNewJob = () => {
        // Update JobList
        this.setState(prevState => ({ JobsList: [...prevState.JobsList, <Job index={prevState.JobsList.length + 1} />] }))
    }

    // 2
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Management Jobs</h1>
                <button onClick={this.addNewJob}>Add new Job</button>
                <div>
                    {
                        this.state.JobsList?.map((element, index) => (
                            <div key={index}>
                                {element}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ManagementJob;