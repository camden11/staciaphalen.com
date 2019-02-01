import React, { Component } from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import PrismicPage from "./prismic/PrismicPage";
import { Container, H2, A, MediaQueries } from "./style";

const AboutContent = styled(Container)`
  padding: 70px 0;
  grid-column-gap: 30px;
`;

const TextColumn = styled.div`
  grid-column: span 6;

  p {
    font-family: "Source Serif Pro";
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 16px;
  }

  ${MediaQueries.small} {
    grid-column: span 12;
  }
`;

const AboutTitle = styled(H2)`
  margin-bottom: 40px;

  ${MediaQueries.small} {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

const ResumeLink = styled(A)`
  margin-top: 20px;
  display: block;
`;

const ImageColumn = styled.div`
  grid-column: span 6;

  ${MediaQueries.small} {
    grid-row: 1;
    grid-column: span 12;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
`;

class About extends Component {
  static pageType = "about_page";
  render() {
    const { doc } = this.props;
    console.log(doc.data.resume_link.href);
    return (
      <AboutContent>
        <TextColumn>
          <AboutTitle>{doc.data.title}</AboutTitle>
          {RichText.render(doc.data.body)}
          <ResumeLink href={doc.data.resume_link.url} target="_blank">
            {doc.data.resume_link_text}
          </ResumeLink>
        </TextColumn>
        <ImageColumn>
          <AboutImage src={doc.data.image.url} />
        </ImageColumn>
      </AboutContent>
    );
  }
}

export default PrismicPage(About);
