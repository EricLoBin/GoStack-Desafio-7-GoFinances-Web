import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  margin-left: auto;
  padding-right: 160px;
  width: 100%;
  text-align: right;
  top: 35px;

  p + a,
  a + p {
    margin-left: 32px;
  }

  a {
    color: #ffffff;
    opacity: 0.8;
    text-decoration: none;
    text-align: right;
    margin-right: 32px;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    text-align: right;
    display: contents;

    &::after {
      content: ' ';
      position: absolute;
      width: 73px;
      height: 2px;
      transform: translate(-100%, calc(1rem + 10px));

      /* Orange */

      background: #ff872c;
    }
  }
`;
