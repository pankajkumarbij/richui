"use client";
import copy from "copy-to-clipboard";

export default function ShowCode({ code }: { code: string }) {
  function copyCode(code: string) {
    copy(code);
  }

  return (
    <div>
      <code>{code}</code>
      <button onClick={() => copyCode(code)} className="border">
        copy
      </button>
    </div>
  );
}
