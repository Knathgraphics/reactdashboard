
const OverviewCard = (props) => {
    return (
  
        <div overviewCard="" className="lightcard my-2 p-3 my-lg-2 col-sm-10 m-2 text-center rounded d-block cardWidth"> 
        <div className="d-flex"  style={{justifyContent:"space-between", alignItems:"baseline"}}>
            <p className="xs bold secondaryblue">{props.action}</p> 
            <img src={props.logo} style={{display:"block"}} alt="" width="12px" />
        </div>
        <div className="d-flex " style={{justifyContent:"space-between", alignItems:"center"}}>
           <h4 boldTexts="" className="bolder">{props.actionCount}</h4>
           <span className={props.followerImprovement} ><img src={props.upDownArrow} alt="" style={{width:"10px"}} /> {props.percentage}</span>
        </div>
        </div>
    )
  }
  
  export default OverviewCard