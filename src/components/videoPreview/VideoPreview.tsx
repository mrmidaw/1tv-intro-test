import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IVideo } from "../../pages/main/Main.interface";
import styles from "./VideoPreview.module.scss";

interface IProps {
	video: IVideo;
}

export const VideoPreview: FC<IProps> = ({ video }) => {
	const navigate = useNavigate();

	const navigateHandler = (id: number) => {
		navigate(`/video/${video.id}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.image__box}>
				<img src={video?.image} alt={video?.title} draggable={false} />
				<div className={styles.filter} />

				<div className={styles.button__box}>
					<p>{video.text}</p>
					<button onClick={() => navigateHandler(video.id)}>смотреть</button>
				</div>
			</div>

			<div className={styles.text__box}>
				<p>{video?.title}</p>
				<p>{video?.description}</p>
			</div>
		</div>
	);
};
