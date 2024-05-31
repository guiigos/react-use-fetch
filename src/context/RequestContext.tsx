import React, { useContext } from "react";
import IFetchGateway from "../modules/gateways/IFetchGateway";

export namespace ContextRequest {
  export type WithAdapter<T> = {
    adapter?: T;
  };
}

const RequestContext = React.createContext<ContextRequest.WithAdapter<IFetchGateway>>({});
export default RequestContext;

export const useRequestContext = () => useContext(RequestContext);

export const RequestContextProvider: React.FC<React.PropsWithChildren & ContextRequest.WithAdapter<IFetchGateway>>  = ({ children, adapter }) => {
	return (
		<RequestContext.Provider value={{ adapter }}>
			{children}
		</RequestContext.Provider>
	);
};
