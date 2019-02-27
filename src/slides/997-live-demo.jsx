import React from "react";
import { Slide, Heading, Text } from "spectacle";

const notes = ``;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text style={{ marginBottom: 100 }}>
        There are a lot more things to TypeScript, but I think that it's...
      </Text>
      <Heading bold fit textColor="dark" lineHeight={0.6}>
        Time for a live demo
      </Heading>
    </Slide>
  );
}
