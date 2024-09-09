import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);
  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  // setCollapsed(!collapsed)
  //}
  return (
    <Sidebar
      {...props}
      width="58px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen top-0 border-gray-800_03 border-solid bg-gray-900_01 !sticky overflow-auto`}
    >
      <div className="self-stretch">
        <Img src="images/defaultNoData.png" alt="Settings" className="h-[70px] w-full object-cover" />
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: "15px",
            },
          }}
          rootStyles={{ ["&>ul"]: { gap: "162px" } }}
          className="relative mt-[-16px] flex flex-col"
        >
          <div className="flex flex-col gap-[0.13px]">
            <MenuItem
              icon={<Img src="images/img_home_gray_400_03.svg" alt="Home" className="h-[28px] w-[28px] rounded" />}
            />
            <MenuItem
              icon={<Img src="images/defaultNoData.png" alt="Search" className="h-[28px] w-[28px] rounded" />}
            />
            <MenuItem icon={<Img src="images/img_email.svg" alt="Email" className="h-[28px] w-[28px] rounded" />} />
            <MenuItem icon={<Img src="images/img_frame_23.svg" alt="Image" className="h-[28px] w-[26px] rounded" />} />
            <MenuItem icon={<Img src="images/img_view_list.svg" alt="Viewlist" className="h-[24px] w-[24px]" />} />
            <MenuItem icon={<Img src="images/defaultNoData.png" alt="Home" className="h-[14px] w-[20px]" />} />
            <MenuItem icon={<Img src="images/img_bar_chart.svg" alt="Barchart" className="h-[28px] w-[28px]" />} />
          </div>
          <div>
            <MenuItem>AS</MenuItem>
          </div>
        </Menu>
      </div>
    </Sidebar>
  );
}