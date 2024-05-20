import axios from "axios";
import { ENV } from "src/lib/configs/enviorement";
import { type AxiosError, type AxiosResponse } from "axios";

// const defaultHeaders = {
//   key: "Accept",
//   value: "text/plain",
// };

// const createRequestInstance = () => {
//   const instance = axios.create({
//     baseURL: ENV.apiBaseUrl,
//     headers: defaultHeaders,
//   });

//   const onResponseSuccess = (response: AxiosResponse) => {
//     return response;
//   };
//   const onResponseError = async (error: AxiosError) => {
//     const originalRequest = error.config;

//     if (error.response?.status !== 401) {
//       throw error;
//     }
//   }

//   return instance;
// };

// export const request = createRequestInstance();

const defaultHeaders = {
  key: "Accept",
  value: "text/plain",
};

const createRequestInstance = () => {
  const instance = axios.create({
    baseURL: ENV.apiBaseUrl,
    headers: defaultHeaders,
  });

  const onResponseSuccess = (response: AxiosResponse) => {
    return response;
  };
  const onResponseError = async (error: AxiosError) => {
    const { response } = error;

    if (response) {
      console.error("Ошибка при выполнении запроса:", response.data);
    } else {
      console.error("Сетевая ошибка. Проверьте подключение к интернету.");
    }

    return Promise.reject(error);
  };

  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export const request = createRequestInstance();
