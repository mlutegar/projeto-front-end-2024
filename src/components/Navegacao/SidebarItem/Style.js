import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  font-size: 20px;
  color: black;
  padding: 25px 0px;
  cursor: pointer;
  text-decoration: none;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #023859;
    color: white
  }
    
  a {
    text-decoration: none;
  }
`;