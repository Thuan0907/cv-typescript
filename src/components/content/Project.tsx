import { Modal } from "antd";
import React, { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const dataProjects: IProject[] = [
    {
      image: <IoLogoReact size={50} color="#2bebfd" />,
      title: "Tiki Clone",
      shortDescription: "Website thương mại điện tử ",
      detail: {
        description: "Xây dưng website thương mại điện tử clone",
        frontend: "React, Redux Toolkit, Ant Design",
        backend: "Node.JS, MongoDB",
        member: 1,
        role: "Developer",
        demo: "",
        github: "https://github.com/Thuan0907",
      },
    },
    {
      image: <DiNodejsSmall size={50} color="#00a80c" />,
      title: "Bookingcare Clone",
      shortDescription: "Coming soon",
      detail: {
        description: "",
        frontend: "",
        backend: "",
        member: 1,
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <AiFillFacebook size={50} color="#4096ff" />,
      title: "Facebook Clone",
      shortDescription: "Coming soon",
      detail: {
        description: "",
        frontend: "",
        backend: "",
        member: 1,
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <BsTwitter size={50} color="#4096ff" />,
      title: "Twitter Clone",
      shortDescription: "Coming soon",
      detail: {
        description: "",
        frontend: "",
        backend: "",
        member: 1,
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <BsInstagram size={50} color="#e84a65" />,
      title: "Instagram Clone",
      shortDescription: "Coming soon",
      detail: {
        description: "",
        frontend: "",
        backend: "",
        member: 1,
        role: "",
        demo: "",
        github: "",
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án  ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miêu tả: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Số lượng thành viên dự án: {dataDetail.detail.member}</li>
            <li>Vai trò: {dataDetail.detail.role}</li>
            <li>
              Demo:{" "}
              <a href={dataDetail.detail.demo} target="_blank">
                {dataDetail.detail.demo}
              </a>
            </li>
            <li>
              Github:{" "}
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>{" "}
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={`${index}_projects`}>
                      <div
                        className="inner"
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5spx 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight /> &nbsp; Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
