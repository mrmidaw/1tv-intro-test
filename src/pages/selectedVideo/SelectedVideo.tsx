import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { $api } from "../../api/apiService";
import adGolos from "../../assets/images/ad-golos.png";
import AboutVideo from "../../components/aboutVideo/AboutVideo";
import { Comment } from "../../components/comment/Comment";
import { SendReview } from "../../components/sendReview/SendReview";
import Meta from "../../utils/meta/Meta";
import { IComments, IVideoFeature } from "../main/Main.interface";
import styles from "./SelectedVideo.module.scss";

const SelectedVideo = () => {
	const { id } = useParams();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false);
	const [video, setVideo] = useState<IVideoFeature>({
		id: 0,
		title: "",
		image: "",
		genre: [""],
		production: {
			year: "2021",
			country: "Россия",
		},
		labels: {
			fullhd: true,
			age_restrictions: "18+",
			subtitles: true,
		},
	});

	const [isLoadingComment, setIsLoadingComment] = useState<boolean>(false);
	const [allComments, setAllComments] = useState<IComments>({
		pid: 0,
		comments: [],
	});

	// ************ФУНКЦИЯ ПОЛУЧЕНИЯ ВИДЕО ПО ID***********
	const getVideoById = async () => {
		setIsLoadingVideo(true);

		try {
			const response = await $api.get(`/item/${id}`);

			setVideo(response.data);
		} catch (error) {
			console.log("single Video>>>", error);
		} finally {
			setIsLoadingVideo(false);
		}
	};

	// ************ФУНКЦИЯ ПОЛУЧЕНИЯ КОММЕНТАРИЕВ ПО ID***********
	const getCommentById = async () => {
		setIsLoadingComment(true);

		try {
			const response = await $api.get(`/comments/${id}`);

			setAllComments(response.data);
		} catch (error) {
			console.log("comments>>>", error);
		} finally {
			setIsLoadingComment(false);
		}
	};

	// *****ВЫЗОВ ПРИ ПЕРВОЙ ЗАГРУЗКЕ***********
	useEffect(() => {
		if (!id) return;

		getVideoById();
		getCommentById();
	}, [id]);

	return (
		<Meta
			title="Топ видео"
			description="Новости, познавательные передачи и развлекательные шоу, фильмы и сериалы – все это вы можете смотреть на сайте Первого канала."
		>
			<div className={styles.main__container}>
				<div className={styles.header__box}>
					<span>выбранное видео</span>
					<Link to="/" className={styles.link}>
						<span className={styles.all__video}>все видео</span>
						<span className={styles.all}>все</span>
						<span className={styles.list}>к списку видео</span>
					</Link>
				</div>

				<div className={styles.inner}>
					<div className={styles.video__box}>
						{/* *****************О ВИДЕО******************* */}
						<AboutVideo videoFeature={video} />
						{/* *****************КОММЕНТАРИИ******************* */}
						{allComments?.comments?.map((item, index) => (
							<Comment
								key={item.id}
								comment={item}
								isLoadingComment={isLoadingComment}
							/>
						))}
						{/* *****************ОТПРАВИТЬ ОТЗЫВ******************* */}
						<SendReview id={id} />
					</div>
					<div className={styles.ad__box}>
						<img src={adGolos} alt="Программа Голос Дети" draggable={false} />
					</div>
				</div>
			</div>
		</Meta>
	);
};

export default SelectedVideo;
