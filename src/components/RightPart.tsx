import About from "./content/About";
import Contact from "./content/Contact";
import Individual from "./content/Individual";
import Project from "./content/Project";
import Skill from "./content/Skill";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
  return (
    <>
      <div
        className={
          props.hideLeftPart === true
            ? "arlo_tm_rightpart opened"
            : "arlo_tm_rightpart"
        }
      >
        <div className="rightpart_inner">
          <Individual />

          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SKILLS --> */}
          <Skill />
          {/* <!-- /SKILLS --> */}

          {/* <!-- PROJECT --> */}
          <Project />
          {/* <!-- /PROJECT --> */}

          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
};

export default RightPart;
