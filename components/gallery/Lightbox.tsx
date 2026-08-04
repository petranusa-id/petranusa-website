"use client";

import Image from "next/image";

type Props = {
  image: string;
  onClose: () => void;
};

export default function Lightbox({
  image,
  onClose,
}: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <Image
        src={image}
        alt="Gallery"
        width={1000}
        height={700}
        className="rounded-2xl"
      />
    </div>
  );
}
