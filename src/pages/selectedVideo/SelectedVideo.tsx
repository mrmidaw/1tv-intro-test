import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { $api } from "../../api/apiService";
import { SendReview } from "../../components/review/SendReview";
import Meta from "../../utils/meta/Meta";
import { IComments, IVideo } from "../main/Main.interface";
import styles from "./SelectedVideo.module.scss";

const SelectedVideo = () => {
	const { id } = useParams();

	const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false);
	const [isLoadingComment, setIsLoadingComment] = useState<boolean>(false);
	const [video, setVideo] = useState<IVideo | {}>({});
	const [comments, setComments] = useState<IComments | {}>({});

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

	// ************ФУНКЦИЯ ПОЛУЧЕНИЯ ВИДЕО ПО ID***********
	const getCommentById = async () => {
		setIsLoadingComment(true);

		try {
			const response = await $api.get(`/comments/${id}`);

			setComments(response.data);
		} catch (error) {
			console.log("comment>>>", error);
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
			<div>SelectedVideo is {id}</div>
			<SendReview id={id} />
		</Meta>
	);
};

export default SelectedVideo;
