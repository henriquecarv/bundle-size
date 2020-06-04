import css from 'styled-jsx/css';

export const styles = css.global`
  body,
  html {
    background: white;
    max-width: 100vw;
    overflow-x: hidden;
    color: #212121;
  }
  body {
    margin: 0;
  }
  .Layout {
    max-width: 100%;
  }
  .Layout__Container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  }
  .Layout__Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
  h1,
  h2 {
    font-weight: 200;
    color: #777;
    margin-top: 10px;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 1px;
  }
`;
