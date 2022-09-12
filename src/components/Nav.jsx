import {
  Flex,
  Button,
  Text,
} from "@aws-amplify/ui-react";
import './styles/Nav.css';

export default function NavBar({ signOut }) {
  return (
    <Flex
      gap="20px"
      width="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="2px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <img src={ require("../assets/img/004-sports.png") } className="header-logo" alt="logo" />
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 10px"
          whiteSpace="pre-wrap"
          children="Pickem' Pools"
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        width="633.5px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="633.5px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Text
          fontSize="18px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 10px"
          whiteSpace="pre-wrap"
          children="My Pools"
        ></Text>
        <Button onClick={signOut}>Sign out</Button>
      </Flex>
    </Flex>
  )
}