import React from "react";

import { Grid, Container } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("async real project");
  }

  handleSubmit = async (SearchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCJaqtua69piWG2m9sUnzcS1SGCbpg-T3E",
        q: SearchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Container maxWidth="lg" fixed>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Search Bar */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={7}>
              {/* Video details */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={5}>
              {/* Video list */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
