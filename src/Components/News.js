import React, { Component } from "react";
import NewsList from "./NewsList";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      lod: false,
      articles: []
    };
  }
  async componentDidMount() {
    let a = this.props.keyi;
    let b = this.props.country;
    console.log(a, b);
    this.setState({ lod: true });
    var url =
      "https://gnews.io/api/v4/top-headlines?&lang=en&country=" +
      b +
      "&topic=" +
      a +
      "&token=f08d13e0fe10bfc2d088241d57529a3c";
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, lod: false });
    console.log(parsedData);
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: "77px" }}>
          NewsApi-{this.props.keyi[0].toUpperCase()}
          {this.props.keyi.slice(1)}
        </h1>
        <div className="text-center">{this.state.lod && <Spinner />}</div>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsList
                  title={element.title}
                  description={element.description}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
