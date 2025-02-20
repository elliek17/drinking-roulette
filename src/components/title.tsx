//this is the title animation on the home page "/"

"use client"
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className='button'>
        <div className="first">
          <div className="box">D</div>
          <div className="box">R</div>
          <div className="box">I</div>
          <div className="box">N</div>
          <div className="box">K</div>
          <div className="box">I</div>
          <div className="box">N</div>
          <div className="box">G</div>
        </div>
        <div className="second">
          <div className="box">R</div>
          <div className="box">O</div>
          <div className="box">U</div>
          <div className="box">L</div>
          <div className="box">E</div>
          <div className="box">T</div>
          <div className="box">T</div>
          <div className="box">E</div>
        </div>
      </div>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    margin-top:0;
  }
    
  .first {
    display: flex;
  }

  .first .box {
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: var(--foreground);
    overflow: hidden;
  }

  .first .box:nth-child(2){
  background: var(--background);
  }

.first .box:nth-child(4){
  background: var(--background);
  }

  .first .box:nth-child(6){
  background: var(--background);
  }

  .first .box:nth-child(8){
  background: var(--background);
  }

  .first .box:before {
    content: "R";
    position: absolute;
    top: 0;
    background: var(--background);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
  }

  .first .box:nth-child(2)::before {
    background: var(--foreground);
    transform: translateY(-100%);
    content: 'O';
  }

  .first .box:nth-child(3)::before {
    background: var(--background);
    content: 'U';
  }

  .first .box:nth-child(4)::before {
    background: var(--foreground);
    transform: translateY(-100%);
    content: 'L';
  }

  .first .box:nth-child(5)::before {
  background: var(--background);
    content: 'E';
  }

    .first .box:nth-child(6)::before {
    background: var(--foreground);
    transform: translateY(-100%);
    content: 'T';
  }

    .first .box:nth-child(7)::before {
    background: var(--background);
    content: 'T';
  }

    .first .box:nth-child(8)::before {
        background: var(--foreground);
    transform: translateY(-100%);
    content: 'E';
  }
  .second {
    display: flex;
  }

  .second .box {
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
   background: var(--background);
    overflow: hidden;
  }

  .second .box:nth-child(2){
  background: var(--foreground);
  }

.second .box:nth-child(4){
  background: var(--foreground);
  }

  .second .box:nth-child(6){
  background: var(--foreground);
  }

  .second .box:nth-child(8){
  background: var(--foreground);
  }

  .second .box:before {
    content: "D";
    position: absolute;
    top: 0;
    background: var(--foreground);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: transform .4s;
  }

  .second .box:nth-child(2)::before {
  background: var(--background);
    transform: translateY(100%);
    content: 'R';
  }

  .second .box:nth-child(3)::before {
    content: 'I';
  }

  .second .box:nth-child(4)::before {
  background: var(--background);
    transform: translateY(100%);
    content: 'N';
  }

  .second .box:nth-child(5)::before {
    content: 'K';
  }

    .second .box:nth-child(6)::before {
    background: var(--background);
    transform: translateY(100%);
    content: 'I';
  }

    .second .box:nth-child(7)::before {
    content: 'N';
  }

    .second .box:nth-child(8)::before {
    background: var(--background);
    transform: translateY(100%);
    content: 'G';
  }

  .button:hover .box:before {
    transform: translateY(0);
  }`;

export default Button;
