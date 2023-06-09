import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/context/authContext";
import { navPaths } from "@/shared";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({
  redirectPath = navPaths.home,
}: ProtectedRouteProps) => {
  const { session, isLoading } = useAuthContext();

  if (isLoading) return null;

  if (!session) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
