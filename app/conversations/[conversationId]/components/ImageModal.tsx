"use client";

import { Modal } from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src,
}) => {
  if (!src) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-auto">
        <Image
          alt="image"
          className="w-full h-[30rem] object-contain"
          width={1200}
          height={1000}
          src={src}
        />
      </div>
    </Modal>
  );
};
