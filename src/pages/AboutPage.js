import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Afashion season can be defined as much by the people on the catwalk
            as it can by the clothes they are wearing. This time around, a key
            moment came at the end of Marc Jacobs’ New York show, when an almost
            makeup-free Christy Turlington made a rare return to the catwalk,
            aged 50 (she also stars, with the designer himself, in the label’s
            AW ad campaign), where the average catwalk model is around 18. A few
            days later, Simone Rocha arguably upped the ante. The 32-year-old’s
            show – in part inspired by Louise Bourgeois, who lived until she was
            98 – featured models in their 30s and 40s, including cult favourite
            Jeny Howorth and actor Chloë Sevigny.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
