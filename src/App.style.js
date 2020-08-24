import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1000px;
  border: 1px solid #9a9a9a80;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    border: none;
    flex-direction: column;
  }
`;

export const InputSection = styled.div`
  flex: 480px;
  display: grid;
  padding: 40px;
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

  @media only screen and (max-width: 1000px) {
    .text-box {
      width: 100%;
    }
  }
`;

export const PreviewSection = styled.div`
  flex: 520px;
  padding: 126px 45px;
  border-left: 4px solid #d2d6d8;
  background-color: #e0e4e7;

  @media only screen and (max-width: 1000px) {
    border: none;
    padding: 35px;
    border-top: 4px solid #d2d6d8;
    display: flex;
    justify-content: center;
  }
`;
