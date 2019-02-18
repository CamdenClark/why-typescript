import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `

`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={30} italic>
        Q: Do I need a ton of boilerplate to convert between types like in C# or Java?
      </Text>
      <Text textSize={30} bold>
        A: Nope. Types in TypeScript are structural, not nominal.
      </Text>
      <Text textSize={30}>
        This means that when performing type checking, TypeScript compares the properties, as opposed to the names of the types.
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
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing y `}
        />
      </div>

      <Text textSize={40} bold style={{ marginTop: 100 }}>
        Even if, on conversion to TypeScript, you have some errors, you can still keep working.
      </Text>
    </Slide>
  );
}