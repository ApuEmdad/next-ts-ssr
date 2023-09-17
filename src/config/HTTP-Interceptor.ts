import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

// import { getJWTToken } from "src/utils/get-jwt-tokens";
// import { SetErrorMessage } from "src/utils/set-error-message";
/**
 *
 * @instruction
 * If global store is not used for loading,
 * Appstore.dispatch(loadingStarted()) / Appstore.dispatch(loadingFinished()) can be removed
 */
const configAuthorizationHeader = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // if (getJWTToken() === null) return config;

  // config.headers.Authorization = `Bearer ${getJWTToken()}`;

  return config;
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const updatedConfig = configAuthorizationHeader(config);

  return updatedConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
