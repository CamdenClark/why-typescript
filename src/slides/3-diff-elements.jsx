import React from "react";
import { Appear, Slide, Text, List, ListItem } from "spectacle";

const notes = `
  Static typing is a great candidate<br />
    -- easier refactoring<br />
    -- awesome intellisense<br /><br />

  Types also function well as smart documentation<br />
    -- in math terms, type is the theorem, function body is the proof<br />
    -- can see the shape of objects without consulting external documentation, huge process improvements<br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        Why static typing?
      </Text>

      <List>
        <Appear>
          <ListItem>
            Make IDEs significantly more powerful
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Work well as documentation
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
