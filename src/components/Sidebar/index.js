import React from "react";
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from "./SidebarElements";

const SideBar=({isOpen,toggle})=>{

return(

    
    <SidebarContainer isOpen={isOpen} >

    <Icon onClick={toggle}>
    <CloseIcon />
    </Icon>

    <SidebarMenu>
        <SidebarLink to="/" onClick={toggle}>Pizzas</SidebarLink>
        <SidebarLink to="/" onClick={toggle}>Desserts</SidebarLink>
        <SidebarLink to="/" onClick={toggle}>Full Pizzas</SidebarLink>
    </SidebarMenu>

    <SideBtnWrap>
    
    <SidebarRoute to="/" onClick={toggle}>Order Now</SidebarRoute>

    </SideBtnWrap>

    </SidebarContainer>

);


}

export default SideBar; 