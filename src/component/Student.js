import React from "react";

const Student = ({ students }) => {
    return (
        <div>
                <center><h2> Student List </h2></center>
                {students.map((student) => (
                    <div className="card">
                        <div className="card-body" style={{textAlign: "center"}}>
                            <h5 className="card-title"> {student.name} </h5>
                            <h6 className="card-subtitle mb-2 text-muted"> {student.tier} </h6>
                            <p className="card-text">{student.phone}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Student