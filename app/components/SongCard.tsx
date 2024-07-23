import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SongCardProps {
  title: string;
  artist: string;
  imageUrl: string;
  link: string;
}

const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  imageUrl,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="max-w-sm flex bg-white rounded-2xl border overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <Image
          className="w-32 h-32 rounded-l-2xl"
          src={imageUrl}
          alt={title}
          width={128}
          height={128}
        />
        <div className="px-6 py-4 flex flex-col justify-center">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{artist}</p>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
