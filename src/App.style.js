import styled from "styled-components";

export const Container = styled.div``;

export const InputSection = styled.div`
  display: grid;
  padding: 40px;
  width: 480px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  .title,
  .subtitle {
    grid-column: 1/3;
  }

  .title {
    margin-top: 0;
  }

  .text-box {
    margin-bottom: 14px;
  }

  .button {
    margin-top: 16px;
  }
`;

export const PreviewSection = styled.div`
  margin: 45px 136px;
`;
