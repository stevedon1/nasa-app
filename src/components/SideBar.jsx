const SideBar = (props)=>{
    const {showModal, handleToggleModal, data} = props;
    return(
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebar-content">
            <h2>{data?.title}</h2>
            <p>{data?.date}</p>
            <div>
                <p className="descriptionTitle">Description</p>
                <p>{data?.explanation}</p>
                
            </div>
            <button onClick={handleToggleModal}><i className="fa-solid fa-right-long"></i></button>  
            </div>
        </div>
    )
}
export default SideBar;