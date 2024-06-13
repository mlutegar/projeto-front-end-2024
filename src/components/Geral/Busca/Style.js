import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const BuscaEstilo = styled.article`
  button {
    background-color: #f3f3f4;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    border-radius: 10px;
    padding: 10px 15px;

    &:hover {
      background-color: var(--destaque);
      transform: translateY(-2px);
    }
  }

  .busca {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    gap: 20px;
  }

  .dropbtn {
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 40px;
    padding: 0 10px;
    align-items: center;
    border: 1px solid #d9e2ec;
    border-radius: 10px;
    background-color: white;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus, &:hover {
      border-color: var(--primaria);
      box-shadow: 0 0 5px var(--primaria);
      outline: none;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    overflow: hidden;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  .dropdown-content a,
  .dropdown-content > button {
    color: black;
    padding: 10px 15px;
    text-decoration: none;
    display: block;
    background-color: white;
    border: none;
    text-align: left;
    transition: background-color 0.3s;

    &:hover {
      background-color: #002D55;
      color: white;
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .search-box {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 190px;
  }

  .search-box input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;

    &::placeholder {
      color: #9e9ea7;
    }

    &:focus, &:hover {
      outline: none;
      border-color: #002D55;
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    }
  }

  .input-busca {
    border-radius: 20px;
    padding-left: 0.4rem;
  }

  .btn.btn-flat {
    background-color: var(--primaria);
    color: white;
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--destaque);
    }
  }
`;

export { BuscaEstilo };