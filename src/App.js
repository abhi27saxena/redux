import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
// import { useSelector, useDispatch } from "react-redux";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

 let counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  
{counter}
      <br />
      <button onClick={() => dispatch({ type: "counter/incremented" })}>
        Increment counter
      </button>
      <button onClick={() => dispatch({ type: "counter/decremented" })}>
        Decrement counter
      </button>
*/
