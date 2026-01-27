import { useRouteError, isRouteErrorResponse } from "react-router";

const ErrorPage = () => {
  const error = useRouteError(); // тип автоматически inferred как unknown

  if (isRouteErrorResponse(error)) {
    // TS понимает, что это RouteErrorResponse
    return (
      <div style={{ padding: 20 }}>
        <h1>Oops! Something went wrong.</h1>
        <p>Status: {error.status}</p>
        <p>{error.statusText}</p>
      </div>
    );
  }

  // fallback для любых других ошибок
  return (
    <div style={{ padding: 20 }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{(error as Error)?.message || "Unknown error"}</p>
    </div>
  );
};

export default ErrorPage;
