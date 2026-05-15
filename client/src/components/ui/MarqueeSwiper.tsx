"use client";

import { ReactNode, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type MarqueeSwiperProps<T> = {
	items: readonly T[];
	renderItem: (item: T, index: number) => ReactNode;
	slideClassName?: string;
	className?: string;
	speed?: number;
	reverseDirection?: boolean;
	pauseOnHover?: boolean;
	allowTouchMove?: boolean;
	spaceBetween?: number;
};

export default function MarqueeSwiper<T>({
	items,
	renderItem,
	slideClassName = "px-3",
	className = "",
	speed = 12000,
	reverseDirection = false,
	pauseOnHover = true,
	allowTouchMove = true,
	spaceBetween = 0,
}: MarqueeSwiperProps<T>) {
	const swiperRef = useRef<SwiperInstance | null>(null);

	return (
		<div className={`marquee-swiper-container ${className}`}>
			<style>{`
				.marquee-swiper-container .swiper-wrapper {
					transition-timing-function: linear !important;
				}
			`}</style>
			<Swiper
				modules={[Autoplay, FreeMode]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				dir={reverseDirection ? "rtl" : "ltr"}
				className="w-full"
				slidesPerView="auto"
				spaceBetween={spaceBetween}
				loop
				loopAdditionalSlides={items.length}
				speed={speed}
				allowTouchMove={allowTouchMove}
				freeMode={{ enabled: true, momentum: false }}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: pauseOnHover,
				}}
				watchSlidesProgress
				grabCursor={allowTouchMove}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index} className={`!w-auto ${slideClassName}`} dir="ltr">
						{renderItem(item, index)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}