import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

function NewOption({str}: any) {
  
  return (
    <>
    <WrapActions><div>{str}</div></WrapActions>
    </>
  );
}

export default NewOption;

const WrapActions: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
