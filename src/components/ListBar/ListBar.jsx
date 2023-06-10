import { StyledListBar, SortBtns } from "./ListBar.styled"

const ListBar = () => {

    const sortById = (e) =>{
        console.log('sortById')
    }


  return (
    <StyledListBar>
        <SortBtns onClick={sortById}>id</SortBtns>
        <SortBtns>date</SortBtns>
        <SortBtns>name</SortBtns>
        <SortBtns>phone</SortBtns>
    </StyledListBar>
  )
}

export default ListBar