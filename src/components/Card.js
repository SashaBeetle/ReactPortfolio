import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
    
  return(
    <HStack spacing={4}  bgColor={"white"} rounded={"2xl"} >
      <VStack spacing={4} >
        <Box >
          <Image src={imageSrc} rounded={"2xl"}/>  
        </Box>
        <Box >
          <Heading paddingInlineStart={'5'}  fontSize={"3xl"} textColor={"black"} textAlign="left">{title}</Heading>
        </Box>
        <Box>
          <Text paddingInlineStart={'5'}  paddingInlineEnd={'5'} color="gray">{description}</Text>
        </Box>
        <Box >
          <Link href={link}>
          <Text paddingInlineStart={'5'}  textColor={"black"}>See more
            <FontAwesomeIcon  color="black" icon={faArrowRight} size="1x" />
          </Text>
          </Link>
          
        </Box>
      </VStack>  
    </HStack>
   
  ) 
};

export default Card;
