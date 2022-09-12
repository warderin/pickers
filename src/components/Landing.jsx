import React, {useState} from 'react';
import {
  Flex,
  Button,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { HeroLayout3 } from "../ui-components/HeroLayout3.jsx"
import bg1 from '../assets/img/bg1.jpg'
import bg2 from '../assets/img/bg2.jpg'
import bg3 from '../assets/img/bg3.jpg'
import bg4 from '../assets/img/bg4.jpg'
import bg5 from '../assets/img/bg5.jpg'
import './styles/Landing.css';
import PoolForm from "./PoolForm.jsx";

function getBg() {
  const pictureArray = [bg1, bg2, bg3, bg4, bg5];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  return pictureArray[randomIndex];
}

export default function Landing(props) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    console.log("handleOpenModal called");
      setOpenModal(!openModal);
  }

  return (
    <div id="landing">
      <View
        width="100%"
        height="500px"
        position="relative"
        padding="0px 0px 0px 0px"
      >

        <Image
          src={getBg()}
          className="landing-bg"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          width="100%"
          padding="0px 0px 0px 0px" />
        <Flex
            gap="24px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="absolute"
            padding="150px 100px 0px 100px"
          >
            <Text
              fontSize="16px"
              fontWeight="700"
              color="white"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="A SLIGHTLY IMPROVED PICKS WEBSITE"
            ></Text>
            <Flex
              gap="16px"
              direction="column"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Text
                fontSize="24px"
                fontWeight="400"
                color="white"
                lineHeight="30px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Really just doing the bare minimum"
              ></Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                color="white"
                lineHeight="24px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              ></Text>
            </Flex>
            <Button
              display="flex"
              gap="0"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Create a pool"
              onClick={handleOpenModal}
            ></Button>
            <Button
              display="flex"
              gap="0"
              width="158px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              size="large"
              isDisabled={false}
              children="Join a pool"
              className="btn-2"
            ></Button>
          </Flex>
      </View>
      {openModal &&
        <PoolForm
          toggleModal={handleOpenModal} />
      }
      
    </div>
  );
}