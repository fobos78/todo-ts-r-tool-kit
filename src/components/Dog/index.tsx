import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Dog({ setFlagDog }: any) {
  const myDog: any = useSelector((state: any) => state.dog);
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");

  async function getDog(url: string) {
    const result = await axios.get(url);
    // console.log("result", result.data.message);
    setDog(result.data.message);
    // return result.data[0].url;
  }
  useEffect(() => {
    getDog("https://dog.ceo/api/breeds/image/random");
  }, []);
  return (
    <>
      <h3>this is a cat</h3>
      <button type="button" onClick={() => setFlagDog(false)}>
        Dog
      </button>
      <Wrap>
        <img src={`${myDog}`} alt="" />
      </Wrap>
    </>
  );
}

export default Dog;

const Wrap = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
`;
