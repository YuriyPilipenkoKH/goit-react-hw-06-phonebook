import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

export default function Home() {

  const isLoggenIn = useSelector(selectIsLoggedIn);
    return (
      <div >
        <h1 >
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <Link to={isLoggenIn ? '/contacts' : '/register'}>

                    </Link>
      </div>
    );
  }