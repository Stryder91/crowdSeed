import { Link } from "react-router-dom";

export const HeaderUrls = ({ routes, children }) => {
	return (
    <div className="hidden lg:flex lg:items-center">
      {routes && routes.map((r, i) => {
        return (
          <Link key={i} to={r.path}>{r.name}</Link>
        );
      })}
      {children}
    </div>
	);
};
