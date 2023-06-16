// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { happyCoyote } from "utils/svgIcons";

export default function Home() {

  // const isLoggenIn = useSelector(selectIsLoggedIn);
    return (
      <div  className="home_wrapper">
        <h1 >
        React-Phonebook welcome page
          
        </h1>
        { happyCoyote }
        {/* <Link to={isLoggenIn ? '/contacts' : '/register'}>

                    </Link> */}
      </div>
    );
  }