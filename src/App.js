import React from "react";
import { useState, useContext } from "react";
import { Container, Icon, Line, Img, MobileConatiner, ImgWrapper, Iconcon, TitleImg, Desc, Item, Title, ToggleMode } from './Appstyle';
import img from "./12.png"
import { ThemeContect } from "./context";

const App = () => {

  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContect);

  const dark = {
    icon: "black", title: 'black', background: "white"
  }

  const light = {
    icon: "white", title: 'white', background: "black"
  }

  const onChange = () => {
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return <div>

    <Container >
      <MobileConatiner color={theme.background}>
        <Iconcon>
          <Icon.Arrow  color={theme.icon}/>
          <Icon.Switch color={theme.icon}/>
        </Iconcon>
        <ImgWrapper>
          <Img src={img} />
          <TitleImg color={theme.title} >Cassian</TitleImg>
          <Desc color={theme.title}>No one</Desc>
        </ImgWrapper>
        <Item>
          <Icon.Dark color={theme.icon} />
          <Title color={theme.title}>
            Dark  Mode
          </Title>
          <ToggleMode
            onChange={onChange}
            checked={mode}
            size={50}
          />
        </Item>

        <Item>
          <Icon.Grid />
          <Title color={theme.title} >
            Story
          </Title>
        </Item>
        <Item>
          <Icon.User />
          <Title color={theme.title} >
            Chat head
          </Title>
        </Item>

        <Item>
          <Icon.Group />
          <Title color={theme.title}>
            Groups
          </Title>
        </Item>
        <Line />


        <Item>
          <Icon.Media />
          <Title color={theme.title}>
            Media and Photos
          </Title>
        </Item>

        <Item>
          <Icon.Settings />
          <Title color={theme.title} >
            Settings
          </Title>
        </Item>

        <Item>
          <Icon.Comment />
          <Title color={theme.title} >
            Settings
          </Title>
        </Item>


        <Item>
          <Icon.Bell1 />
          <Title color={theme.title} >
            Bell
          </Title>
        </Item>
      </MobileConatiner>
    </Container>


  </div>;
}
export default App;