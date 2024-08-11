import FollowerCard from "../reuseable/FollowerCard"
import facebookIcon from "../../assets/images/icon-facebook.svg"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"
import youtubeIcon from "../../assets/images/icon-youtube.svg"
import upArrow from "../../assets/images/icon-up.svg"
import downArrow from "../../assets/images/icon-down.svg"

const FollowerSection = () => {
  return (
    <div>
        <div style={{height:"30px"}}></div>
    <div className="followersRow">
        <FollowerCard socialColor="bg-facebook" socialIcon={facebookIcon} audienceType="Followers" socialHandle="@nathanf" followersCount={1987} followerImprovement="followerIncrease"  upDownArrow={upArrow}  percentage="12"/>
        <FollowerCard socialColor="bg-twitter" socialIcon={twitterIcon} audienceType="Followers" socialHandle="@nathanf" followersCount={1004} followerImprovement="followerIncrease"  upDownArrow={upArrow} percentage="99" />
        <FollowerCard socialColor="bg-instagram" socialIcon={instagramIcon} audienceType="Followers" socialHandle="@realnathanf" followersCount="11k" followerImprovement="followerIncrease"  upDownArrow={upArrow}  percentage="1099"/>
        <FollowerCard socialColor="bg-youtube" socialIcon={youtubeIcon} audienceType="subscribers" socialHandle="@Nathan F." followersCount="8239" followerImprovement="followerDecrease"  upDownArrow={downArrow} percentage="144"/>
    </div>
    </div>
  )
}

export default FollowerSection