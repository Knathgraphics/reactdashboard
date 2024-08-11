import OverviewCard from "../reuseable/OverviewCard"
import facebookIcon from "../../assets/images/icon-facebook.svg"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"
import youtubeIcon from "../../assets/images/icon-youtube.svg"
import upArrow from "../../assets/images/icon-up.svg"
import downArrow from "../../assets/images/icon-down.svg"


const Overview = () => {
  return (
    <div>
        <div className="overview py-3">
            <h5 id="overcaption" className='secondaryblue bold'>Overview - Today</h5>
        </div>
    
        <div className="followersRow">
        
        <OverviewCard action="Page Views" logo={facebookIcon} actionCount="87" followerImprovement="followerIncrease" upDownArrow={upArrow} percentage="3%"/>
        
        <OverviewCard action="Likes" logo={facebookIcon} actionCount="52" followerImprovement="followerDecrease" upDownArrow={downArrow} percentage="2%"/>

        <OverviewCard action="Likes" logo={instagramIcon} actionCount="5426" followerImprovement="followerIncrease" upDownArrow={upArrow} percentage="2657%"/>
        
        <OverviewCard action="Profile View" logo={instagramIcon} actionCount="52k" followerImprovement="followerIncrease" upDownArrow={upArrow} percentage="1375%"/>
    </div>

    <div className="followersRow m-0">
        
        <OverviewCard action="Retweets" logo={twitterIcon} actionCount="117" followerImprovement="followerIncrease" upDownArrow={upArrow} percentage="303%"/>
        
        <OverviewCard action="Likes" logo={twitterIcon} actionCount="507" followerImprovement="followerIncrease" upDownArrow={upArrow} percentage="553%"/>

        <OverviewCard action="Likes" logo={youtubeIcon} actionCount="107" followerImprovement="followerDecrease" upDownArrow={downArrow} percentage="19%"/>
        
        <OverviewCard action="Profile View" logo={youtubeIcon} actionCount="1407" followerImprovement="followerDecrease" upDownArrow={downArrow} percentage="12%"/>
    </div>
    </div>
    
  )
}

export default Overview