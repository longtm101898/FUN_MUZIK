import { useRoutes } from "react-router-dom";
import { MusicDashboard } from "@features/dashboard";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <MusicDashboard /> }];

  return useRoutes([...commonRoutes]);
};
