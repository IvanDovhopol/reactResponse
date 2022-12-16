import React, { Component } from 'react';
import { Articlelist } from 'Components/ArticleList';
import axios from 'axios';

export class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const { data } = await axios.get('/search?query=react');
    this.setState({ articles: data.hits });
  }

  render() {
    const { articles } = this.state;

    return <>{articles.length > 0 ? <Articlelist items={articles} /> : null}</>;
  }
}
