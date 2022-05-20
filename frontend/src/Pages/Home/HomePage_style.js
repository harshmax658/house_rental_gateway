import styled from "styled-components";

export const Homepage = styled.div`
  .shad {
    text-shadow: 1px 1px #737085;
  }
`;
export const CenterBox = styled.div`
  /* border: 2px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  /* width: 100%; */
  section {
    width: 80%;
    text-align: center;
  }
`;
export const H2 = styled.h2`
  font-size: 2.3rem;
  color: white;

  text-shadow: 2px 2px black;
`;
export const P = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 15px 0;
`;
export const PostImage = styled.div`
  background: url("images/houseHome.jpg") center center/cover;
  background-size: cover;
  width: "100%";
  z-index: -1;
  height: 400px;
`;
export const TransDiv = styled.div`
  /* border: 2px solid; */
  width: 100%;
  text-align: center;
  position: relative;
  height: 100px;
  div {
    position: relative;
    z-index: 22;
    padding: 0 20px;

    p {
      z-index: 11;
      color: white;
      font-weight: inherit !important;
      margin-bottom: 5px;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0.6;
    background-color: black;
  }
`;
export const InSearch = styled.div`
  display: flex;
  height: 40px;
  input {
    width: 100%;
    outline: none;
  }
  button {
    background-color: green;
    outline: none;
    border: none;
    width: 15%;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
