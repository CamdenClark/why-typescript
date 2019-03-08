import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
  Two options for declaring types: explicit and implicit<br /><br />

  TS assumes myNumber is a number because it's intialized as a number<br /><br />

  Explicitly declaring myNumber as a string but trying to assign a number to it will cause an error<br /><br />

  There's lots of options for this stuff<br /><br />

`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30}>
        In TypeScript, types are either implicit or are annotated explicitly.
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
// Compiler error, myNumber was 
// initialized as a number`}
        />

        <CodePane
          style={{
            display: "flex",
            width: "50%",
            minWidth: "50%",
            maxWidth: "50%",
            fontSize: 38,
            margin: 0
          }}
          lang="javascript"
          source={`let myNumber: string = 4;
// Error: Can't assign number to string`}
        />
      </div>
    </Slide>
  );
}
