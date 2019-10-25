import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  width: 500px;
  background: #21395c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  input {
    padding: 5px 10px;
    background: transparent;
    border: 3px solid var(--color-background-embed);
    color: white;
    margin-bottom: 10px;
    border-radius: 5px 0 0 5px;
  }
  button {
    border: none;
    vertical-align: top;
    padding: 7.5px;
    background: var(--color-green);
    border-radius: 0 5px 5px 0;
    color: white;
    transition: 2s;
    &:hover {
      filter: brightness(85%);
      transition: 2s;
    }
    .spin {
      animation-name: spin;
      animation-duration: 5000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export const Notification = styled.p`
  color: white;
  font-weight: 700;
  background: var(--color-red);
  padding: 5px;
  border-radius: 5px;
  position: fixed;
  bottom: 5vh;
  animation: pulse 2s infinite;

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(255, 103, 104, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(255, 103, 104, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(255, 103, 104, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(255, 103, 104, 0.4);
      box-shadow: 0 0 0 0 rgba(255, 103, 104, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(255, 103, 104, 0);
      box-shadow: 0 0 0 10px rgba(255, 103, 104, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(255, 103, 104, 0);
      box-shadow: 0 0 0 0 rgba(255, 103, 104, 0);
    }
  }
`;
