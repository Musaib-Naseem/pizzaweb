import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaPizzaSlice} from "react-icons/fa";


export const Nav=styled.nav`

background-color:transparent;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;

export const NavLink=styled(Link)`

color:#fff;
font-size:2.5rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
border:3px solid green;
margin-top:20px;
padding:8px;


@media screen and (max-width:400px){

position:absolute;
top:10px;
left:25px;
}

`;

export const NavIcon=styled.div`

display:block;
position:absolute;
top:20px;
right:50px;
cursor:pointer;
color:#fff;
display:flex;

p{

    font-weight:700;
    font-size:23px;
    padding-right:20px;
}

`;


export const Bars=styled(FaPizzaSlice)`

font-size:2rem;


`;