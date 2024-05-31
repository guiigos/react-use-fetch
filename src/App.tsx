import React from "react";
import RequestWithFetch from "./pages/RequestWithFetch";
import RequestWithAxios from "./pages/RequestWithAxios";
import List from "./pages/List";

const App: React.FC = () => (
  <>
    <RequestWithFetch>
      <List />
    </RequestWithFetch>

    <RequestWithAxios>
      <List />
    </RequestWithAxios>
  </>
);

export default App;
