import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, Input, ChipView, SelectBox } from "../../components";
import EmailStepComponent from "../../components/EmailStepComponent";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close.jsx";
import Sidebar11 from "../../components/Sidebar11";
import UserProfile from "../../components/UserProfile";
import OneboxoneFunctionbar from "./OneboxoneFunctionbar";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function OneboxOnePage() {
  const [chipOptions1, setChipOptions1] = React.useState(() => [
    { value: 1, label: `Meeting Booked` },
    { value: 2, label: `Campaign Name` },
  ]);
  const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Interested` },
    { value: 2, label: `Campaign Name` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  return (
    <>
      <Helmet>
        <title>Abhishek gupta&#39;s Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="overflow-auto">
          <Header />
          <div className="flex items-start gap-3.5">
            <Sidebar11 />
            <div className="flex flex-1 items-start justify-center md:flex-col">
              <div className="w-[20%] self-center md:w-full md:px-5">
                <div className="flex flex-col gap-2 bg-black-900 py-4">
                  <div className="mr-3 flex items-start justify-center md:mr-0">
                    <div className="flex flex-1 flex-col gap-0.5 self-center">
                      <SelectBox
                        size="sm"
                        shape="square"
                        indicator={
                          <Img src="/public/images/img_checkmark_blue_a200.svg" alt="Checkmark" className="h-[14px] w-[14px]" />
                        }
                        name="checkmark"
                        placeholder={`All Inbox(s)`}
                        options={dropDownOptions}
                        className="ml-3 w-[62%] gap-1.5 font-opensans font-bold text-blue-a200 md:ml-0"
                      />
                      <div className="flex px-2.5">
                        <Text size="textlg" as="p" className="!font-opensans !text-gray-600_02">
                          25/25 Inboxes selected
                        </Text>
                      </div>
                    </div>
                    <Button size="lg" className="w-[32px] rounded">
                      <Img src="/public/images/img_refresh.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 bg-black-900">
                    <Input
                      size="xs"
                      name="search"
                      placeholder={`Search`}
                      value={searchBarValue2}
                      onChange={(e) => setSearchBarValue2(e.target.value)}
                      prefix={
                        <Img
                          src="/public/images/img_search_white_a700_1.svg"
                          alt="Search"
                          className="my-0.5 h-[14px] w-[16px]"
                        />
                      }
                      suffix={
                        searchBarValue2?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue2("")}
                            height={14}
                            width={16}
                            fillColor="#ffffffff"
                          />
                        ) : null
                      }
                      className="mx-2 mt-2 gap-1 rounded border border-solid border-white-a700_19 !text-white-a700_33 md:mx-0"
                    />
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center">
                          <Button size="md" shape="round" className="min-w-[34px] font-semibold !text-indigo-a200">
                            26
                          </Button>
                          <Heading as="h1" className="self-end !text-gray-300">
                            New Replies
                          </Heading>
                        </div>
                        <SelectBox
                          shape="square"
                          indicator={
                            <Img
                              src="/public/images/img_arrowdown_gray_300.svg"
                              alt="Arrow Down"
                              className="h-[12px] w-[10px]"
                            />
                          }
                          name="arrowdown_one"
                          placeholder={`Newest`}
                          options={dropDownOptions}
                          className="w-[30%] gap-3 font-semibold text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-1.5 mr-3 flex flex-col md:mx-0">
                    <UserProfile />
                    <div className="flex flex-1 flex-col items-start gap-5">
                      <div className="flex items-start justify-center gap-2 self-stretch border-b border-solid border-white-a700_0c px-1 py-3">
                       
                        <div className="flex-1 self-center">
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col items-start gap-0.5">
                              <Text size="textlg" as="p" className="!font-medium !text-gray-300_01">
                                Sanya@gmail.com
                              </Text>
                              <Text as="p" className="!text-gray-300_01">
                                I&#39;ve tried a lot and .
                              </Text>
                            </div>
                            <div className="mr-1 flex justify-center gap-2 md:mr-0">
                              <Button
                                shape="round"
                                leftIcon={
                                  <Img
                                    src="/public/images/img_contrast_blue_gray_900_1.svg"
                                    alt="Contrast"
                                    className="h-[12px] w-[12px]"
                                  />
                                }
                                className="min-w-[64px] gap-1 !rounded-[10px] font-opensans font-semibold !text-indigo-a200_01"
                              >
                                Closed
                              </Button>
                              <Button
                                shape="round"
                                leftIcon={
                                  <div className="flex h-[12px] w-[10px] items-center justify-center">
                                    <Img
                                      src="/public/images/img_save_gray_400_03.svg"
                                      alt="Save"
                                      className="h-[12px] w-[10px]"
                                    />
                                  </div>
                                }
                                className="min-w-[110px] gap-1 !rounded-[10px] font-opensans font-semibold"
                              >
                                Campaign Name
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Text as="p" className="mt-1.5 !text-gray-50_66">
                          Mar 7
                        </Text>
                      </div>
                      <Img src="/public/images/img_rectangle_45371.png" alt="Image" className="h-px w-[3%] object-contain" />
                    </div>
                    <div className="flex flex-1 items-start justify-center gap-0.5 border-b border-solid border-white-a700_0c px-2 py-3">
                      <div className="flex-1 self-center">
                        <div className="flex flex-col gap-2">
                          <div className="mr-2 flex flex-col items-start justify-center gap-1 md:mr-0">
                            <Text className="text-[14px] font-medium !text-gray-300_01">william@gmail.com</Text>
                            <Text className="text-[12px] font-normal !text-gray-300_01">
                              <span>Payment not going th</span>
                              <span>rough</span>
                            </Text>
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
                                    className="flex h-[20px] min-w-[82px] cursor-pointer flex-row items-center justify-center gap-1 whitespace-pre-wrap rounded-[10px] border border-solid border-green-a200_99 bg-gray-900_04 px-2 text-center font-opensans text-[10px] font-semibold text-green-a200"
                                  >
                                    <Img
                                      src="/public/images/img_contrast_blue_gray_900_05.svg"
                                      alt="Contrast"
                                      className="h-[12px] w-[12px]"
                                    />
                                    <span>{option.label}</span>
                                  </div>
                                ) : (
                                  <div
                                    onClick={option.toggle}
                                    className="flex h-[20px] min-w-[82px] cursor-pointer flex-row items-center justify-center gap-1 rounded-[10px] bg-gray-900_04 px-2 text-center font-opensans text-[10px] font-semibold text-green-a200"
                                  >
                                    <Img
                                      src="/public/images/img_contrast_blue_gray_900_05.svg"
                                      alt="Contrast"
                                      className="h-[12px] w-[12px]"
                                    />
                                    <span>{option.label}</span>
                                  </div>
                                )}
                              </React.Fragment>
                            )}
                          </ChipView>
                        </div>
                      </div>
                      <Text className="mt-1.5 text-[12px] font-normal !text-gray-50_66">Mar 7</Text>
                    </div>
                    <div className="flex flex-1 border-b border-solid border-white-a700_0c px-2 py-3">
                      <div className="flex w-full items-start justify-center">
                        <div className="flex-1 self-center">
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col items-start justify-center gap-1">
                              <Text className="text-[14px] font-medium !text-gray-300_01">johnson@gmail.com</Text>
                              <Text className="text-[12px] font-normal !text-gray-300_01">
                                Could you tell me more about it
                              </Text>
                            </div>
                            <ChipView
                              options={chipOptions1}
                              setOptions={setChipOptions1}
                              values={selectedChipOptions1}
                              setValues={setSelectedChipOptions1}
                              className="flex flex-wrap gap-2"
                            >
                              {(option) => (
                                <React.Fragment key={option.index}>
                                  {option.isSelected ? (
    <div
                                      onClick={option.toggle}
                                      className="flex h-[20px] min-w-[110px] cursor-pointer flex-row items-center justify-center gap-1 whitespace-pre-wrap rounded-[10px] border border-solid border-deep_purple-300_99 bg-gray-900_04 px-2 text-center font-opensans text-[10px] font-semibold text-deep_purple-300"
                                    >
                                      <Img
                                        src="/public/images/img_contrast_blue_gray_900_06.svg"
                                        alt="Contrast"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <span>{option.label}</span>
                                    </div>
                                  ) : (
                                    <div
                                      onClick={option.toggle}
                                      className="flex h-[20px] min-w-[110px] cursor-pointer flex-row items-center justify-center gap-1 rounded-[10px] bg-gray-900_04 px-2 text-center font-opensans text-[10px] font-semibold text-deep_purple-300"
                                    >
                                      <Img
                                        src="/public/images/img_contrast_blue_gray_900_06.svg"
                                        alt="Contrast"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <span>{option.label}</span>
                                    </div>
                                  )}
                                </React.Fragment>
                              )}
                            </ChipView>
                          </div>
                        </div>
                        <Text className="relative ml-[-24px] mt-1.5 text-[12px] font-normal !text-gray-50_66">
                          Mar 7
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 border-l-[3px] border-solid border-indigo-a200 bg-white-a700_05 py-3">
                      <div className="w-full">
                        <div className="flex flex-col gap-2">
                          <div className="mr-2 flex items-start justify-center gap-3 md:mr-0">
                            <div className="flex flex-1 flex-col items-start justify-center gap-1 self-center">
                              <Text className="text-[14px] font-medium !text-gray-300_01">orlando@gmail.com</Text>
                              <Text className="text-[12px] font-normal !text-gray-300_01">Hi, I am interested</Text>
                            </div>
                            <Text className="text-[12px] font-normal !text-gray-50_66">18:30</Text>
                          </div>
                          <div className="flex justify-center gap-2">
                            <Button
                              leftIcon={
                                <Img
                                  src="/public/images/img_contrast_gray_800_04_1.svg"
                                  alt="Contrast"
                                  className="h-[12px] w-[12px]"
                                />
                              }
                              className="h-[20px] min-w-[126px] gap-1 rounded-[10px] bg-gray-900_04 px-2 font-opensans text-[10px] font-semibold text-lime-400"
                            >
                              Meeting Completed
                            </Button>
                            <Button
                              leftIcon={
                                <div className="flex h-[12px] w-[10px] items-center justify-center">
                                  <Img src="/public/images/img_save_gray_400_03.svg" alt="Save" className="h-[12px] w-[10px]" />
                                </div>
                              }
                              className="h-[20px] min-w-[106px] gap-1 rounded-[10px] bg-gray-900_04 px-1.5 font-opensans text-[10px] font-semibold text-white-a700"
                            >
                              Campaign Name
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mb-[356px] ml-2 mr-3.5 mt-[-18px] flex items-start justify-center gap-0.5 border-b border-solid border-white-a700_0c px-2 py-3 md:mx-0">
                  <div className="flex-1 self-center">
                    <div>
                      <div className="mb-7 flex justify-center">
                        <Text size="textlg" as="p" className="mb-5">
                          <span>william</span>
                          <span>@gmail.com</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-50_66">
                    Mar 7
                  </Text>
                </div>
              </div>
              <div className="ml-3 h-[692px] w-[2px] bg-blue_gray-900_02 md:ml-0 md:h-[2px] md:w-[692px] md:px-5" />
              <div className="flex flex-1 flex-col items-start gap-60 md:gap-[180px] md:self-stretch md:px-5 sm:gap-[120px]">
                <div className="flex flex-col items-center self-stretch">
                  <OneboxoneFunctionbar />
                  <Button shape="square" className="mt-1.5 min-w-[50px] font-opensans font-semibold">
                    Today
                  </Button>
                  <div className="ml-5 mr-6 mt-3 flex flex-col items-start justify-center self-stretch rounded border border-solid border-gray-800_03 bg-gray-900_05 shadow-xs md:mx-0">
                    <div className="self-stretch rounded-tl rounded-tr bg-gray-900_05 p-2.5">
                      <div className="flex flex-col items-start gap-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
                          <Heading as="h3" className="!text-gray-50">
                            New Product Launch
                          </Heading>
                          <Text size="textlg" as="p" className="self-end !font-sfpro !text-gray-600_02">
                            20 june 2022 : 9:16AM
                          </Text>
                        </div>
                        <Text size="textlg" as="p" className="!font-sfpro !text-gray-400_03">
                          from : jeanne@icloud.com cc : lennon.j@mail.com
                        </Text>
                        <Text size="textlg" as="p" className="!font-sfpro !text-gray-400_03">
                          to : lennon.j@mail.com
                        </Text>
                      </div>
                    </div>
                    <div className="ml-4 h-px w-[74%] bg-gray-900_05 md:ml-0" />
                    <div className="mb-1 ml-4 mt-3.5 flex w-[68%] bg-gray-900_05 md:ml-0 md:w-full md:px-5">
                      <Text
                        size="textlg"
                        as="p"
                        className="w-full !font-opensans leading-[19px] tracking-[-0.28px] !text-gray-300_01"
                      >
                        <>
                         
Hi &#123;FIRST_NAME&#125;,
                          <br />
                          <br />I would like to introduce you to SaaSgrow, a productized design service specifically
                          tailored for saas startups. Our aim is to help you enhance the user experience and boost the
                          visual appeal of your software products.
                        </>
                      </Text>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    shape="square"
                    leftIcon={
                      <div className="flex h-[16px] w-[16px] items-center justify-center bg-gray-900_03">
                        <Img
                          src="/public/images/img_close_gray_400_03.svg"
                          alt="Close"
                          className="h-[12px] w-[8px] px-1 py-0.5"
                        />
                      </div>
                    }
                    className="mt-4 min-w-[146px] gap-1 font-opensans font-semibold"
                  >
                    View all 4 replies
                  </Button>
                </div>
                <Button
                  size="xl"
                  variant="gradient"
                  color="indigo_400_blue_900_fc"
                  leftIcon={<Img src="/public/images/img_reply.svg" alt="Reply" className="h-[24px] w-[24px]" />}
                  className="ml-10 min-w-[136px] gap-2.5 rounded font-opensans font-semibold md:ml-0"
                >
                  Reply
                </Button>
              </div>
              <div className="w-[20%] md:w-full md:px-5">
                <div className="border-l border-solid border-blue_gray-900_09 bg-black-900 py-3">
                  <Input
                    shape="round"
                    name="functionbar_one"
                    placeholder={`Lead Details`}
                    className="mx-1 font-semibold"
                  />
                  <div className="mx-5 mt-6 flex flex-col gap-[18px] md:mx-0">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p">Name </Text>
                      <Text size="textlg" as="p" className="!text-gray-400_02">
                        Orlando
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p">Contact No</Text>
                      <Text size="textlg" as="p" className="!text-gray-400_02">
                        +54-9062827869
                      </Text>
                    </div>
                    <div className="mr-1 flex flex-wrap justify-between gap-5 md:mr-0">
                      <Text as="p">Email ID</Text>
                      <Text size="textlg" as="p" className="!text-gray-400_02">
                        orlando@gmail.com
                      </Text>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <Text as="p">Linkedin</Text>
                      <Text size="textlg" as="p" className="w-[60%] self-center text-right leading-4 !text-gray-400_02">
                        linkedin.com/in/timvadde/
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p" className="self-end">
                        Company Name
                      </Text>
                      <Text size="textlg" as="p" className="!text-gray-400_02">
                        Reachinbox
                      </Text>
                    </div>
                  </div>
                  <Input
                    shape="round"
                    name="functionbar"
                    placeholder={`Activities`}
                    className="mx-1 mt-[42px] font-semibold"
                  />
                  <div className="ml-2.5 mt-4 flex flex-col gap-4 py-3 md:ml-0">
                    <div className="mx-5 flex md:mx-0">
                      <Heading size="heading2xl" as="h4">
                        Campaign Name
                      </Heading>
                    </div>
                    <div className="mx-5 flex items-center md:mx-0">
                      <Heading size="headingmd" as="h5">
                        <span>3&nbsp;</span>
                        <span className="font-normal">Steps</span>
                      </Heading>
                      <div className="ml-2.5 h-[14px] w-px bg-gray-800_02" />
                      <Heading size="headingmd" as="h6" className="ml-2">
                        <span>5&nbsp;</span>
                        <span className="font-normal">Days in Sequence</span>
                      </Heading>
                    </div>
                    <div className="mb-[38px] ml-5 flex flex-col gap-8 md:ml-0">
                      <EmailStepComponent />
                      <div className="flex flex-1 items-center justify-center gap-4">
                        <Button className="h-[32px] w-[32px] rounded-[16px] border border-solid border-gray-800 bg-gray-900_02 px-1.5">
                          <Img src="/public/images/img_email_gray_400_01.svg" />
                        </Button>
                        <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
                          <Text className="!font-opensans text-[13px] font-semibold">Step 2: Email</Text>
                          <div className="flex items-center self-stretch">
                            <Img src="/public/images/img_drafts.svg" alt="Drafts" className="h-[16px] w-[16px]" />
                            <div className="flex flex-1 flex-wrap gap-1.5 px-2">
                              <Text className="self-end text-[10px] font-normal !text-gray-400_02">Opened</Text>
                              <Text className="self-end text-[10px] font-semibold !text-gray-400_02">5th, Feb</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-center justify-center gap-4">
                        <Button className="h-[32px] w-[32px] rounded-[16px] border border-solid border-gray-800 bg-gray-900_02 px-1.5">
                          <Img src="/public/images/img_email_gray_400_01.svg" />
                        </Button>
                        <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
                          <Text className="!font-opensans text-[13px] font-semibold">Step 3: Email</Text>
                          <div className="flex items-center self-stretch">
                            <Img src="/public/images/img_drafts.svg" alt="Drafts" className="h-[16px] w-[16px]" />
                            <div className="flex flex-1 flex-wrap gap-1.5 px-2">
                              <Text className="self-end text-[10px] font-normal !text-gray-400_02">Opened</Text>
                              <Text className="self-end text-[10px] font-semibold !text-gray-400_02">5th, Feb</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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