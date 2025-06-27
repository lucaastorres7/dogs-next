import React from "react";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonType) {
  return (
    <button
      {...props}
      className="text-base text-[#764701] cursor-pointer rounded-md bg-[#fb1] px-[1.2rem] py-[0.8rem] box-border min-w-[8rem] transition delay-100 focus:outline-none focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] hover:outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] disabled:opacity-50 disabled:cursor-wait"
    >
      {children}
    </button>
  );
}
