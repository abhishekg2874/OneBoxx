import { Text, Button, Img, Heading } from "../../components";
import React from "react";
export default function LoginRowcreateanew() {
  return (
    <div className="absolute bottom-0 left-0 right-0 m-auto flex flex-1 justify-center px-14 py-[174px] md:p-5">
      <div className="flex w-[34%] flex-col items-center gap-12 rounded-[16px] border border-solid border-gray-800_03 bg-gradient2 p-6 md:w-full sm:p-5">
        <div className="flex w-[92%] flex-col items-center justify-center gap-6 md:w-full">
          <Heading size="heading4xl" as="h1">
            Create a new account
          </Heading>
          <Button
            size="2xl"
            variant="outline"
            color="undefined_undefined"
            leftIcon={<Img src="/public/images/img_frame.svg" alt="Frame" className="h-[32px] w-[22px]" />}
            className="gap-3 self-stretch rounded font-opensans tracking-[-0.30px]"
          >
            Sign Up with Google
          </Button>
        </div>
        <div className="mb-4 flex w-[92%] flex-col gap-6 md:w-full">
          <Button
            size="2xl"
            variant="gradient"
            color="indigo_400_blue_900_fc"
            className="mx-[92px] self-stretch rounded font-opensans font-semibold md:mx-0"
          >
            Create an Account
          </Button>
          <div className="px-14 md:px-5">
            <div className="flex flex-wrap justify-center gap-1">
              <a href="#" className="self-end">
                <Text size="text2xl" as="p" className="!font-opensans !text-gray-500">
                  Already have an account?
                </Text>
              </a>
              <a href="#" className="self-end">
                <Text size="text2xl" as="p" className="!font-opensans !text-gray-400_04">
                  Sign In
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}