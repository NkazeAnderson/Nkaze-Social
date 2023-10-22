import { Search } from "@mui/icons-material";
import { Box, InputBase, Stack, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { UiActions } from "./store/uiSlice";
const SearchBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",
  borderRadius: 30,
  borderColor: theme.palette.default,
  flex: 5,
}));
function SearchComponent({ placeholder, id, icon }) {
  const dispatch = useDispatch();
  const handleBlur = (event) => {
    event.target.value = "";
    dispatch(UiActions.MobileSearchNotUSed());
  };
  return (
    <SearchBox>
      <Stack direction="row" alignItems="center" sx={{ margin: "0px 10px" }}>
        <Search color="primary" fontSize="small" />
        <InputBase
          id={id}
          fullWidth
          placeholder={placeholder}
          size="small"
          onBlur={handleBlur}
        />
      </Stack>
    </SearchBox>
  );
}

export default SearchComponent;
