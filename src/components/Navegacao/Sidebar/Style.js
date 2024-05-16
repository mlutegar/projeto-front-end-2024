import styled from 'styled-components';

export const Container = styled.div`
  background-color: #EDEBF5;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .7s;
  border-right: 1px solid black;

  > svg {
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
    margin-top: 1.5rem;
    margin-left: 16rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;