import react from 'react';
import github from "../assets/github.png"
import facebook from "../assets/facebook.png" 
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"


function Footer(){
    return(
        <div>
           <img src={github} alt="github image"/>
           <img src={facebook} alt="facebook image"/>
           <img src={instagram} alt="instagram image"/>
           <img src={twitter} alt="twitter image"/>
          
        </div>
    )
}
export default Footer;