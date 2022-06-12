import { Routes, Route } from "react-router-dom"; 
import GeneralSkin from "./GeneralSkin";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Store from "./routes/Store";
import NoMatch from "./routes/NoMatch";
import ShowPage from "./routes/ShowPage";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<GeneralSkin />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Store" element={<Store />} />
            <Route path="ShowPage/:idProduct" element={<ShowPage />} /> need the arg submitted by the cart view button -
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
