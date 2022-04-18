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
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid gray;
  padding-left: 10px;
  position: relative;

  .person-index {
    font-size: 13pt;
    width: auto;
    margin-right: 20px;
  }
`;

export const LisItemPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const LisItemButtonRemove = styled.button`
  border: none;
  outline: none;
  width: 100px;
  background: red;
  color: black;
  height: 40px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const LisItemName = styled.h5`
  font-size: 12pt;
  margin-left: 20px;
`;

export const ButtonLoadMore = styled.button`
  border: none;
  outline: none;
  width: 150px;
  font-size: 13pt;
  height: 50px;
  border-radius: 8px;
  margin-top: 40px;
  cursor: pointer;
`;

export const LoadingIndicator = styled.p`
  font-size: 14pt;
  font-weight: bold;
`;
