import "./App.css";
import Login from "./pages/Login";
import Deshboard from "./pages/Deshborad";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// export function IsAuth() {
//   const { user_data } = useSelector((state) => state.userReducer);
//   let authenticated = user_data?.token;
//   return authenticated;
// }

export function Private({ children }) {
  const { user_data } = useSelector((state) => state.userReducer);
  if (!user_data?.token) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
}

export function Public({ children }) {
  const { user_data } = useSelector((state) => state.userReducer);

  if (user_data?.token) {
    return <Navigate to="/dashboard/" replace={true} />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route
          path="/"
          element={
            <Public>
              <Login />
            </Public>
          }
        />

        {/* private route */}
        <Route
          path="/dashboard/"
          element={
            <Private>
              <Deshboard />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
