import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faSquareReddit,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: zuks01123@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/SashaBeetle",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/oleksandr-zhuk-84698b266/",
  },
  {
    icon: faTelegram,
    url: "https://t.me/Sasha_Beetle",
  },
  {
    icon: faSquareReddit,
    url: "https://www.reddit.com/u/Beetle_sasha",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {socials.map((social, index) =>(
            <a key={index} href={social.url}>
              <FontAwesomeIcon icon={social.icon} size="2x"/>
            </a>
          ))}
          </nav>

          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
