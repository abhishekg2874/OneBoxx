import { Text, Heading } from "./..";
import React from "react";
export default function ProductLaunchEmail({
  productTitle = "New Product Launch",
  launchTime = "20 june 2022 : 9:16AM",
  fromEmail = "from : jeanne@icloud.com cc : lennon.j@mail.com",
  toEmail = "to : lennon.j@mail.com",
  emailDescription = (
    <>
      Hi &#123;FIRST_NAME&#125;,
      <br />
      <br />I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas
      startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software
      products.
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start justify-center border-gray-800_03 border border-solid bg-gray-900_03 shadow-xs flex-1 cursor-pointer rounded hover:border-gray-800_03 hover:border hover:border-solid hover:shadow-xs`}
    >
      <div className="self-stretch rounded-tl rounded-tr bg-gray-900_07 p-2.5">
        <div className="flex flex-col items-start gap-2.5 sm:gap-2.5">
          <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
            <Heading as="p" className="!text-gray-50">
              {productTitle}
            </Heading>
            <Text size="textlg" as="p" className="self-end !font-sfpro !text-gray-600_02">
              {launchTime}
            </Text>
          </div>
          <Text size="textlg" as="p" className="!font-sfpro !text-gray-400_03">
            {fromEmail}
          </Text>
          <Text size="textlg" as="p" className="!font-sfpro !text-gray-400_03">
            {toEmail}
          </Text>
        </div>
      </div>
      <div className="ml-4 h-px w-[74%] bg-gray-900_07 sm:ml-0" />
      <div className="mb-1 ml-4 mt-3.5 flex w-[68%] bg-gray-900_07 sm:ml-0">
        <Text
          size="textlg"
          as="p"
          className="w-full !font-opensans leading-[19px] tracking-[-0.28px] !text-gray-300_01 sm:w-full"
        >
          {emailDescription}
        </Text>
      </div>
    </div>
  );
}