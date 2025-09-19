"use client";

import { getImageUrl } from "@/lib/utils";
import { TVShow } from "@/types/tmdb";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  show: TVShow;
}

export default function ContentCard({ show }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="relative w-36 cursor-pointer transition-transform duration-200 sm:w-40 md:w-44 lg:w-48"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={getImageUrl(show.poster_path)}
          alt={show.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 200px, 150px"
          priority={false}
        />
      </div>
    </motion.div>
  );
}
