import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";

import kinopoiskIcon from "../../assets/images/kinopoisk.svg";
import likeIcon from "../../assets/images/like.svg";
import markIcon from "../../assets/images/mark.svg";
import shareIcon from "../../assets/images/share.svg";
import styles from "./AboutVideo.module.scss";
import { IAboutProps } from "./aboutVideo.interface";

export const AboutVideo: FC<IAboutProps> = ({ videoFeature }) => {
	return (
		<div className={styles.container}>
			<div className={styles.poster}>
				<img
					src={videoFeature?.image}
					alt={videoFeature?.title}
					draggable={false}
				/>
			</div>

			<div className={styles.features__box}>
				<p className={styles.title}>{videoFeature?.title}</p>

				<div className={styles.labels__box}>
					{videoFeature?.labels?.fullhd && (
						<p className={styles.label}>Full HD</p>
					)}

					{videoFeature?.labels?.subtitles && (
						<p className={styles.label}>СУБ</p>
					)}

					{videoFeature?.labels?.age_restrictions && (
						<p className={styles.label}>
							{videoFeature?.labels?.age_restrictions}
						</p>
					)}
				</div>

				<div className={styles.genre__box}>
					<p>{videoFeature?.production?.year}</p>
					<div className={styles.dot} />

					{videoFeature?.genre?.map((item, index) => (
						<p key={index}>{item}</p>
					))}
					<div className={styles.dot} />

					<p>{videoFeature?.production?.country}</p>

					<div className={styles.dot} />
					<p>8 серий</p>
				</div>

				<div className={styles.genre__box}>
					<img src={kinopoiskIcon} alt="кинопоиск" draggable={false} />
					<p>7.1</p>
				</div>

				<div className={styles.buttons__box}>
					<button className={styles.button__blue} aria-label="смотреть">
						<p>СМОТРЕТЬ</p>
						<span>осталось смотреть 7 дней</span>
					</button>

					<button className={styles.button__green} aria-label="купить подписку">
						<p>СМОТРЕТЬ за 1 ₽ без рекламы</p>
					</button>
				</div>

				<div className={styles.links__box}>
					<button className={styles.demo} aria-label="трейлер">
						<FaPlay color="white" size={16} />
						трейлер
					</button>

					<button className={styles.eclipse} aria-label="закладка">
						<img src={markIcon} alt="добавить в закладку" />
					</button>

					<button className={styles.eclipse} aria-label="лайк">
						<img src={likeIcon} alt="лайк" />
					</button>

					<button className={styles.eclipse} aria-label="поделиться">
						<img src={shareIcon} alt="поделиться" />
					</button>
				</div>
			</div>
		</div>
	);
};
