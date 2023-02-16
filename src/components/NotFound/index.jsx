import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div className="notFoundTitle">404 NOT FOUND</div>
      <p className="notFoundDescription">
        Oops! The page you're looking for is not found. We apologize for any
        inconvenience. Please check that the URL is correct or return to the
        homepage to find what you're looking for.
      </p>
    </div>
  );
};
export default NotFound;
