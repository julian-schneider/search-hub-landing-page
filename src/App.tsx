import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingResultsIndicator from "./pages/components/LoadingResultsIndicator";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/components/Layout";

const StaticMarkdownPage = lazy(
  () => import("./pages/static/StaticMarkdownPage")
);

function App() {
  return (
    <Suspense fallback={<LoadingResultsIndicator />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/privacy"
            element={
              <StaticMarkdownPage file={"privacy"} title={"Privacy Policy"} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
