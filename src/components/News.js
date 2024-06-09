import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 9,
      maxPages: 1,
      totalResults: 0,
    };

    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
      props.category
    )}, ${this.capitalizeFirstLetter(props.country)}`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let parsedData = await loadApi(
      this.state.page,
      this.state.pageSize,
      this.props.country,
      this.props.category,
      this.props.setProgress
    );
    this.setState({
      articles: parsedData.articles,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  handleNext = async () => {
    this.setState({
      loading: true,
    });

    let parsedData = await loadApi(
      this.state.page + 1,
      this.state.pageSize,
      this.props.country,
      this.props.category,
      this.props.setProgress
    );
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
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
      this.props.country,
      this.props.category,
      this.props.setProgress
    );
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  fetchMoreData = async () => {
    let parsedData = await loadApi(
      this.state.page + 1,
      this.state.pageSize,
      this.props.country,
      this.props.category,
      this.props.setProgress
    );
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
    });
  };

  goToPage = async (pageIndex) => {
    this.setState({
      loading: true,
    });

    let parsedData = await loadApi(
      pageIndex,
      this.state.pageSize,
      this.props.country,
      this.props.category,
      this.props.setProgress
    );
    this.setState({
      page: pageIndex,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div
          className="container "
          style={{ marginTop: "5rem", marginBottom: "1rem" }}
        >
          <h1 className="text-center">
            NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
        </div>
        {this.state.loading && <Spinner />}
        {!this.props.pageOrScroll ? (
          <>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
              endMessage={
                <p className="text-secondary" style={{ textAlign: "center" }}>
                  <br />
                  <b>End of Content</b>
                  <br />
                </p>
              }
            >
              <div className="container my-3">
                <div className="row">
                  {this.state.articles.map((e) => {
                    let {
                      title,
                      author,
                      description,
                      url,
                      urlToImage,
                      publishedAt,
                      source,
                    } = e;
                    return (
                      <div className="col-md-4" key={url}>
                        <NewsItem
                          title={title}
                          author={author}
                          description={description}
                          url={url}
                          img={urlToImage}
                          date={publishedAt}
                          publisher={source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </>
        ) : (
          <>
            <div className="container my-3 ">
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
                          &larr; 
                        </button>
                      </li>
                      {Array.from({ length: this.state.maxPages }, (_, index) => {
                      return (
                        <>
                          <li key={`top${index}`} className="page-item">
                            <button
                              type="button"
                              className={`btn btn-light my-3 mx-1 ${
                                this.state.page === index + 1 ? "active" : ""
                              }`}
                              onClick={() => this.goToPage(index+1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        </>
                      );
                    })}
                      <li className="page-item">
                        <button
                          type="button"
                          className="btn btn-secondary  m-3"
                          disabled={this.state.page >= this.state.maxPages}
                          onClick={this.handleNext}
                        >
                          &rarr;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}

              <div className="row">
                {this.state.articles.map((e) => {
                  let {
                    title,
                    author,
                    description,
                    url,
                    urlToImage,
                    publishedAt,
                    source,
                  } = e;
                  return (
                    <div className="col-md-4" key={url}>
                      <NewsItem
                        title={title}
                        author={author}
                        description={description}
                        url={url}
                        img={urlToImage}
                        date={publishedAt}
                        publisher={source.name}
                      />
                    </div>
                  );
                })}
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
                          &larr;
                        </button>
                      </li>
                      {Array.from({ length: this.state.maxPages }, (_, index) => {
                      return (
                        <>
                          <li key={`bottom${index}`} className="page-item">
                            <button
                              type="button"
                              className={`btn btn-light my-3 mx-1 ${
                                this.state.page === index + 1 ? "active" : ""
                              }`}
                              onClick={() => this.goToPage(index+1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        </>
                      );
                    })}
                      <li className="page-item">
                        <button
                          type="button"
                          className="btn btn-secondary  m-3"
                          disabled={this.state.page >= this.state.maxPages}
                          onClick={this.handleNext}
                        >
                          &rarr;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

async function loadApi(page, pageSize, country, category, setProgress) {
  setProgress(30);
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&category=${category}`;
  let data = await fetch(apiUrl, {
    headers: {
      // "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
      // "X-Api-Key": "1c8d75da1fd042c99319f91100e913bb",
      // "X-Api-Key": "f7a16cc2577343daa44ae74a433277e5",
      // "X-Api-Key": "591ce9e527984fd288968a75d54af50a",
      "X-Api-Key": "66eea4c1e6db4b5bb60dd668d9f46ca5",
    },
  });
  let parsedData = await data.json();
  setProgress(100);
  return parsedData;
}

export default News;
