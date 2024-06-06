import React, { Component } from "react";
import NewsItem from "./NewsItem";
import newsCol from "../sampleOutput.json";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 10,
      maxPages : 1
    };
  }

  async componentDidMount() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
      },
    });
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      maxPages: Math.ceil( parsedData.totalResults/this.state.pageSize)
    });
  }

  handleNext = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&page=${
      this.state.page + 1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
      },
    });
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      maxPages: Math.ceil( parsedData.totalResults/this.state.pageSize)
    });
  };
  handlePrev = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": "527b2700670e493d91b09cc687055fe6",
      },
    });
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      maxPages: Math.ceil( parsedData.totalResults/this.state.pageSize)
    });
  };

  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1>NewsMonkey - Top Headlines</h1>

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

          <div className="row">
            {this.state.articles.map((e) => {
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
        </div>
      </>
    );
  }
}

export default News;
