import React from "react";
import { Slide, Text, Quote, BlockQuote, Cite, Heading } from "spectacle";

const notes = `
  Frontend applications have increased in complexity a lot since JavaScript was created.<br /><br />
  We're touching a lot more code that we didn't write--legacy systems, npm modules.<br /><br />
  Lots of new tools in JavaScript itself to help (commonJS, etc.).<br /><br />
  Still a lot of room to do better for development tools.<br /><br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Heading fit textColor="dark" style={{ marginBottom: 100 }}>
        JavaScript -- a quick history lesson
      </Heading>

      <BlockQuote fill style={{ marginTop: 100 }}>
        <Quote textColor="gray" textSize="large">
          The by-design purpose of JavaScript was to make the monkey dance when you moused over it. Scripts were often a single line. We considered ten line scripts to be pretty normal, hundred line scripts to be huge, and thousand line scripts were unheard of.
        </Quote>
        <Cite textSize="medium" textAlign="right">
          Eric Lippert <a href="https://softwareengineering.stackexchange.com/a/221658">(source)</a>
        </Cite>
      </BlockQuote>

      <Text bold textSize="extra-large" fill style={{ marginTop: 100 }}>
        Things have changed a lot since then, but development tooling for large projects is a really difficult problem.
      </Text>
    </Slide>
  );
}
