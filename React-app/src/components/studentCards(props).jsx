function StudentData(props) {
    return (
        <div style={{
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    width: "200px",
}}>
            <p>name: {props.name} </p>
            <p>age: {props.age} </p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
            <p>Major: {props.major}</p>
            <p>CGPA: {props.cgpa}</p>
        </div>
    )
}

export default StudentData;