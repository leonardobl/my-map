import styled from "styled-components";

type formProps = {
  erro: boolean
}

export const Container = styled.form<formProps>`
position: fixed;
left: 40px;
top: 20px;
z-index: 1100;


input{
  border-radius: 10px;
  padding: 10px 40px 10px 20px;
  border: 1px solid ${({erro})=> erro ? "red" : "#8db49c"} ;
  outline: none;
  font-size: 1.25rem;
  background-color: rgba(242, 239, 232, .8);
  
}

svg{
  color: ${({erro})=> erro ? "red" : "#8db49c"};
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

`


