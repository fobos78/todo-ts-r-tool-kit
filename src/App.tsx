import React from "react";
import styled from "styled-components/macro";
import { Provider } from "react-redux";
import { store } from "./ToolkitRedux";
// import 'styled-components';

import Todo from "./components/Todo";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Title>
          <Todo />
        </Title>
      </Wrapper>
    </Provider>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
