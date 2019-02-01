import React, { Component } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { RichText } from "prismic-reactjs";
import PrismicPage from "./prismic/PrismicPage";
import "react-image-gallery/styles/css/image-gallery.css";
import { Container, H2, P } from "./style";

const GalleryContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  grid-column: span 12;

  p {
    font-family: "Source Serif Pro";
    line-height: 1.5;
    font-size: 16px;
  }
`;

const GalleryTitle = styled(H2)`
  margin-top: 25px;
  margin-bottom: 10px;
`;

const OpenVideo = styled.div`
  cursor: pointer;
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const PlayButton = styled.div``;

class Work extends Component {
  static pageType = "front_page";

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      videoPlaying: {}
    };
  }

  getGalleryItems() {
    const gallery = this.props.doc.data.gallery;
    return gallery.map(item => {
      const data = {
        original: item.image.url
      };
      if (!!item.video_embed.embed_url) {
        data.embedUrl = item.video_embed.embed_url;
        data.renderItem = this.renderVideo;
      }
      return data;
    });
  }

  getEmbedUrl(embedUrl) {
    const videoId = embedUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  onSlide = currentIndex => {
    this.setState({
      currentIndex
    });
  };

  toggleVideo = key => {
    const { videoPlaying } = this.state;
    const currentVideoPlaying = videoPlaying[key];
    this.setState({
      videoPlaying: {
        ...videoPlaying,
        [key]: !currentVideoPlaying
      }
    });
  };

  renderVideo = item => {
    const { videoPlaying } = this.state;
    const embedUrl = item.embedUrl;
    return (
      <div className="image-gallery-image">
        {videoPlaying[embedUrl] ? (
          <VideoWrapper>
            <iframe
              title="video-embed"
              id="ytplayer"
              type="text/html"
              width="560"
              height="315"
              src={this.getEmbedUrl(embedUrl)}
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
        ) : (
          <OpenVideo onClick={() => this.toggleVideo(embedUrl)}>
            <PlayButton />
            <img src={item.original} />
          </OpenVideo>
        )}
      </div>
    );
  };

  render() {
    const { doc } = this.props;
    const { currentIndex } = this.state;
    return (
      <Container>
        <GalleryContainer>
          <ImageGallery
            items={this.getGalleryItems()}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={this.onSlide}
          />
          <GalleryTitle>{doc.data.gallery[currentIndex].title}</GalleryTitle>
          {RichText.render(doc.data.gallery[currentIndex].body)}
        </GalleryContainer>
      </Container>
    );
  }
}

export default PrismicPage(Work);
