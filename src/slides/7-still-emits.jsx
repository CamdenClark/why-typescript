import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
  Even if you have a bunch of errors while transitioning to TS, you can tell the compiler to still emit JS.<br /><br />

  This allows you to keep moving quickly.<br /><br />

  Aside from this, there's a ton of options in the compiler that allow you to choose how much type safety you really want, and some linting options.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30} italic>
        Q: Will TypeScript errors prevent me from building? 
      </Text>
      <Text textSize={30} italic>
        <strong>A: Not unless you want it to.</strong>
      </Text>
      <Text textSize={30}>
        TypeScript has lots of compiler options, so you can adjust many features. For example, you can still emit JavaScript if there are compiler errors.
      </Text>

      <div style={{ display: "flex", flexDirection: "row", marginTop: 60 }}>
        <CodePane
          style={{
            display: "flex",
            width: "50%",
            minWidth: "50%",
            maxWidth: "50%",
            fontSize: 38
          }}
          lang="javascript"
          source={`let myNumber = 4;
myNumber = "I'm a string now"; 
// Still builds JS`}
        />
      </div>

      <Text textSize={40} bold style={{ marginTop: 100 }}>
        Even if, on conversion to TypeScript, you have some errors, you can still keep working.
      </Text>
    </Slide>
  );
}