import { Link } from "react-router-dom";
const  ErrorPage = () =>{
  return (
    <>
      <h1>ERROR 404 NOT FOUND !!</h1>
      <Link to="/">Landing page</Link>
    </>
  )
}
export default ErrorPage;