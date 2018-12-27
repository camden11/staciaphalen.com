import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrismicPage from "./prismic/PrismicPage";
import { H1, Container } from "./style";

const SiteTitleSection = styled.div`
  grid-column: span 6;
`;

const NavLinkSection = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: row-reverse;
`;

const NavLinkWrapper = styled.div`
  padding-left: 20px;
  padding-top: 5px;

  a {
    text-decoration: ${props => (props.active ? "line-through" : "none")};
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:visited {
    color: #000;
  }
`;

const NavLink = styled(Link)`
  font-family: "Source Sans Pro", sans-serif;
  text-decoration: none;
  color: #000;

  &:visited {
    color: #000;
  }

  &:hover {
    text-decoration: line-through;
  }
`;

class Nav extends Component {
  static pageType = "nav_bar";
  render() {
    const { location, doc } = this.props;
    return (
      <Container>
        <SiteTitleSection>
          <H1>
            <TitleLink to="/">{doc.data.site_title}</TitleLink>
          </H1>
        </SiteTitleSection>
        <NavLinkSection>
          <NavLinkWrapper active={location.pathname === "/about"}>
            <NavLink to="/about">{doc.data.about_page_title}</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper active={location.pathname === "/"}>
            <NavLink to="/">{doc.data.front_page_title}</NavLink>
          </NavLinkWrapper>
        </NavLinkSection>
      </Container>
    );
  }
}

export default PrismicPage(Nav);
