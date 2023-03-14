import styles from "./SelectedVideo.module.scss";
import React from "react";
import { useParams } from "react-router-dom";

const SelectedVideo = () => {
  const { id } = useParams();

  return <div>SelectedVideo is {id}</div>;
};

export default SelectedVideo;
