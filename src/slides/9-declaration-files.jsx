import React from "react";
import { Slide, Text, Code } from "spectacle";

const notes = `
  Most popular libraries have type definitions already.<br /><br />

  If not, you can still use the library, just won't have any type safety.<br /><br />

  Luckily, creating a type definition from API docs isn't too tough.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30} italic>
        Q: Do my libraries have types? 
      </Text>
      <Text textSize={30} bold style={{ marginBottom: 100 }}>
        A: Probably, and, if not, you can write it yourself or treat it as <Code>any</Code>
      </Text>

      <Code >yarn add --dev @types/react</Code>
      <br />
      <Code>npm install --save-dev @types/react</Code>

      <Text textSize={30} bold style={{ marginTop: 100 }}>
        Most packages have a declarations at: <Code>@types/$packageName</Code> or embedded in their project.
      </Text>
    </Slide>
  );
}