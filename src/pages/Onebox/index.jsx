import { Helmet } from "react-helmet";
import { Heading, Img, SelectBox, Switch } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function OneboxPage() {
  return (
    <>
      <Helmet>
        <title>Abhishek gupta&#39;s Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="overflow-auto">
          <header className="container-xs border-b border-r border-t border-solid border-gray-800_03 bg-gray-900_07 p-[18px] shadow-bs md:px-5">
            <div className="flex items-center justify-between gap-5">
              <Heading size="heading3xl" as="h6" className="tracking-[-0.32px]">
                Onebox
              </Heading>
              <div className="flex w-[16%] items-center justify-center gap-[22px]">
                <Switch value={false} />
                <SelectBox
                  shape="square"
                  indicator={
                    <Img src="./public/images/img_arrowdown_white_a700.svg" alt="Arrow Down" className="h-[12px] w-[16px]" />
                  }
                  name="arrowdown"
                  placeholder={`Tim’s Workspace`}
                  options={dropDownOptions}
                  className="flex-grow gap-3 font-opensans font-semibold text-white-a700"
                />
              </div>
            </div>
          </header>
          <div className="flex items-start">
            <Sidebar1 />
            <div className="container-xs relative h-[692px] content-center md:h-auto md:px-5">
              <div className="ml-[276px] h-[692px] w-[34%] border-l border-solid border-gray-50_33 bg-gray-900_07 md:ml-0" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-black-900 px-14 py-[142px] md:p-5">
                <div className="mb-4 flex w-[64%] flex-col items-center gap-12 bg-black-900 px-14 md:w-full md:px-5">
                  <Img
                    src="/public/images/img_no_message_illustration.png"
                    alt="Nomessage"
                    className="h-[228px] w-[38%] object-contain"
                  />
                  <div className="flex w-[74%] flex-col items-center gap-[22px] md:w-full">
                    <Heading size="heading5xl" as="h1" className="mt-1 !font-dmsans">
                      It’s the beginning of a legendary sales pipeline{" "}
                    </Heading>
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="w-[54%] text-center !font-dmsans leading-[152.2%] !text-gray-500_02 md:w-full"
                    >
                      When you have inbound E-mails you’ll see them here
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}