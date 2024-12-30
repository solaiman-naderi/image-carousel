import useSWR, { SWRConfiguration } from "swr";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetcher = async (url: string, config?: AxiosRequestConfig) => {
  const response = await axios.get(BASE_URL + url, config);
  return response.data;
};

interface UseFetchOptions extends SWRConfiguration {
  axiosConfig?: AxiosRequestConfig;
}

const useFetch = <T>(url: string, options?: UseFetchOptions) => {
  const { axiosConfig, ...swrOptions } = options || {};

  const { data, error, isLoading, mutate } = useSWR<T>(
    url,
    (url) => fetcher(url, axiosConfig),
    swrOptions
  );

  return { data, error, isLoading, mutate };
};

export default useFetch;
