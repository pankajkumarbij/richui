import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeHighlight({
  language,
  value,
}: {
  language: string;
  value: string;
}) {
  return (
    <div>
      <SyntaxHighlighter language={language} style={materialDark} PreTag="div">
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
