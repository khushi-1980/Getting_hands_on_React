function Report({grade}){
    return(
        <p>
            {grade >=40 ?"🎉 Passed":"❌ Failed"}
        </p>
    )
}
export default Report
