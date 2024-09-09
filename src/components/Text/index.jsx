import React from "react";
const sizes = {
  textxs: "text-[10px] font-normal not-italic",
  texts: "text-[12px] font-normal not-italic",
  textmd: "text-[13px] font-normal not-italic",
  textlg: "text-[14px] font-normal not-italic",
  textxl: "text-[15px] font-normal not-italic",
  text2xl: "text-[16px] font-normal not-italic",
};
const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};
export { Text };