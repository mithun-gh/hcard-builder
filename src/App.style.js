import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1000px;
  border: 1px solid #9a9a9a80;
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
`;

export const PreviewSection = styled.div`
  flex: 520px;
  padding: 126px 45px;
  background-color: #e0e4e7;
`;

export const Legend = styled.div`
  color: #95a5a6;
  font-size: 16px;
  text-align: right;
  margin-bottom: 10px;
`;
