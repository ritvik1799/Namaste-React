import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="Error">
      <div>Oops !!!</div>
      <div>SomeThing went wrong.</div>
      <div>
        {err.status} - {err.statusText}
      </div>
    </div>
  );
};

export default Error;
