import React from "react";
import { Slide, Heading, Link } from "spectacle";

const notes = ``;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Heading bold fit textColor="dark" lineHeight={1.4}>
        Questions?
      </Heading>

      <Link
        target="_blank"
        href="https://github.com/CamdenClark/why-typescript"
      >
        (https://github.com/CamdenClark/why-typescript)
      </Link>
    </Slide>
  );
}
