import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { $api } from "../../api/apiService";
import adGolos from "../../assets/images/ad-golos.png";
import { VideoPreview } from "../../components/videoPreview/VideoPreview";
import Meta from "../../utils/meta/Meta";
import { IVideo } from "./Main.interface";
import styles from "./Main.module.scss";

const Main = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [allVideos, setAllVideos] = useState<IVideo[]>([]);

	const settings = {
		className: "center",
		infinite: false,
		accessibility: true,
		slidesToShow: 2,
		speed: 500,
		rows: 2,
		// slidesPerRow: 1,
	};

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
			<div className={styles.main__container}>
				<div className={styles.header__box}>
					<span>наши видео</span>
				</div>

				<div className={styles.inner}>
					<div className={styles.videos__box}>
						<div className={styles.slider__box}>
							<Slider {...settings}>
								{allVideos?.map((video, index) => (
									<VideoPreview key={video.id} video={video} />
								))}
							</Slider>
						</div>

						<div className={styles.buttons__box}></div>
					</div>

					<div className={styles.ad__box}>
						<img src={adGolos} alt="Программа Голос Дети" draggable={false} />
					</div>
				</div>
			</div>

			<ul></ul>
		</Meta>
	);
};

export default Main;
