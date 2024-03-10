"use client";
import copy from "copy-to-clipboard";
import CodeHighlight from "../syntaxHighlighter/codeHighlight";

export default function ShowCode({ code }: { code: string }) {
  function copyCode(code: string) {
    copy(code);
  }

  return (
    <div className="w-full">
      <CodeHighlight language="jsx" value={code} />
      <button onClick={() => copyCode(code)} className="border">
        copy
      </button>
    </div>
  );
}
