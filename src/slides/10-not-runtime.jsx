import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
  TYPES IN TYPESCRIPT ARE AT COMPILE TIME<br /><br />

  The compiler won't save you if you circumvent it.<br /><br />

  Additionally, this means that you can't check the TypeScript type of something at runtime.<br /><br />

  TypeScript has "type guards" that infer stuff about the types of your objects.<br /><br />

  Make sure you aren't abusing the flexibility of TypeScript, or you can get nasty errors in production.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30} italic>
        Q: Do I have types at runtime? 
      </Text>
      <Text textSize={30} bold>
        A: Nope. Types in TypeScript are only at compile time.
      </Text>
      <Text textSize={30}>
        This means the compiler <strong>can't</strong> save you at runtime if you circumvent the type system.
      </Text>

      <div style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
        <CodePane
          style={{
            display: "flex",
            width: "50%",
            minWidth: "50%",
            maxWidth: "50%",
            fontSize: 24
          }}
          lang="javascript"
          source={`interface Point2D {
    x: number;
    y: number;
}
// Below is a bad type assertion
const myPoint: Point2D = { x: 0 } as Point2D; 
function getY(point: Point2D) {
  return point.y;
}

iTakePoint2D(myPoint); // Compiles fine, but will fail at runtime because myPoint doesn't have a y property`}
        />
      </div>

      <Text textSize={40} bold style={{ marginTop: 100 }}>
        Bottom line: Trust the TypeScript compiler, and try to be as explicit as possible with types.
      </Text>
    </Slide>
  );
}
