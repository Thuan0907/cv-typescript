import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <>
      {" "}
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng Frontend</h4>
                </div>
                <li>Cắt/ghép template Website Responsive</li>
                <li>Framwork/Library: Bootstrap, Antd, ReactJS</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/SCSS/JavaScript</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">ReactJS(TypeScript)</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Design UX/UI</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={90}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
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

export default Skill;
