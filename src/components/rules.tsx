//This is the component that has the rules on the home page "/"
"use client"
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card1" />
        <div className="card2" />
        <div className="card3">
          * This is a drinking game
          <br />
          * You must have friends to play
          <br />
          * Get some drinks, Spin the wheel, and enjoy!
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: block;
    width: 360px;
  }

  .container > * {
    width: 340px;
    height: 120px;
    border: solid 1px var(--foreground);
    background-color: var(--background);
    position: absolute;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    box-shadow: 0px 8px 20px -10px #bbbbbb;
    text-shadow: 0px 0px 5px var(--foreground);
    letter-spacing: 1px;
  }

  .card1 {
    width: 300px;
    margin: -20px 0px 0px 20px;
  }
  .card2 {
    width: 320px;
    margin: -10px 0px 0px 10px;
  }`;

export default Card;
