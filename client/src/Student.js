function Student(props){
    console.log(props)
    return(
        <>
        <h1>hello {props.name} </h1>
        <h3>email {props.email} </h3></>
    )
}
export default Student;