const ToggleSwitch = () => {

    const changeMode = ()=>{
        console.log("clicked");
        var currentMode = document.getElementById("switch").getAttribute("class");
        if(currentMode == "lightToggle"){
            document.getElementById("switch").setAttribute("class", "darkToggle");
            document.getElementById("thumb").setAttribute("class", "thumbDark");
            document.body.style.animationName = "lightToDark";
            document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
            document.getElementById("title").style.color = "white";
            const overviewCards = document.querySelectorAll('[overviewCard]');
            overviewCards.forEach((item)=>{
                item.setAttribute("class", "darkcard my-2 p-3 my-lg-2 col-sm-10 m-2 text-center rounded d-block cardWidth")
            });
            const cards = document.querySelectorAll('[cardTheme]');
            cards.forEach((item)=>{
                item.setAttribute("class", "darkcard my-2 my-lg-4 col-sm-10 m-2 text-center rounded d-block cardWidth");
            });
            const boldTexts = document.querySelectorAll('[boldTexts]');
            boldTexts.forEach((item)=>{
                item.style.color = "white";
            });
            const lightTexts = document.querySelectorAll('[lightTexts]');
            lightTexts.forEach((item)=>{
                item.style.color = "hsl(228, 12%, 44%)";
            });
            document.getElementById("overcaption").style.color = "white";
        }
        else{
            document.getElementById("switch").setAttribute("class", "lightToggle");
            document.getElementById("thumb").setAttribute("class", "thumb");
            document.body.style.backgroundColor = "white";
            document.body.style.animationName = "darkToLight";
            document.getElementById("title").style.color = "hsl(232, 19%, 15%)";
            const overviewCards = document.querySelectorAll('[overviewCard]');
            overviewCards.forEach((item)=>{
                item.setAttribute("class", "lightcard my-2 p-3 my-lg-2 col-sm-10 m-2 text-center rounded d-block cardWidth");
            });
            const cards = document.querySelectorAll('[cardTheme]');
            cards.forEach((item)=>{
                item.setAttribute("class", "lightcard my-2 my-lg-4 col-sm-10 m-2 text-center rounded d-block cardWidth");
            });
            const boldTexts = document.querySelectorAll('[boldTexts]');
            boldTexts.forEach((item)=>{
                item.style.color = "hsl(232, 19%, 15%)";
            });
            const lightTexts = document.querySelectorAll('[lightTexts]');
            lightTexts.forEach((item)=>{
                item.style.color = "hsl(228, 12%, 44%)";
            });
            document.getElementById("overcaption").style.color = "hsl(228, 8%, 50%)";
        }
       
    }

    return (
      <div>
        <div className="lightToggle" onClick={changeMode} id="switch">
            <div className="thumb" id="thumb" ></div>
        </div>
      </div>
    );
  };
  
  export default ToggleSwitch;