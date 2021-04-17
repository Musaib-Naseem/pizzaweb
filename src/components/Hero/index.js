import React,{useState} from "react";
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from "./HeroElements";
import Navbar from "../Navbar/index";
import  SideBar from "../Sidebar/index";

const Hero=()=>{

const [isOpen,setIsOpen]=useState(false);

const toggle=()=>{

    setIsOpen(!isOpen);

}

return(

    <>
<HeroContainer>
<Navbar  toggle={toggle}/>
<SideBar isOpen={isOpen} toggle={toggle} />
<HeroContent >
<HeroItems>
<HeroH1>Greatest Pizza Ever</HeroH1>
<HeroP>Ready in 60 Seconds</HeroP>
<HeroBtn>Place Order</HeroBtn>
</HeroItems>
</HeroContent>
</HeroContainer>

    </>
);

}

export default Hero;