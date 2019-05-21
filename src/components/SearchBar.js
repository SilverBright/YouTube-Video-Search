import React from 'react';

// SearchBar Class handles:
// the STATE for SearchTerm
// a controlled form submission for the searchbar input

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { searchTerm: ''};
  }

  // assign an arrow function because this is a callback we can pass to a child element
onInputChange = (e) => {
  this.setState({ searchTerm: e.target.value });
};

onFormSubmit = (e) => {
  e.preventDefault();
  // Make sure we call the callback trom the parent component
  this.props.onFormSubmit(this.state.searchTerm);
};

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.searchTerm} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;