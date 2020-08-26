import React from "react";
import InputBase from "@material-ui/core/InputBase";
import  '../Search/SearchAndIcon.css';


export const SearchAndIcon = (props) => {
  

  return (
    <div className="search">
      <InputBase
      className="inputSearch"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={props.onChange}
       placeholder={props.placeholder}
       onKeyPress={props.onKeyPress}
       value={props.value}
     
      />
    </div>
  );
};
