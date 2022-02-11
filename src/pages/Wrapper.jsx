import React from "react";

import UserInfo from "./../pages/userInfo/UserInfo";
import { Routes, Route } from "react-router-dom";
import routes from "./../constants/routes/Index";

export default function Wrapper() {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.path} element={<route.component />} />;
        })}
      </Routes>
    </div>
  );
}
