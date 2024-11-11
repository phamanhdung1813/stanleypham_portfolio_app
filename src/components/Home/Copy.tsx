// CopyToClipboard.tsx
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Importing an icon (optional)

interface CopyToClipboardProps {
  textToCopy: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value="phamanhdung1318@gmail.com"
        readOnly
        className="bg-neutral-100 text-neutral-800 border border-neutral-800 
        dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-900
        px-2 py-1 rounded w-64"
      />
      <button
        onClick={handleCopy}
        className="bg-neutral-100 text-neutral-800 hover:text-green-600 
        dark:bg-neutral-800 dark:text-neutral-100 dark:hover:text-green-400
        
        px-2 py-1 rounded flex items-center"
      >
        <FiCopy className="mr-2" />
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
