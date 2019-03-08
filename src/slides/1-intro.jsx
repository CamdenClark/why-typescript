import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";

const notes = `
  Introduction<br />
  - Name<br />
  - Title & Company<br /><br />
  We'll be discussing TypeScript, and what benefits it can have to your development cycle.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={1} textColor="secondary" fit caps lineHeight={1.2}>
        Why Typescript?
      </Heading>
      <Text bold textColor="tertiary" textSize="2rem">
        Camden Clark
      </Text>
      <Image src={require('../media/logo.png')}  />
    </Slide>
  );
}
