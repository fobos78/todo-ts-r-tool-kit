import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { addSetInput, changeSetInput } from "../../ToolkitRedux/toolkitSlice";
import styled from "styled-components";

const foo: any = ["name", "age","new"];

function SetInput() {
  const dispatch = useDispatch();
  const setInput: any = useSelector((state: any) => state.setInput);
  if (setInput.length === 0) {
    foo.forEach((el: any) => {
        dispatch(addSetInput(""));
    });
  }

  return (
    <>
      {foo.map((el: any, i: any) => (
        <InputWrapper>
        <h3>{el}</h3>
          <Input value={setInput[i]} onChange={(e) => dispatch(changeSetInput({value: e.target.value, index: i}))}/>
          <p>value - {setInput[i]}</p>
        </InputWrapper>
      ))}
    </>
  );
}

export default SetInput;

const InputWrapper = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  margin-top: 10px;
`;
