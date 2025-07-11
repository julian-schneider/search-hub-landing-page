import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadingResultsIndicator from "./pages/components/LoadingResultsIndicator";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/components/Layout";

function App() {
  return (
    <Suspense fallback={<LoadingResultsIndicator />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
