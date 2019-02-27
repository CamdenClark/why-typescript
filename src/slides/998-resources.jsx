import React from "react";
import { Slide, Heading, Link } from "spectacle";

const notes = ``;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Heading bold lineHeight={0.7} style={{ marginBottom: 100 }}>
        Resources:
      </Heading>
      <Link
        target="_blank"
        href="https://basarat.gitbooks.io/typescript/"
      >
        TypeScript Deep Dive (the best resource by far)
      </Link>
      <br />
      <Link
        target="_blank"
        href="https://www.typescriptlang.org/"
      >
        Official website
      </Link>
      <br />
      <Link
        target="_blank"
        href="http://definitelytyped.org/"
      >
        DefinitelyTyped -- repository for type definitions
      </Link>
    </Slide>
  );
}
