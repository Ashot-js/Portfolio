import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage_code">
        {isRouteErrorResponse(error) ? error.status : "Error"}
      </h1>
      <p className="ErrorPage_message">
        {isRouteErrorResponse(error)
          ? error.statusText
          : (error as Error)?.message || "Something went wrong"}
      </p>
      <Link to="/" className="ErrorPage_link">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
