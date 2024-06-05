import React, { Component } from "react";
import NewsItem from "./NewsItem";
import newsCol from "../sampleOutput.json";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: newsCol.articles,
      loading: false,
    };
  }

  // newColl = fetch('https://newsapi.org/v2/everything?q="zerodha"&from=2024-05-05&sortBy=publishedAt',{
  //     headers:{
  //         "X-Api-Key":"527b2700670e493d91b09cc687055fe6"
  //     }
  // })
  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1>NewsMonkey - Top Headlines</h1>

          <div className="row">
            {this.state.articles.map((e) => {
              let { title, author, description, url, urlToImage } = e;
              // console.log(author)
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
