import React, { FC } from "react";

import authorLogo from "../../assets/images/author-logo.png";
import SkeletonLoader from "../../ui/skeleton-loader/SkeletonLoader";
import styles from "./Comment.module.scss";
import { ICommentProps } from "./comment.interface";

export const Comment: FC<ICommentProps> = ({ comment, isLoadingComment }) => {
	return (
		<>
			{isLoadingComment ? (
				<SkeletonLoader count={1} height={300} />
			) : (
				<div className={styles.container}>
					<div className={styles.author__box}>
						{comment.author === "Дмитрий Назаров" && (
							<div className={styles.avatar__box}>
								<img src={authorLogo} alt={comment.author} draggable={false} />
							</div>
						)}

						<div className={styles.title__box}>
							<p className={styles.title}>{comment.author}</p>
							<p className={styles.desc}>{comment.description}</p>
						</div>
					</div>

					<p className={styles.text}>«{comment.comment}»</p>
				</div>
			)}
		</>
	);
};
