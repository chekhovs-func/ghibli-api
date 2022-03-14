import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  flex-direction: column;

  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  justify-content: center;
  display: flex;

  border-bottom: 5px solid white;
  width: 100vw;

  background-color: black;

  .logo {
    align-self: center;

    margin: 25px;

    fill: white;
  }
`;

export const CardWrapper = styled.section`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  display: flex;

  width: 100vw;

  overflow-y: scroll;
`;

export const Card = styled.article`
  position: relative;

  border-radius: 5px;
  margin: 25px;
  width: 320px;
  padding: 30px;

  background-color: black;

  h1,
  h2,
  h3,
  p {
    font-family: 'Nanum Gothic', sans-serif;

    color: white;
  }

  h2,
  h3 {
    font-size: 12px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 5px;

    font-weight: 400;
  }

  h3 {
    margin-bottom: 25px;
  }

  p {
    height: 200px;

    font-weight: 400;

    overflow-y: scroll;
  }
`;
