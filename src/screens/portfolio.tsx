import { useState } from "react";
import LeftPart from "../components/LeftPart";
import Preloader from "../components/Preloader";
import RightPart from "../components/RightPart";
import MobileMenu from "../components/mobile/MobileMenu";
import { FloatButton } from "antd";
import { BlobOptions } from "buffer";

const Portfolio = () => {
  const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);

  return (
    <>
      {" "}
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>

        {/* <!-- PRELOADER --> */}
        <Preloader />
        {/* <!-- /PRELOADER --> */}

        {/* <!-- MOBILE MENU --> */}
        <MobileMenu />
        {/* <!-- /MOBILE MENU --> */}

        {/* <!-- CONTENT --> */}
        <div className="arlo_tm_content">
          {/* <!-- LEFTPART --> */}
          <LeftPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/* <!-- /LEFTPART --> */}

          {/* <!-- RIGHTPART --> */}
          <RightPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/* <!-- /RIGHTPART --> */}

          <FloatButton.BackTop tooltip={<>Scroll To Top</>} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
