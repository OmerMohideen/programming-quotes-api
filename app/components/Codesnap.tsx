'use client'
import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/oceanicNext';

type Codesnap = {
  snippet: string;
  language: Language;
}

function Codesnap({snippet, language}: Codesnap) {
  return (
    <Highlight {...defaultProps} theme={dracula} code={snippet} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded-md p-6 whitespace-pre-wrap overflow-auto lg:text-base text-xs`}
          style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Codesnap