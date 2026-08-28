import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LadingePage from "./pages/LadingPage";
import DetailsPage from "./pages/DetailsPage";
import LadingPageLayout from "./layouts/LadingPageLayout";
import AuthLayout from "./layouts/AuthLayout";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LadingPageLayout />}>
          <Route path="/" element={<LadingePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/beranda" element={<HomePage />} />
          <Route path="/course/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
