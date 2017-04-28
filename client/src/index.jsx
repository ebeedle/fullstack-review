import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',  
      type: 'POST',
      data: term,
      success: function(term) {
        // this.state.repos.push(term);
        // console.log(this.state.repos);
      },
      error: function(error) {
        console.log('an error occurred')
      }
    })

    // console.log(`${term} was searched`);
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));