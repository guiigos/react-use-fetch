import { useState } from "react";
import { useRequestContext } from "../context/RequestContext";

export namespace HookRequest {
	export interface Response<T> {
		loading: boolean;
		error: boolean;
		response?: T;
		call: () => void;
		prev?: () => void;
		next?: () => void;
	}
}

function useRequest<T>(service: (fetch: any, params?: URLSearchParams) => Promise<T>): HookRequest.Response<T> {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [response, setResponse] = useState<{
		content: T;
		paramsPrevious?: URLSearchParams;
		paramsNext?: URLSearchParams;
	}>();

  const { adapter } = useRequestContext();

	function request(callback: (response: T) => void, params?: URLSearchParams): void {
    setLoading(true);
		setError(false);

		service(adapter, params)
			.then(callback)
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}

	function setter(content: T): void {
		setResponse({
			content,
			paramsPrevious: (content as any)?.paramsPrevious,
			paramsNext: (content as any)?.paramsNext,
		});
	}

	function call(clear?: () => void): void {
		clear?.();
		request(setter);
	}

	return {
		response: response?.content,
		loading,
		error,
		call,
		prev: !loading && !!response?.paramsPrevious ? () => request(setter, response.paramsPrevious) : undefined,
		next: !loading && !!response?.paramsNext ? () => request(setter, response.paramsNext) : undefined,
	};
}

export default useRequest;
