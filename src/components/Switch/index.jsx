import React from "react";
import SwitchProvider from "react-switch";
import PropTypes from "prop-types";
const variants = {
  swtFillGray600_1: {
    offColor: "#888585",
    onColor: "#212426",
    offHandleColor: "#888585",
    onHandleColor: "#888585",
  },
};
const sizes = {
  xs: {
    width: 48,
    height: 24,
  },
};
const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillGray600_1",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};
Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillGray600_1"]),
};
export { Switch };