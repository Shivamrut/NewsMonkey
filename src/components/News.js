import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

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

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [maxPages, setMaxPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData();
    document.title = `NewsMonkey - ${capitalizeFirstLetter(
      props.category
    )}, ${capitalizeFirstLetter(props.country)}`;
  }, []);

  const fetchData = async () => {
    setLoading(true);

    const parsedData = await loadApi(
      page,
      pageSize,
      props.country,
      props.category,
      props.setProgress
    );
    setArticles(parsedData.articles);
    setMaxPages(Math.ceil(parsedData.totalResults / pageSize));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleNext = async () => {
    setLoading(true);

    let parsedData = await loadApi(
      page + 1,
      pageSize,
      props.country,
      props.category,
      props.setProgress
    );
    setPage(page + 1);
    setArticles(parsedData.articles);
    setLoading(false);
  };
  const handlePrev = async () => {
    setLoading(true);

    let parsedData = await loadApi(
      page - 1,
      pageSize,
      props.country,
      props.category,
      props.setProgress
    );
    setPage(page - 1);
    setArticles(parsedData.articles);
    setLoading(false);
  };
  const fetchMoreData = async () => {
    let parsedData = await loadApi(
      page + 1,
      pageSize,
      props.country,
      props.category,
      props.setProgress
    );
    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
  };

  const goToPage = async (pageIndex)=>{
    setLoading(true);

    let parsedData = await loadApi(
      pageIndex,
      pageSize,
      props.country,
      props.category,
      props.setProgress
    );
    setPage(pageIndex);
    setArticles(parsedData.articles);
    setLoading(false);
  }

  return (
    <>
      <div
        className="container  "
        style={{ marginTop: "5rem", marginBottom: "1rem" }}
      >
        <h1 className="text-center">
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
      </div>
      {loading && <Spinner />}
      {!props.pageOrScroll ? (
        <>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
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
                {articles.map((e) => {
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
            {!loading && (
              <div className="container d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        type="button"
                        className="btn btn-secondary  m-3"
                        disabled={page <= 1}
                        onClick={handlePrev}
                      >
                        &larr; 
                      </button>
                    </li>
                    {Array.from({ length: maxPages }, (_, index) => {
                      return (
                        <>
                          <li key={`top${index}`} className="page-item">
                            <button
                              type="button"
                              className={`btn btn-light my-3 mx-1 ${
                                page === index + 1 ? "active" : ""
                              }`}
                              onClick={() => goToPage(index+1)}
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
                        disabled={page >= maxPages}
                        onClick={handleNext}
                      >
                        &rarr;
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}

            <div className="row">
              {!loading &&
                articles.map((e) => {
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

            {!loading && (
              <div className="container d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        type="button"
                        className="btn btn-secondary  m-3"
                        disabled={page <= 1}
                        onClick={handlePrev}
                      >
                        &larr; 
                      </button>
                    </li>
                    {Array.from({ length: maxPages }, (_, index) => {
                      return (
                        <>
                          <li key={`bottom${index}`} className="page-item">
                            <button
                              type="button"
                              className={`btn btn-light my-3 mx-1 ${
                                page === index + 1 ? "active" : ""
                              }`}
                              onClick={() => goToPage(index+1)}
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
                        disabled={page >= maxPages}
                        onClick={handleNext}
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

export default News;
