import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { $api } from "../../api/apiService";
import adGolos from "../../assets/images/ad-golos.png";
import { Comment } from "../../components/comment/Comment";
import { SendReview } from "../../components/sendReview/SendReview";
import Meta from "../../utils/meta/Meta";
import { IComment, IComments, IVideo } from "../main/Main.interface";
import styles from "./SelectedVideo.module.scss";

const SelectedVideo = () => {
	const { id } = useParams();

	const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false);
	const [isLoadingComment, setIsLoadingComment] = useState<boolean>(false);
	const [video, setVideo] = useState<IVideo | {}>({});

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
						все видео
					</Link>
				</div>

				<div className={styles.inner}>
					<div className={styles.video__box}>
						{allComments?.comments?.map((item, index) => (
							<Comment key={item.id} comment={item} />
						))}

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
