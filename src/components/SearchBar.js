import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { SearchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(SearchTerm);
    event.preventDefault();
    this.setState({
      searchTerm: "",
    });
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: 25 }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
