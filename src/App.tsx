import { Analytics } from "@vercel/analytics/react";
import ResponsiveHomepage from "./components/ResponsiveHomepage";

export default function App() {
  return (
    <>
      <ResponsiveHomepage />
      <Analytics />
    </>
  );
}