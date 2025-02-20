//This is the Back button to return to the Wheel

"use client";
import React from 'react';
import styled from 'styled-components';

export default function Button () {
  function HomePage() {
    return window.location.href = "/Wheel"
  }
  return (
    <StyledWrapper>
      <button className="cta" onClick={HomePage}>
        <span>Back</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: var(--foreground);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: white;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
    transform: translate(40px,-20px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 120%;
    background: var(--foreground);
  }

  .cta:hover svg {
    transform: translate(45px,-20px);
  }

  .cta:active {
    transform: scale(0.95);
  }`;
