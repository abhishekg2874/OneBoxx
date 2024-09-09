import { Button, Img, SelectBox, Text, Heading } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function OneboxoneFunctionbar() {
  return (
    <div className="self-stretch rounded-tl-md rounded-tr-md border-b border-solid border-gray-900_01 p-3">
      <div className="flex items-center gap-2 md:flex-col">
        <div className="flex-1 md:self-stretch">
          <div className="flex flex-col items-start gap-0.5">
            <Heading as="h2">Orlando</Heading>
            <Text as="p" className="!text-white-a700_66">
              orladom@gmail.com
            </Text>
          </div>
        </div>
        <div className="flex w-[44%] justify-center gap-3.5 md:w-full">
          <div className="flex flex-1 gap-4">
            <SelectBox
              size="md"
              shape="round"
              indicator={
                <Img src="/public/images/img_arrowdown_blue_gray_200_1.svg" alt="Arrow Down" className="h-[18px] w-[16px]" />
              }
              getOptionLabel={(e) => (
                <>
                  <div className="flex items-center">
                    <Img src="/public/images/img_contrast_gray_800_01.svg" alt="Contrast" className="h-[18px] w-[20px]" />
                    <span>{e.label}</span>
                  </div>
                </>
              )}
              name="contrast"
              placeholder={`Meeting Completed`}
              options={dropDownOptions}
              className="flex-grow gap-2 border border-solid border-gray-800_03 font-opensans font-semibold"
            />
            <SelectBox
              size="md"
              shape="round"
              indicator={
                <Img src="/public/images/img_arrowdown_blue_gray_200_1.svg" alt="Arrow Down" className="h-[14px] w-[16px]" />
              }
              name="arrowdown_two"
              placeholder={`Move`}
              options={dropDownOptions}
              className="w-[32%] gap-1.5 border border-solid border-gray-800_03 font-opensans font-semibold"
            />
          </div>
          <Button size="lg" className="w-[32px] rounded border border-solid border-gray-800_03">
            <Img src="/public/images/img_more_horiz.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}