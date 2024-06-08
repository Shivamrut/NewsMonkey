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
    )}`;
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
      this.props.category
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
      this.props.category
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
      this.props.country,
      this.props.category
    );
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      loading: false,
    });
  };
  fetchMoreData = async () => {
    console.log(this.state.articles.length + " " + this.state.totalResults);
    console.log(this.props.category+this.props.country)
    let parsedData = await loadApi(
      this.state.page + 1,
      this.state.pageSize,
      this.props.country,
      this.props.category
    );
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
    });
  };

  render() {
    return (
      <>
        {/* To use Infine Scroll instead of pagination */}
        <>
          <div className="container my-3 ">
            <h1 className="text-center">
              NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
              Headlines
            </h1>
          </div>

          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container">
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

        {/* To use Pagination instead of Infinite scroll */}
        <>
          {/*<div className="container my-3 ">
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
          </div> */}
        </>
      </>
    );
  }
}

async function loadApi(page, pageSize, country, category) {
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&category=${category}`;
  let data = await fetch(apiUrl, {
    headers: {
      "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
      // "X-Api-Key": "1c8d75da1fd042c99319f91100e913bb",
    },
  });
  let parsedData = await data.json();
  return parsedData;
}

export default News;
