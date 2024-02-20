import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>Landing page ...</h1>
      <Link to="/dashboard"> Dashboard</Link>
      <Link to="login"> Login</Link>
    </>
  );
};
export default Landing;
