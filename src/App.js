import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes/index";
import { Header } from "./Layouts/DefaultLayouts/Header";
import { DefaultLayouts } from "./Layouts";

function App() {
  return (
    <Router>
      {/* <Header />; */}
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayouts;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
