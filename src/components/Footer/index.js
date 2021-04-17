import React from "react";
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from "./FooterElements";

const Footer=()=>{

return(

    <FooterContainer>

    <FooterWrap>

    <SocialMedia>
    <SocialMediaWrap>
 
 <SocialLogo to="/">PizzaWeb</SocialLogo>
 <SocialIcons>

  <SocialIconLink href="/" target="_blank">
   <FaFacebook />
  </SocialIconLink> 

   <SocialIconLink href="/" target="_blank">
   <FaTwitter />
  </SocialIconLink>

   <SocialIconLink href="/" target="_blank">
   <FaInstagram />
  </SocialIconLink>

   <SocialIconLink href="/" target="_blank">
   <FaYoutube />
  </SocialIconLink>  
 </SocialIcons>

    </SocialMediaWrap>
    </SocialMedia>    
    
    </FooterWrap>

    </FooterContainer>
);


}

export default Footer;