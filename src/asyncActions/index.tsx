import axios from "axios";

import {
    addDog,
  } from "../ToolkitRedux/toolkitSlice";

  export function getDog() {
    // console.log("result>>>");
      return  function(dispatch: any) {
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => {dispatch(addDog(response.data.message));console.log("result");})
        // const json:any = await result.json()
        
        // dispatch(addDog(result.data.message))
      }
    }
//   export function getDog() {
//     console.log("result>>>");
//       return async function(dispatch: any) {
//         const result = await axios.get("https://dog.ceo/api/breeds/image/random");
//         // const json:any = await result.json()
//         console.log("result", result.data.message);
//         dispatch(addDog(result.data.message))
//       }
    // const result = await axios.get(url);
    // console.log("result", result.data.message);
    // setDog(result.data.message);
    // dispatch(addDog(result.data.message))
    // return result.data[0].url;
//   }