// import { useSelector } from "react-redux"
import { StyledListBar, SortBtns } from "./ListBar.styled"
// import { getSorted } from "redux/selectors"
import { toggleSortId, toggleSortDate, toggleSortName, toggleSortNUmber } from "redux/sortSlice"
import { useDispatch } from "react-redux"

const ListBar = () => {
    const dispatch = useDispatch()

    const sortById = () =>{   
        dispatch(toggleSortId()) 
    }

    const sortByDate = () =>{ 
        dispatch(toggleSortDate()) 
    }

    const sortByName = () =>{
        dispatch(toggleSortName()) 
    }

    const sortByNumber = () =>{
        dispatch(toggleSortNUmber()) 
    }


  return (
    <StyledListBar>
        <SortBtns onClick={sortById}>id</SortBtns>
        <SortBtns onClick={sortByDate}>date</SortBtns>
        <SortBtns onClick={sortByName}> name</SortBtns>
        <SortBtns onClick={sortByNumber}>phone</SortBtns>
    </StyledListBar>
  )
}

export default ListBar