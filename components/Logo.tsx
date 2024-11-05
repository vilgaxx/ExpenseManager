import { ReceiptIndianRupee } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <ReceiptIndianRupee className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
      {/* <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" /> */}
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        ExpenseManager
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        EM
      </p>
    </a>
  );
}

export default Logo;
