import React from "react";
import PropTypes from "prop-types";
const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[12px]",
};
const variants = {
  outline: {
    gray_600_01: "border-gray-600_01 border border-solid text-blue_gray-100",
  },
  gradient: {
    red_A200_red_900: "bg-gradient text-white-a700",
    indigo_400_blue_900_fc: "bg-gradient1 text-white-a700",
  },
  fill: {
    gray_900_05: "bg-gray-900_05",
    gray_900_07: "bg-gray-900_07",
    gray_900_03: "bg-gray-900_03 text-white-a700",
    gray_900: "bg-gray-900 text-white-a700",
    gray_900_04: "bg-gray-900_04 text-white-a700",
  },
};
const sizes = {
  xl: "h-[40px] pl-6 pr-[34px] text-[14px]",
  sm: "h-[24px] px-5 text-[10px]",
  "2xl": "h-[48px] px-[34px] text-[16px]",
  md: "h-[26px] px-1.5 text-[14px]",
  lg: "h-[32px] px-2",
  xs: "h-[20px] px-2 text-[10px]",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xl", "sm", "2xl", "md", "lg", "xs"]),
  variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
  color: PropTypes.oneOf([
    "gray_600_01",
    "red_A200_red_900",
    "indigo_400_blue_900_fc",
    "gray_900_05",
    "gray_900_07",
    "gray_900_03",
    "gray_900",
    "gray_900_04",
  ]),
};
export { Button };