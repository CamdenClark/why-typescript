import React from "react";
import { Appear, Slide, Text, List, ListItem } from "spectacle";

const notes = `
  Optional really means optional, ts will still emit despite errors<br /><br />
  Your JavaScript is valid TypeScript<br /><br />
  Just add TS to build tool, change everything to .ts<br /><br />
  Not about to tell you to rewrite your entire code base, this can be helpful _now_<br /><br />
  Also get access to new ECMAScript features, like decorators<br /><br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        TypeScript's Design Motivations
      </Text>

      <List>
        <ListItem>
          Put an optional type system over JavaScript.
        </ListItem>
        <ListItem>
          Maintain TypeScript as a superset of JavaScript.
        </ListItem>
      </List>

      <Appear>
        <Text textSize={40} bold style={{ marginTop: 100 }}>
          Your JavaScript is TypeScript.
        </Text>
      </Appear>
    </Slide>
  );
}
