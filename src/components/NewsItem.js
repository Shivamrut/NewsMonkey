import React, { Component } from "react";

// class NewsItem extends Component {
//   render() {
//     let { title, author, description, url, img, date, publisher } = this.props;
//     let defImg =
//       "https://w7.pngwing.com/pngs/422/126/png-transparent-newspaper-computer-icons-symbol-news-icon-text-logo-news.png";

//     return (
//       <>
//         <div className="card p-3 m-3">
//           <img src={img ? img : defImg} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <span
//               className="position-absolute top-0 start-50 translate-middle badge  bg-success"
//               style={{ zIndex: 1 }}
//             >
//               {publisher}
//             </span>

//             <h5 className="card-title">{title ? title.slice(0, 40) : ""}...</h5>
//             <h6 className="card-subtitle mb-2 text-body-secondary">
//               {author ? author : "Unknown"}
//             </h6>
//             <p className="card-text">
//               {description ? description.slice(0, 80) : ""}...
//             </p>
//             <p className="card-text">
//               <small className="text-muted">
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               href={url}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-primary"
//             >
//               Read more
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

function NewsItem(props) {
  let { title, author, description, url, img, date, publisher } = props;
  let defImg =
    "https://w7.pngwing.com/pngs/422/126/png-transparent-newspaper-computer-icons-symbol-news-icon-text-logo-news.png";
  return (
    <>
      <div className="card p-3 m-3">
        <img src={img ? img : defImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <span
            className="position-absolute top-0 start-50 translate-middle badge  bg-success"
            style={{ zIndex: 1 }}
          >
            {publisher}
          </span>

          <h5 className="card-title">{title ? title.slice(0, 40) : ""}...</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {author ? author : "Unknown"}
          </h6>
          <p className="card-text">
            {description ? description.slice(0, 80) : ""}...
          </p>
          <p className="card-text">
            <small className="text-muted">{new Date(date).toGMTString()}</small>
          </p>
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

export default NewsItem;
