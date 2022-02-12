import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import routes from "./../constants/routes/Index";
import ScrollToTop from "../helpers/ScrollToTop";
export default function Wrapper() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100%" }}>
      <Routes>
        {routes.map((route, index) => {
          return (
            <>
              <Route
                key={index}
                path={route.path}
                element={
                  <>
                    <ScrollToTop />
                    <route.component />
                  </>
                }
              />
            </>
          );
        })}
      </Routes>
    </div>
  );
}
