// import { useSelector } from "react-redux"
import { StyledListBar, SortBtns } from "./ListBar.styled"
// import { getSorted } from "redux/selectors"
import { toggleSortId } from "redux/sortSlice"
import { useDispatch } from "react-redux"

const ListBar = () => {
    const dispatch = useDispatch()
    // const sorted  =useSelector(getSorted)

    const sortById = (e) =>{
        console.log('sortById')
        dispatch(toggleSortId()) 
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