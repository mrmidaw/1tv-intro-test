import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { $api } from "../../api/apiService";
import Meta from "../../utils/meta/Meta";
import { IVideo } from "./Main.interface";
import styles from "./Main.module.scss";

const Main = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [allVideos, setAllVideos] = useState<IVideo[]>([]);

	// ************ФУНКЦИЯ ПОЛУЧЕНИЯ ВСЕх ВИДЕО***********
	const getAllVideos = async () => {
		setIsLoading(true);

		try {
			const response = await $api.get("/list");

			setAllVideos(response.data);
		} catch (error) {
			console.log("all Videos>>>", error);
		} finally {
			setIsLoading(false);
		}
	};

	// *****ВЫЗОВ ПРИ ПЕРВОЙ ЗАГРУЗКЕ***********
	useEffect(() => {
		getAllVideos();
	}, []);

	return (
		<Meta
			title="Подборка видео, которые сегодня в топе!"
			description="Новости, познавательные передачи и развлекательные шоу, фильмы и сериалы – все это вы можете смотреть на сайте Первого канала."
		>
			<ul>
				{allVideos?.map((video, index) => (
					<li key={video.id}>
						<Link to={`/video/${video.id}`}>{video.title}</Link>
					</li>
				))}
			</ul>
		</Meta>
	);
};

export default Main;
