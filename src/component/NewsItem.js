import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, Author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className=" badge  bg-danger" >{source}</span>
        </div>

        <img src={!imageUrl ? "https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Fattachments%2F1683382272785_Mumbai-Indians.jpeg&w=992&q=75" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {Author ? Author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read more</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
