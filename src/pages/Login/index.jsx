import { Helmet } from "react-helmet";
import { Text } from "../../components";
import LoginRowcreateanew from "./LoginRowcreateanew";
import LoginRowlogotwelve from "./LoginRowlogotwelve";
import React from "react";
export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Reachinbox</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="relative h-[726px]">
          <div className="absolute left-0 right-0 top-0 m-auto h-[664px] flex-1 bg-[url(/public/images/img_group_1892.png)] bg-cover bg-no-repeat md:h-auto">
            <LoginRowlogotwelve />
          </div>
          <LoginRowcreateanew />
        </div>
        <footer className="flex items-center justify-center border-t border-solid border-gray-900 bg-gray-900_09 p-1.5">
          <Text as="p" className="self-end !font-opensans !text-gray-700">
            © 2023 Reachinbox. All rights reserved.
          </Text>

        </footer>
      </div>
    </>
  );
}