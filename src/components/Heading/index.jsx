import React from "react";
const sizes = {
  text3xl: "text-[18px] font-medium",
  headingxs: "text-[8px] font-bold",
  headings: "text-[10px] font-semibold",
  headingmd: "text-[12px] font-semibold",
  headinglg: "text-[13px] font-semibold",
  headingxl: "text-[14px] font-semibold",
  heading2xl: "text-[15px] font-semibold",
  heading3xl: "text-[16px] font-bold",
  heading4xl: "text-[20px] font-semibold",
  heading5xl: "text-[24px] font-bold md:text-[22px]",
};
const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`text-white-a700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};
export { Heading };