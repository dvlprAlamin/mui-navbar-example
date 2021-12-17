import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Line, LineContent, LineNo, Pre } from "./Style/StyledComponent";

const CodeEditor = ({ code }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default CodeEditor;
