import NewsRepository from "../repository/newsRepository";

class NewsService {
  get() {
    return NewsRepository.find({ active: true });
  }

  getById(_id: String) {
    return NewsRepository.findById(_id);
  }

  create(news) {
    return NewsRepository.create(news);
  }

  update(_id: String, news) {
    return NewsRepository.findByIdAndUpdate(_id, news);
  }

  delete(_id: String) {
    return NewsRepository.findByIdAndRemove(_id);
  }
}

export default new NewsService();
