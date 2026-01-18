import React from "react";
import { FloatingWrapper, Icons, Image, Text } from "./FloatingContainer.styles";
import spotify from "../../assets/Images/spotify.png";
import youtube from "../../assets/Images/youtube.png";
import tiktok from "../../assets/Images/tiktok.png";
import apple from "../../assets/Images/apple.png";
import { motion } from "framer-motion";

const FloatingContainer = () => {
  return (
    <FloatingWrapper
      as={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Text>Watch and follow us on:</Text>
      <Icons>
        <Image src={spotify} alt="spotify" />
        <Image src={apple} alt="apple" />
        <Image src={youtube} alt="youtube" />
        <Image src={tiktok} alt="tiktok" />
      </Icons>
    </FloatingWrapper>
  );
};

export default FloatingContainer;
