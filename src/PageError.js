import { Link } from "react-router-dom"

const PageError = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Error page not found</p>
      <Link to="/"> Returning to homepage...</Link>
    </div>
  );
}
 
export default PageError;