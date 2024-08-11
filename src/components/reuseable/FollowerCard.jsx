
const FollowerCard = (props) => {
  return (

        <div cardTheme="" className="lightcard my-2 my-lg-4 col-sm-10 m-2 text-center rounded d-block cardWidth"> 
            <div className={props.socialColor} style={{height:"3px", borderRadius:"5px 5px 0 0"}}></div>
            <div className="p-3">

                <span lightTexts="" className="xs"><img src={props.socialIcon} alt="" style={{width:"15px"}} /> &nbsp; {props.socialHandle}</span>
                <div className="py-3">
                <h1 boldTexts="" className="bold m-0 p-0" >{props.followersCount}</h1>
                <p lightTexts="" className="word-space xs">{props.audienceType}</p>   
                </div>
           
    
            <span className={props.followerImprovement} ><img src={props.upDownArrow} alt="" style={{width:"10px"}} /> {props.percentage} Today </span>
            </div>
           
       
    </div>
  )
}

export default FollowerCard