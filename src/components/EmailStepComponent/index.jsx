import { Heading, Text, Img, Button } from "./..";
import React from "react";
export default function EmailStepComponent({
  stepTitle = "Step 1: Email",
  statusText = "Sent",
  dateText = "3rd, Feb",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center gap-4 flex-1`}>
      <Button size="lg" shape="circle" className="w-[32px] !rounded-[16px] border border-solid border-gray-800_03">
        <Img src="images/img_email_gray_400_01.svg" />
      </Button>
      <div className="flex-1">
        <div className="flex flex-col items-start gap-1">
          <Heading size="headinglg" as="p">
            {stepTitle}
          </Heading>
          <div className="flex items-center self-stretch">
            <Img
              src="images/defaultNoData.png"
              alt="Step 1email"
              className="h-[22px] w-[22px] rotate-[-45deg] rounded-[50%]"
            />
            <div className="flex flex-1 flex-wrap">
              <Text size="textxs" as="p" className="!text-gray-400_02">
                {statusText}
              </Text>
              <Heading size="headings" as="p" className="self-end !text-gray-400_02">
                {dateText}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}