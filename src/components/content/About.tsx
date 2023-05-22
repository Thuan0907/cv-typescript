import photoMe from "../../assets/img/about/1.jpg";
import bgWrap from "../../assets/img/about/550x640.jpg";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <>
      <div
        className="arlo_tm_section relative"
        id="about"
        style={{ paddingTop: 100 }}
      >
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Ngô Minh Thuận</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    ref={sceneEl}
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.2">
                      <img src={bgWrap} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={photoMe}
                        style={{ backgroundImage: `url(${photoMe})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Hi there... I'm a&nbsp;
                      <TypeAnimation
                        sequence={[
                          "Freelancer",
                          2000,
                          "UI/UX Designer",
                          2000,
                          "Web Developer",
                          2000,
                          () => {
                            console.log("Sequence completed");
                          },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "2em", display: "inline-block" }}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào, mình là <strong>Ngô Minh Thuận</strong>.
                    </p>
                    <br />
                    <p>
                      Là người đam mê công việc lập trình, luôn chủ động giải
                      quyết mọi vấn đề trên tinh thần trách nhiệm.
                    </p>
                    <br />
                    <p>
                      Mình là người hòa đồng và biết lắng nghe ý kiến chia sẻ
                      trong tổ chức, qua đó học hỏi thêm nhiều kinh nghiệm cho
                      bản thân.
                    </p>
                    <br />
                    <p>
                      Mình mong muốn sẽ được cống hiến và là một phần trong
                      thành công của mỗi dự án lớn nhỏ của công ty.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 09.07.1995
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="">minhthuanngo0907@gmail.com</a>
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Github:</label>{" "}
                          <a href="https://github.com/Thuan0907">
                            https://github.com/Thuan0907
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href="" download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
