import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '687b7cc7cd9f4b7e971beaafed31cb9e', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
