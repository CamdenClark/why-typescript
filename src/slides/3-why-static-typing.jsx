import React from "react";
import { Slide, Text, List, ListItem, Image, Fit, Layout, Fill } from "spectacle";

const notes = `
  Static typing is a great candidate<br />
    -- easier refactoring<br />
    -- awesome intellisense<br /><br />

  Types also function well as smart documentation<br />
    -- in math terms, type is the theorem, function body is the proof<br />
    -- can see the shape of objects without consulting external documentation, huge process improvements<br />

  Types also provide certain guarantees that help you catch bugs<br />
    -- undefined is not a function errors<br />
    -- prevents another cycle of building, recreating error, and diagnosing it<br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Layout>
        <Fit>
          <Text fit bold textColor="dark">
            Why static typing?
          </Text>

          <List>
            <ListItem>
              Make IDEs significantly more powerful
            </ListItem>
            <ListItem>
              Work well as documentation
            </ListItem>
            <ListItem>
              Easily diagnose an entire class of bugs
            </ListItem>
          </List>
        </Fit>
        <Fill>
          <Image width={"75%"} src={require("../media/IntellisensePower.gif")} />
        </Fill>
      </Layout>
    </Slide>
  );
}
