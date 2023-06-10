import { StyledListBar, SortBtns } from "./ListBar.styled"

const ListBar = () => {


  return (
    <StyledListBar>
        <SortBtns>id</SortBtns>
        <SortBtns>date</SortBtns>
        <SortBtns>name</SortBtns>
        <SortBtns>number</SortBtns>
    </StyledListBar>
  )
}

export default ListBar