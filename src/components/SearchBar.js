import React from "react";
import { InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    backgroundColor: "#f5f3ec",
    flexBasis: "420px",
    borderRadius: "30px 30px 30px 30px",
    padding: "10px 10px 10px 10px",
    margin: "20px",
  },
  searchIcon: {
    float: "right",
    color: "#cc0033",
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.searchBar}>
      <InputBase
        type="text"
        onChange={(e) => props.onSearch(e.target.value)}
        value={props.value}
        placeholder="Search our Tools..."
      />
      <SearchIcon className={classes.searchIcon} />
    </div>
  );
};

export default SearchBar;
