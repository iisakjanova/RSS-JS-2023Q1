import { Status } from '../../constants';

type OptionsType = {
  [key: string]: string;
};

export type LoadResponse<Type> = {
  [key: string]: Type[];
};

export type LoadCallback<Type> = (data?: LoadResponse<Type>) => void;

type LoaderOptions = {
  method: string;
  endpoint: string;
  callback?: () => void;
  options?: OptionsType;
};

interface ILoader {
  getResp({ endpoint, options }: LoaderOptions, callback?: () => void): void;
}

class Loader implements ILoader {
  baseLink: string;

  options: OptionsType;

  constructor(baseLink: string, options: OptionsType) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: { endpoint: string; options?: OptionsType },
    callback = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === Status.Unauthorized || res.status === Status.NotFound)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`,
        );
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: OptionsType, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<Type>(
    method: string,
    endpoint: string,
    callback: LoadCallback<Type>,
    options: OptionsType = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: LoadResponse<Type>) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
