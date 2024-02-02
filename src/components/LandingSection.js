import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Oleksandr!";
const bio1 = "A .NET developer";
const bio2 = "specialised in React and ASP.net";
const img = "https://i.pravatar.cc/150?img=7"



const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
        <Avatar src={img} size='3x' />
        <Heading as='h4' size='sm' style={{paddingBottom: '20px'}}>{greeting}</Heading>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
