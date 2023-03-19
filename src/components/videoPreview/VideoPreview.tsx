import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IVideo } from "../../pages/main/Main.interface";
import styles from "./VideoPreview.module.scss";

interface IProps {
	video: IVideo;
}

export const VideoPreview: FC<IProps> = ({ video }) => {
	return (
		<div className={styles.container}>
			<Link to={`/video/${video.id}`}>
				<img src={video?.image} alt={video?.title} draggable={false} />
				<p>{video?.title}</p>
				<p>{video?.description}</p>
			</Link>
		</div>
	);
};
