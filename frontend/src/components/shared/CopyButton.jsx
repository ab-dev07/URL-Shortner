import { useState, useCallback } from "react";
import { CopyIcon, CheckIcon } from "../../icons/index.jsx";

export default function CopyButton({ textToCopy, size = "md" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [textToCopy]);

  const base =
    "inline-flex items-center gap-1.5 font-medium rounded-lg border transition-all duration-150 active:scale-95 cursor-pointer select-none";
  const sizes = size === "sm" ? "text-xs px-2.5 py-1.5" : "text-xs px-3.5 py-2";
  const style = copied
    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900";

  return (
    <button
      onClick={handleCopy}
      className={`${base} ${sizes} ${style}`}
      aria-label="Copy to clipboard"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
