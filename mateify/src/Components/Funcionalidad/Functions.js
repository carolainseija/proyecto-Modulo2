import React from "react";

export function Functions () {
    var myArray = [5, 10, 11, 2, 4];
    if(myArray.indexOf(10) > -1){
    var result =  <li>Item Exists in Array at index = {myArray.indexOf(99)} </li>
   }else{
    var result = <li>Item Not Found in Array.</li>
   }
     return (
       <ul>{result}</ul>
     );
   }