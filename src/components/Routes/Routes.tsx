import { CssBaseline } from "@suid/material";
import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("../Home/Home"));
const CVRoute = lazy(() => import("../CV/CVRoute"));
const Imprint = lazy(() => import("../Imprint/Imprint"));
const Privacy = lazy(() => import("../Privacy/Privacy"));

export default function AppRoutes() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cv" component={CVRoute}/>
        <Route path="/imprint" component={Imprint} />
        <Route path="/privacy" component={Privacy} />
      </Routes>
    </>
  );
}