import { Img, ChipView, Text } from "./..";
import React from "react";
export default function UserProfile1({
  userEmail = "Beata@gmail.com",
  userDate = "Mar 7",
  userComment = "I&#39;ve tried a lot and .",
  ...props
}) {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Interested` },
    { value: 2, label: `Campaign Name` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  return (
    <div {...props} className={`${props.className} flex items-center md:px-5 flex-1`}>
      <div className="w-full">
        <div className="h-[2px] rotate-[-90deg] bg-blue_gray-900_05" />
        <div className="flex items-start">
          <div className="relative z-[1] mt-[22px] h-[8px] w-[8px] rounded bg-indigo-a200" />
          <div className="relative ml-[-4px] h-[100px] flex-1 self-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-1 py-4">
            <div className="flex flex-col gap-2">
              <div>
                <div className="flex flex-col items-start">
                  <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
                    <Text size="textlg" as="p" className="!font-medium">
                      {userEmail}
                    </Text>
                    <Text as="p" className="!text-gray-50_66">
                      {userDate}
                    </Text>
                  </div>
                  <Text as="p" className="!text-gray-300_01">
                    {userComment}
                  </Text>
                </div>
              </div>
              <ChipView
                options={chipOptions}
                setOptions={setChipOptions}
                values={selectedChipOptions}
                setValues={setSelectedChipOptions}
                className="flex flex-wrap gap-2"
              >
                {(option) => (
                  <React.Fragment key={option.index}>
                    {option.isSelected ? (
                      <div
                        onClick={option.toggle}
                        className="flex h-[20px] min-w-[82px] cursor-pointer flex-row items-center justify-center gap-1 whitespace-pre-wrap rounded-[10px] border border-solid border-green-a200_99 bg-gray-900_01 px-2 text-center font-opensans text-[10px] font-semibold text-green-a200"
                      >
                        <Img src="images/defaultNoData.png" alt="Contrast" className="h-[12px] w-[12px]" />
                        <span>{option.label}</span>
                      </div>
                    ) : (
                      <div
                        onClick={option.toggle}
                        className="flex h-[20px] min-w-[82px] cursor-pointer flex-row items-center justify-center gap-1 rounded-[10px] bg-gray-900_01 px-2 text-center font-opensans text-[10px] font-semibold text-green-a200"
                      >
                        <Img src="images/defaultNoData.png" alt="Contrast" className="h-[12px] w-[12px]" />
                        <span>{option.label}</span>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </ChipView>
            </div>
          </div>
        </div>
        <div className="h-[2px] rotate-[-90deg] bg-blue_gray-900_05" />
      </div>
    </div>
  );
}