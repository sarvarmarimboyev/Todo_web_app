import styled from "styled-components";
import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline"
import { Switch } from "@styled-icons/icomoon/Switch"
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { Moon } from "@styled-icons/heroicons-solid/Moon"
import { Grid } from "@styled-icons/bootstrap/Grid"
import { UserCheck } from "@styled-icons/boxicons-solid/UserCheck"
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus"
import { PermMedia } from "@styled-icons/material-outlined/PermMedia"
import { ChatLeftDots } from "@styled-icons/bootstrap/ChatLeftDots"
import { Bell } from "@styled-icons/boxicons-solid/Bell"

import Toggle from "react-dark-mode-toggle"


export const ToggleMode=styled(Toggle)`
margin-left: auto;
outline: none;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 100px 300px;
height: fit-content;
width: 100vh;
align-items: center;
justify-content: center;
`
export const MobileConatiner = styled.div`
background: ${({color})=>color} ;
width:400px;
height: 670px;
box-sizing: border-box;
box-shadow: 5px 5px 12px 6px rgba(0,0,0,0.25);
`
export const Iconcon = styled.div`
width:100%;
padding:20px;
box-sizing:border-box;
display:flex;
`
export const Icon = styled.div`
/* width: 100%;
padding: 20px;
box-sizing: border-box; */
`
Icon.Arrow = styled(KeyboardArrowLeft)`
color:${({color})=>color};
width: 30px;
height: 30px;
cursor: pointer;
`
Icon.Switch = styled(Switch)`
color:${({color})=>color};
cursor: pointer;
margin-left   : auto;
width: 20px;
height: 20px;
`
export const ImgWrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
`
export const Img = styled.img`
width: 100px;
height:100px;
border-radius: 50%;
padding: 10px;
border:0.5px solid #000;`

 
export const TitleImg = styled.div`
margin-top: 20px;
font-size: 22px;
font-family: sans-serif; 
font-weight: bold;
color: ${({color})=>color};
`


export const Item =styled.div`
display: flex;
padding: 10px 20px;
`

export const Desc = styled.div`
font-size: 16px;
font-weight: bold;
font-family: sans-serif;
color:${({color})=>color};
` 



export const Title = styled.div`
font-size: 20px;
font-size: bold;
margin-top: 2px;
margin-left: 10px;
color:${({color})=>color};
font-family:sans-serif;
`
export const Line=styled.div`
width:85%;
height:1px;
background: #e9e9e9;
margin:10px 30px;
box-sizing: border-box;

`
Icon.Dark = styled(Moon)`
width: 20px;
padding: 3px 0px;
height: 20px;
color: ${({color})=>color};

`
Icon.Grid = styled(Grid)`
width: 25px;
height: 25px;
color: #FBB65C;
`
 
Icon.User = styled(UserCheck)`
width: 27px;
height: 27px;
color:pink;
`


Icon.Group = styled(UserPlus)`
width: 27px;
height: 27px;
color: #36E3FF;
`

Icon.Media = styled(PermMedia)`
width: 25px;
height: 25px;
color: #5476ff;
`

Icon.Settings = styled(SettingsOutline)`
width: 25px;
height: 25px;
color: #5476ff;
`


Icon.Comment = styled(ChatLeftDots)`
width: 25px;
height: 25px;
color: #0bc630;
`

Icon.Bell1 = styled(Bell)`
width: 25px;
height: 25px;
color: #A394c2;
`