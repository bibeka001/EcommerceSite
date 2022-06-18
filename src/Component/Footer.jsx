import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import Card from "../Asset/master.jpg";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Socialcontainer = styled.div`
  display: flex;
`;

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
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: " #fff8f8 " })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  height: 25%;
  width: 50%;
  /* ${mobile({ marginBottom: " 30px" })} */
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>xxx...</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
          omnis nobis consequatur impedit quam, iure a possimus aperiam quasi
          cum inventore amet velit fugiat aut tempora recusandae iste ea.
        </Desc>
        <Socialcontainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </Socialcontainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +44 349 232 2222
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@devil.tohell
        </ContactItem>
        <Payment src={Card} />
      </Right>
    </Container>
  );
};

export default Footer;
