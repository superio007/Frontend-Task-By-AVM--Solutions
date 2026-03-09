import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/Mainlayout.tsx";
const HomePage = lazy(() => import("../pages/Homepage"));
import Notfound from "../pages/Notfound";
import FallbackLoader from "../components/Ui/FallbackLoader";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<FallbackLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<FallbackLoader />}>
                <Notfound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
