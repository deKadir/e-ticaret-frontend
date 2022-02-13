import React from "react";
import style from "./tabs.module.scss";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";
import { useParams, Link } from "react-router-dom";
const tabs = [
  {
    title: "Profile",
    path: "/settings/profile",
    component: UserInfo,
  },
  {
    title: "Change Password",
    path: "/settings/change-password",
    component: ChangePassword,
  },
];
export default function TabsContainer() {
  let path = `/settings/${useParams().tab}`;
  const activeTab = tabs.find((tab) => tab.path === path);

  return (
    <div className={style.profileWrapper}>
      <div className={style.profileSidebar}>
        <ul>
          {tabs.map((tab, index) => {
            return (
              <li key={index}>
                <Link to={tab.path} className={style.active}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.profileContent}>
        {activeTab ? <activeTab.component /> : null}
      </div>
    </div>
  );
}
