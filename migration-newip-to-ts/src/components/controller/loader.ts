import { Status } from '../../constants';

type OptionsType = {
  [key: string]: string;
};

type LoadResponse = {
  [key: string]: string;
};

type LoadCallback = (data?: LoadResponse) => void;

class Loader {
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

  private load(
    method: string,
    endpoint: string,
    callback: LoadCallback,
    options: OptionsType = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: LoadResponse) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
