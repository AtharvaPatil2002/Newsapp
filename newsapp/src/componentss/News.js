import React, { Component } from 'react';
import NewsItem from './NewsItem';
export class News extends Component {
  constructor() {
    super();
    console.log('Hello I am a constructor from newsapp');
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=510100a7c4e64cdfb3a085178a938442&page=1';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  };

  handlePrevClick = async () => {
    console.log('Previous');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=510100a7c4e64cdfb3a085178a938442&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNextClick = async () => {
    console.log('Next');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=510100a7c4e64cdfb3a085178a938442&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title /*?element.title.slice(0,45):""*/}
                  description={
                    element.description /*?element.description.slice(0,88):""*/
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
          {/* <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
    </div>*/}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-dark'
            mx-3='true'
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type='button'
            className='btn btn-dark'
            mx-3='true'
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
