import React from "react";
import AxiosAdapter from "../modules/adapters/AxiosAdapter";
import { RequestContextProvider } from "../context/RequestContext";

const RequestWithAxios: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RequestContextProvider adapter={new AxiosAdapter()}>
    <p>Request with <strong>axios</strong></p>
    { children }
  </RequestContextProvider>
);

export default RequestWithAxios;
