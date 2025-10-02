"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export default function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps): JSX.Element | null {
  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-auto rounded-xl bg-white p-3 shadow-2xl dark:bg-gray-900">
        <button
          type="button"
          aria-label="Fermer"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-sm text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Fermer
        </button>
        <div className="relative h-[75vh] w-[80vw] min-h-[320px] min-w-[320px]">
          {!hasError ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 80vw, 90vw"
              priority={false}
              onError={() => setHasError(true)}
            />
          ) : (
            <iframe
              src={src}
              title={alt}
              className="h-full w-full rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}


