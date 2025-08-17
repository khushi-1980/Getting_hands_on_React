import Report from "./Report"
function StudentCard({student}){
    return(
        <div style={{border:"1px solid gray",padding:"15px",width:"250px",margin:"auto"}}>
            <h3>{student.name}</h3>
            <p>{student.grade}</p>
            <Report grade={student.grade}/>
        </div>
    )
}
export default StudentCard
