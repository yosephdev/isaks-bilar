import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillMail,
  AiOutlinePhone,
  AiFillHome

} from 'react-icons/ai'

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Isaks Auto Mart</Logo>
        <Desc>
         Isaks Auto Mart is an online marketplace for automobiles. Shop for top-quality cars online.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiOutlineTwitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About us</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AiFillHome style={{ marginRight: '10px' }} /> Eskilstuna, Sweden      
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{ marginRight: '10px' }} /> +46 703566108
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: '10px' }} /> yosephbet@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}


const Container = styled.div`
  margin-top: 70px;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`
font-family: 'La Belle Aurore', sans-serif;
font-size: 24px;`

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

export default Footer
