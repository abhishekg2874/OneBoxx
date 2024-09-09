import { Img } from "./..";
import React from "react";
import Select from 'react-select';
import { MenuItem, Menu, Sidebar, sidebarClasses} from "react-pro-sidebar";
export default function Sidebar1({ ...props }) {
const [collapsed, setCollapsed] = React.useState(false);
// use this function to collapse/expand the sidebar
// function collapseSidebar() {
// setCollapsed(!collapsed)
// }
return (
<Sidebar
{...props}
width="58px !important"
collapsedWidth="80px !important"
collapsed={collapsed}
className={`${props.className} flex flex-col self-center h-screen top-0 border-gray-800_03 border-solid bg-gray-900_01 !sticky overflow-auto`}
>
<div className="flex flex-col items-center gap-[30px] self-stretch">
<div className="flex flex-col items-center self-stretch">
<Img src="images/defaultNoData.png" alt="Settings" className="h-[70px] w-full object-cover" />
<Img
src="images/img_home_gray_400_03.svg"
alt="Home"
className="relative mx-2.5 mt-[-16px] h-[28px] w-[28px] rounded"
/>
</div>
<Img src="images/defaultNoData.png" alt="Search" className="mx-2.5 h-[28px] w-[28px] rounded" />
<Img src="images/img_email.svg" alt="Email" className="mx-2.5 h-[28px] w-[28px] rounded" />
<Img src="images/img_frame_23.svg" alt="Image" className="mx-2.5 h-[28px] rounded" />
<div className="mx-2.5 flex flex-col items-center justify-center self-stretch rounded">
<Img src="images/img_view_list.svg" alt="Viewlist" className="h-[24px] w-[24px]" />
</div>
<Menu
menuItemStyles={{
button: {
padding: "6px",
color: "#ffffff",
[`&:hover, &.ps-active`]: { fontWeight: "700 !important", backgroundColor: "#2f3338 !important" },
},
}}
rootStyles={{ ["&>ul"]: { gap: "256px" } }}
className="flex w-full flex-col self-stretch"
>
<div>
<MenuItem icon={<Img src="images/defaultNoData.png" alt="Home" className="h-[14px] w-[20px]" />}>
12+
</MenuItem>
</div>
<div className="mb-4">
<MenuItem>AS</MenuItem>
</div>
</Menu>
</div>
</Sidebar>
);
}