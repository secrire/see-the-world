import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MapQuiz from "./MapQuiz";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MapQuiz />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
