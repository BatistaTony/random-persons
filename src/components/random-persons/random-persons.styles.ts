import styled from "styled-components";

export const RandomPersonsContainer = styled.div`
  width: 90%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 16pt;
`;

export const ListUsers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LisItem = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 20px 50px auto;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const LisItemPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const LisItemName = styled.h5`
  font-size: 12pt;
  margin-left: 20px;
`;

export const ButtonLoadMore = styled.button`
  border: none;
  outline: none;
  width: 100px;
  font-size: 12pt;
  height: 30px;
  border-radius: 8px;
  margin-top: 40px;
  cursor: pointer;
`;
