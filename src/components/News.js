import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 10,
      maxPages: 1,
      
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let parsedData = await loadApi(
      this.state.page,
      this.state.pageSize,
      this.props.country
    );
    this.setState({
      articles: parsedData.articles,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      loading: false,
    });
  }

  handleNext = async () => {
    this.setState({
      loading: true,
    });

    let parsedData = await loadApi(
      this.state.page + 1,
      this.state.pageSize,
      this.props.country
    );
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      loading: false,
    });
  };
  handlePrev = async () => {
    this.setState({
      loading: true,
    });

    let parsedData = await loadApi(
      this.state.page - 1,
      this.state.pageSize,
      this.props.country
    );
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      loading: false,
    });
  };

  

  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1 className="text-center">NewsMonkey - Top Headlines</h1>

          {!this.state.loading && (
            <div className="container d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      type="button"
                      className="btn btn-secondary  m-3"
                      disabled={this.state.page <= 1}
                      onClick={this.handlePrev}
                    >
                      &larr; Previous
                    </button>
                  </li>
                  {/* <li className="page-item">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li> */}
                  <li className="page-item">
                    <button
                      type="button"
                      className="btn btn-secondary  m-3"
                      disabled={this.state.page >= this.state.maxPages}
                      onClick={this.handleNext}
                    >
                      Next &rarr;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((e) => {
                let { title, author, description, url, urlToImage } = e;
                return (
                  <div className="col-md-4" key={url}>
                    <NewsItem
                      title={title}
                      author={author}
                      description={description}
                      url={url}
                      img={urlToImage}
                    />
                  </div>
                );
              })}

            {/* {Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  key={index}
                  title={newsCol.articles[index].title}
                  author={newsCol.articles[index].author}
                  description={newsCol.articles[index].description}
                  url={newsCol.articles[index].url}
                  img={newsCol.articles[index].urlToImage}
                />
              </div>
            ))} */}
          </div>
          {!this.state.loading && (
            <div className="container d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      type="button"
                      className="btn btn-secondary  m-3"
                      disabled={this.state.page <= 1}
                      onClick={this.handlePrev}
                    >
                      &larr; Previous
                    </button>
                  </li>
                  {/* <li className="page-item">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li> */}
                  <li className="page-item">
                    <button
                      type="button"
                      className="btn btn-secondary  m-3"
                      disabled={this.state.page >= this.state.maxPages}
                      onClick={this.handleNext}
                    >
                      Next &rarr;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </>
    );
  }
}

async function loadApi(page, pageSize, country) {
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}`;
  let data = await fetch(apiUrl, {
    headers: {
      "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
    },
  });
  let parsedData = await data.json();
  return parsedData;
}

export default News;
