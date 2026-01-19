import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";
import Topratedpage from "./pages/Topratedpage";
import Upcomingpage from "./pages/Upcomingpage";
import "./App.css";

function App() {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },

    {
      path: "/single",
      element: <Singlepage />,
    },
    {
      path: "/Top",
      element: <Topratedpage />,
    },
    {
      path: "/upcom",
      element: <Upcomingpage />,
    },
    {
      path: "/movie/:id",
      element: <Singlepage />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default App;
