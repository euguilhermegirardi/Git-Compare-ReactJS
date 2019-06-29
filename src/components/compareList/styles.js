import styled from 'styled-components';

//Don't forget: The styled-components rule "styled.div``;"

export const Container = styled.div`
  display: flex;
  flex-direction: row; /*All the compare objects in a row.*/
  justify-content: center; /*Always centralized in the middle.*/
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column; /*All the elements always above of the next one.*/
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong{
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: black;
        font-style: italic;
        }

      /*(Even number: 2n); (Odd number: 2n - 1)*/
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;
