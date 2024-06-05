import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, author, description, url, img } = this.props;

    return (
      <>
        <div className="card p-3 m-3" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
            <p className="card-text">{description.slice(0, 80)}...</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
