const Main = (props)=>{
     const {data}= props
    return(
         <div className="imgContainer">
              <img className="img" src={data.hdurl} alt={data.title || "img"} />
         </div>
        
    )
}
export default Main;