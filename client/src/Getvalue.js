function Getvalue(){

function getData(val){
    console.log(val.target.value)


}
    return (
        <>
        <h1>GET INPUT BOX VALUE</h1>
        <input type="text"  onchange={getData}/>

        
        
        </>
    )

}
export default Getvalue;