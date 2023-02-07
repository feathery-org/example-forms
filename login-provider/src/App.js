import { LoginForm } from "@feathery/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LOGIN_FORM_NAME } from "./FeatheryConfig";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<div>Your Landing Page</div>}>
        <Route path="dashboard" element={<div>Your App Dashboard</div>} />
        <Route path="about" element={<div>About Us</div>} />
      </Route>
    )
  );

  return (
    <LoginForm
      formProps={{
        formName: LOGIN_FORM_NAME,
      }}
      loginPath="/"
    >
      <RouterProvider router={router} />
    </LoginForm>
  );
}

export default App;
