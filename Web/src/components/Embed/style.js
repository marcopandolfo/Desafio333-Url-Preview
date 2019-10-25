import styled from "styled-components";

const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

export const Embed = styled.div`
  min-width: 100%;
  background: var(--color-background-embed);
  border-radius: 5px;
  padding: 5px;
  border-left: 5px solid ${randomColor};
  img {
    border-radius: 5px;
    margin-top: 5px;
    min-width: 128px;
    max-width: 358px;
  }
  h4 {
    color: white;
  }
  p {
    color: #cecece;
  }
  a {
    color: #cecece;
    text-decoration: none;
  }
  span {
    color: #cecece;
  }
  code {
    color: #aaaa;
  }
`;
