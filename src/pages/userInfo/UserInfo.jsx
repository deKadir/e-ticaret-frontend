import React from "react";
import { Footer, Navbar } from "../../components";
import TabsContainer from "./../../components/userInfoTabs/TabsContainer";

export default function UserInfo() {
  return (
    <div>
      <Navbar />
      <TabsContainer />
      <Footer />
    </div>
  );
}
