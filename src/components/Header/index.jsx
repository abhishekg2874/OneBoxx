import { SelectBox, Img, Switch, Heading } from "./..";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center p-[18px] md:px-5 border-gray-800_03 border-t border-b border-r border-solid bg-gray-900_07 shadow-bs container-xs`}
    >
      <div className="flex w-full items-center justify-between gap-5">
        <Heading size="heading3xl" as="h6" className="tracking-[-0.32px]">
          Onebox
        </Heading>
        <div className="flex w-[16%] items-center justify-center gap-[22px]">
          <Switch value={false} />
          <SelectBox
            shape="square"
            indicator={<Img src="images/img_arrowdown_white_a700.svg" alt="Arrow Down" className="h-[12px] w-[16px]" />}
            name="arrowdown"
            placeholder={`Tim’s Workspace`}
            options={dropDownOptions}
            className="flex-grow gap-3 font-opensans font-semibold text-white-a700"
          />
        </div>
      </div>
    </header>
  );
}