import styled from 'styled-components';

//styled.div``; because it's a normal "div".
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

//styled.form``; because this is not a normal "div", it's a "form".
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1; /*To fill all the space, except the Button's space*/
    height: 55px;
    padding 0 20px;
    background-color: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    /*Instead of put a fixed value (zero) we can put a templete literals (variable) to receive a function with the unique parameter being props*/
    /*So with "props" we have the "withError" and "onSubmit"*/
    /*If the props.witherror it is false I want "border" otherwise, it will be zero*/
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
      cursor: pointer;
    }
  }
`;
