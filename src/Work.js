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

class Work extends Component {
  static pageType = "front_page";

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  getGalleryItems() {
    const gallery = this.props.doc.data.gallery;
    return gallery.map(item => ({
      original: item.image.url,
      embedUrl: item.video_embed.embed_url
    }));
  }

  onSlide = currentIndex => {
    this.setState({
      currentIndex
    });
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
