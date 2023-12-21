import styled from 'styled-components';

export const PaginationContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 30px 0 0 0;
    justify-content: center;
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  li a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    outline: 0px;
    border: 1px solid #78909c;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    border-radius: 5px;
    box-sizing: border-box;
    min-width: 32px;
    height: 32px;
    padding: 0px 6px;
    margin: 0px 3px;
    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      border: 1px solid #660bf785;
      color: #660bf785;
    }
  }
  li.active a {
    background-color: transparent;
    border: 1px solid #660bf7;
    color: #660bf7;
    cursor: not-allowed;
  }
  li.disabled a {
    cursor: not-allowed;
    background-color: #d9d9d9;
    &:hover {
      border-color: #78909c;
      color: inherit;
    }
  }
`;
