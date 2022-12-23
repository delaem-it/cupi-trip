import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component from "./pages/Component";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import Component4 from "./pages/Component4";
import Component5 from "./pages/Component5";
import Component6 from "./pages/Component6";
import Component7 from "./pages/Component7";
import Component8 from "./pages/Component8";
import Component9 from "./pages/Component9";
import Component10 from "./pages/Component10";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/9":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component />} />

      <Route path="/7" element={<Component1 />} />

      <Route path="/5" element={<Component2 />} />

      <Route path="/4" element={<Component3 />} />

      <Route path="/6" element={<Component4 />} />

      <Route path="/1" element={<Component5 />} />

      <Route path="/" element={<Component6 />} />

      <Route path="/2" element={<Component7 />} />

      <Route path="/3" element={<Component8 />} />

      <Route path="/8" element={<Component9 />} />

      <Route path="/9" element={<Component10 />} />
    </Routes>
  );
}
export default App;
