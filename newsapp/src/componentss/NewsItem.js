import React, { Component } from "react";

export class NewsItem extends Component {
    
    constructor(){
        super();
        console.log("Hello I am a constructor from newsapp");
        this.state = {
            articles:this.articles,
            loading: false
        }
    }
  render() {
     let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2021/12/fandosensexniftyderivative-1-770x433.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">
              {description}...
            </p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              READ MORE..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
