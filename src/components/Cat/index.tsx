import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";

function Cat({ setFlagCat }: any) {
  const [cat, setCat] = useState("");

  async function getCat(url: string) {
    const result = await axios.get(url);
    // console.log("result", result.data[0].url);
    setCat(result.data[0].url);
    // return result.data[0].url;
  }
    useEffect(() => {
        getCat('https://api.thecatapi.com/v1/images/search');
    }, []);
  return (
    <>
    <div>
      <h3>this is a cat</h3>
      <button type="button" onClick={() => setFlagCat(false)}>
            Cat
          </button>
      <Wrap ><img src={`${cat}`} alt=""/></Wrap>
      </div>
    </>
  );
}

export default Cat;

const Wrap = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
`;
