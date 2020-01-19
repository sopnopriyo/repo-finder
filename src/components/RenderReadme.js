import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from "react-bootstrap/Badge";

export default function RenderReadme(props) {
  const { text } = props.readme;

  const readmeHtml = text;

  function createMarkup() {
    if (readmeHtml !== undefined) {
      return { __html: `${readmeHtml}` };
    }
  }

  return (
    <section className="repo-details">
      <Jumbotron fluid>
        <h2>
          <Badge variant="dark">Readme</Badge>
        </h2>
        <div className="render-readme">
          {!readmeHtml && "Loading Readme..."}
          {readmeHtml && <div dangerouslySetInnerHTML={createMarkup()}></div>}
        </div>
      </Jumbotron>
    </section>
  );
}
