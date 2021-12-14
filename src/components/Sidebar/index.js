import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarWrap,
} from "./SidebarEl";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <icon onClick={toggle}></icon>
      <SidebarMenu>
        <SidebarLink to="Coffee" onClick={toggle}>Coffee</SidebarLink>
        <SidebarLink to="Donuts" onClick={toggle}>Donuts</SidebarLink>
        <SidebarLink to="Full Menu" onClick={toggle}>Full Menu</SidebarLink>
        <SidebarLink to="Accessories" onClick={toggle}>Accessories</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="OrderNowPage">Order Now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
