import css from 'styled-jsx/css';

export const styles = css`
  .Search {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  }
  .Search__Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
  .Search__Title {
    font-size: 1.35rem;
    font-weight: 200;
    color: #777;
    margin-top: 10px;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 1px;
  }
  .Search__Input-container {
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    max-width: 700px;
    min-width: 550px;
  }
  .Search__Input-form {
    width: 100%;
    display: flex;
    align-items: baseline;
    position: relative;
  }
  .Input__Container {
    position: relative;
    width: 100%;
  }
  .Input__Container-inner {
    display: inline-block;
    width: 100%;
    position: relative;
  }
  .Input {
    text-align: center;
    margin: 0;
    overflow: visible;
    transition: border-top-left-radius 0.1s, border-top-right-radius 0.1s;
    background: transparent;
    line-height: 1;
    border: none;
    border-radius: 50px;
    color: black;
    font-size: 2rem;
    padding: 15px 45px 15px 30px;
    font-weight: 300;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -0.7px;
  }
`;
