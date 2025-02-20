//this is the card that has the question on it
"use client";
import React from 'react';
import styled from 'styled-components';

const Card = ({category , question}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>{category}</p>
          </div>
          <div className="card-back">
            <p>{question}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }
  .card:hover .card-inner {
    transform: rotateY(180deg);
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card-front {
    background-color: var(--foreground);
    color: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }
  .card-back {
    background-color: var(--foreground);
    color: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }`;
export default Card;
