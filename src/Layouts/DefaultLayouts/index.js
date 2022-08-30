import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

function DefaultLayouts({ children }) {
  return (
    <div>
      <Header />
      <div className="content ">{children}</div>
      {/* <Content /> */}

      {/* <Footer /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayouts;
