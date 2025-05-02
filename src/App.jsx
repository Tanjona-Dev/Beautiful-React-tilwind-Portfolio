import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./utils/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./utils/style";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
