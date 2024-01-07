import axios, { AxiosResponse } from 'axios';

import { HTTP_ACCESS_DENIED_ERROR, HTTP_CONNECTION_ERROR_ } from '../../constants/HTTP/HTTPErrors';
import HTTPMethodEnum from '../../enums/HTTP/HTTPMethodEnum';

export default class HTTPCLient {
  private static async process(url: string, method: string, body?: unknown) {
    switch (method) {
      case HTTPMethodEnum.GET:
        return (await axios.get(url)).data;
      case HTTPMethodEnum.POST:
        return (await axios.post(url, body)).data;
      case HTTPMethodEnum.PUT:
        return (await axios.put(url, body)).data;
      case HTTPMethodEnum.PATCH:
        return (await axios.patch(url, body)).data;
      case HTTPMethodEnum.DELETE:
        return (await axios.delete(url)).data;
      default:
        throw new Error('Invalid HTTP method');
    }
  }

  private static async handleError<T>(response: Promise<T>) {
    return response.catch<T>((error) => {
      switch (error.response) {
        case 401:
        case 403:
          throw new Error(HTTP_ACCESS_DENIED_ERROR);
        default:
          throw new Error(HTTP_CONNECTION_ERROR_);
      }
    });
  }

  static async get(url: string) {
    const response = await HTTPCLient.process(url, HTTPMethodEnum.GET);
    HTTPCLient.handleError<AxiosResponse>(response);
    return response;
  }

  static async post(url: string, body: unknown) {
    const response = await HTTPCLient.process(url, HTTPMethodEnum.POST, body);
    HTTPCLient.handleError(response);
    return response;
  }

  static async put(url: string, body: unknown) {
    const response = await HTTPCLient.process(url, HTTPMethodEnum.PUT, body);
    HTTPCLient.handleError(response);
    return response;
  }

  static async patch(url: string, body: unknown) {
    const response = await HTTPCLient.process(url, HTTPMethodEnum.PATCH, body);
    HTTPCLient.handleError(response);
    return response;
  }

  static async delete(url: string) {
    const response = await HTTPCLient.process(url, HTTPMethodEnum.DELETE);
    HTTPCLient.handleError(response);
    return response;
  }
}
