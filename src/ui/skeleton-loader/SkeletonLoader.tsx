import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface IProps {
	height: number;
	count: number;
}

const SkeletonLoader: FC<IProps> = ({ height, count }) => {
	return (
		<Skeleton
			baseColor="#1F2125"
			highlightColor="#292A2E"
			height={height}
			count={count}
		/>
	);
};

export default SkeletonLoader;
