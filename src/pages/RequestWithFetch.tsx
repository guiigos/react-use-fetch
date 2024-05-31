import React from "react";
import FetchAdapter from "../modules/adapters/FetchAdapter";
import { RequestContextProvider } from "../context/RequestContext";

const RequestWithFetch: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RequestContextProvider adapter={new FetchAdapter()}>
    <p>Request with <strong>fetch</strong></p>
    { children }
  </RequestContextProvider>
);

export default RequestWithFetch;
