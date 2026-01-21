import { Route, Routes } from "react-router";
import { webroutes } from "./routesdata";

function routes() {
  console.log(webroutes);

  return (
    <Routes>
      {webroutes.map((routes) => {
        const Component = routes.component; // 👈 Capitalize first letter
        return (
          <Route
            path={routes.route}
            element={<Component route={{ params: {} }} />} // pass the required prop
          />
        );
      })}
    </Routes>
  );
}

export default routes;
