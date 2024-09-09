import { Button, Text, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";
export default function OneboxFive({ isOpen, ...props }) {
  return (
    <ModalProvider
      className="columns_border min-w-[442px]"
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
    >
      <div className="columns_border flex w-full min-w-[442px] flex-col gap-8 rounded-lg bg-gradient3 px-6 py-8 sm:p-5">
        <div className="flex justify-center px-14 md:px-5">
          <div className="flex">
            <Heading size="heading5xl" as="h1" className="self-end">
              Are you sure ?
            </Heading>
          </div>
        </div>
        <div className="flex justify-center px-14 md:px-5">
          <div className="flex">
            <Text size="textmd" as="p" className="mb-[18px] !font-opensans !text-gray-200">
              Your selected email will be deleted.
            </Text>
          </div>
        </div>
        <div className="mr-1.5 flex justify-center gap-[18px] px-11 md:px-5">
          <Button size="2xl" className="min-w-[118px] rounded font-opensans font-semibold">
            Cancel
          </Button>
          <Button
            size="2xl"
            variant="gradient"
            color="red_A200_red_900"
            className="min-w-[152px] rounded font-opensans font-semibold"
          >
            Delete
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}