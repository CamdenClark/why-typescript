import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `

`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30} italic>
        Q: What about all my existing code, do I have to provide type annotations?
      </Text>
      <Text textSize={30} bold>
        A: No.
      </Text>
      <Text textSize={30}>
        TypeScript has an <span style={{ fontFamily: "Courier New "}}>any</span> type.
      </Text>

      <div style={{ display: "flex", flexDirection: "row", marginTop: 60 }}>
        <CodePane
          style={{
            display: "flex",
            width: "75%",
            minWidth: "75%",
            maxWidth: "75%",
            fontSize: 38
          }}
          lang="javascript"
          source={`const getExtension(filename) => {
  // filename variable has any type, which means
  // TypeScript assumes any property is valid
  const tokens = filename.split('.');
  return tokens[tokens.length - 1];
} // no error`}
        />
      </div>

      <Text textSize={40} bold style={{ marginTop: 100 }}>
        Bottom line, no huge refactors or rewrites should be needed to start using TypeScript.
      </Text>
    </Slide>
  );
}
