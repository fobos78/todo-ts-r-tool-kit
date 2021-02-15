import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeLastTodo,
  countPlus,
  addDog,
} from "../../ToolkitRedux/toolkitSlice";
import axios from "axios";
import { Button, Select } from "antd";
import styled from "styled-components";

import Cat from "../Cat";
import Dog from "../Dog";
import NewOption from "../NewOption";
import SetInput from "../SetInput";
// import {getDog} from "../../asyncActions";

const { Option }: any = Select;

function Todo() {
  const [todo, setTodo] = useState("");
  const [flagCat, setFlagCat] = useState(false);
  const [flagDog, setFlagDog] = useState(false);
  const todos: any = useSelector((state: any) => state.todos);
  const count: any = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  const csv = {
    filename: "Data.csv",
    data: todos,
  };

  async function getDog(url: string) {
    const result = await axios.get(url);
    console.log("result", result.data.message);
    // setDog(result.data.message);
    dispatch(addDog(result.data.message));
    // return result.data[0].url;
  }

  function changTodo() {
    dispatch(addTodo({ todo }));
    setTodo("");
  }
  function changTodos(event: any) {
    setTodo(event.target.value);
  }
  function handleChange(value: any = 0) {
    console.log(`Selected: ${value}`);
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val: any) {
    console.log("search:", val);
  }
  //   getDog("https://dog.ceo/api/breeds/image/random")
  return (
    <UpWrapper>
      {flagCat ? (
        <Cat setFlagCat={setFlagCat} />
      ) : flagDog ? (
        <Dog setFlagDog={setFlagDog} />
      ) : (
        <div>
          <Select
            allowClear
            showSearch
            style={{ width: 600 }}
            placeholder="Выберите"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={onFocus}
            onSearch={onSearch}
            filterOption={true}
            // filterOption={(input, option: any) =>
            //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
          >
            <Option value="jack">Jack<NewOption str={'Jack'}/></Option>
            <Option value="lucy"><NewOption str={'Luck'}/></Option>
            <Option value="tom">Tom</Option>
          </Select>
          <div>My count - &nbsp;{count}</div>
          <CSVLink {...csv}>Export to CSV</CSVLink>
          <input onChange={changTodos} value={todo} />
          <button type="button" onClick={changTodo}>
            Add
          </button>
          <button type="button" onClick={() => dispatch(removeLastTodo())}>
            Delete Last
          </button>
          <button type="button" onClick={() => dispatch(countPlus())}>
            count + 1
          </button>
          <button type="button" onClick={() => setFlagCat(true)}>
            Cat
          </button>
          <button
            type="button"
            onClick={() => {
              setFlagDog(true);
              getDog("https://dog.ceo/api/breeds/image/random");
            }}
          >
            Dog
          </button>
          {todos.map((el: any) => (
            <h3 key={Math.random()}>{el.todo}</h3>
          ))}
        </div>
      )}
<FormWrapper>
<SetInput/>
</FormWrapper>
    </UpWrapper>
  );
}

export default Todo;

const WrapActions: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UpWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;
const InputWrapper = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  margin-top: 30px;
`;
const FormWrapper = styled.div`
  width: 792px;
  /* min-height: 306px; */
  border-radius: 6px;
  /* border: 1px solid blue; */
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  /* opacity: 0.5; */
  margin-top: 50px;
`;