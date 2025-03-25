"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryClient({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isListView, setIsListView] = useState(false);
  const [loadingStates, setLoadingStates] = useState(
    new Array(images.length).fill(true)
  );

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div className="w-full h-full">
      <div className="bg rounded-lg border-[#62102f] border w-full h-full overflow-hidden lg:mb-20 pb-12">
        <div className="p-2 border-b-[#62102f] border-b flex justify-between">
          <div className="flex items-center justify-between gap-4 w-full">
            <p className="ml-2">fishypics</p>
            <div className="">
              <button
                className="mr-4 text-sm text-white hover:text-[#8b1547] underline transition"
                onClick={() => setIsListView(!isListView)}
              >
                {isListView ? "Grid" : "List"}
              </button>
              <span className="mr-4">|</span>
            </div>
          </div>
          <div>
            <Link href="/" className="hover:text-[#8b1547] mr-2">x</Link>
          </div>
        </div>

        <div className="overflow-y-scroll h-full">
          <div
            className={`p-4 transition-all ${
              isListView
                ? "grid grid-cols-1 gap-4"
                : "grid grid-cols-3 gap-4"
            }`}
          >
            {[...images].reverse().map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden cursor-pointer ${
                  isListView ? "max-w-4xl mx-auto" : ""
                }`}
                onClick={() => !isListView && setSelectedImage(`/gallery/${image}`)}
              >
                <p className={`${isListView ? "py-2" : "hidden"}`}>{image}</p>

                {/* Loading Icon */}
                {loadingStates[index] && (
                  <Image
                    src="/icons/jpeg.ico"
                    alt="Loading..."
                    width={64}
                    height={64}
                    className="absolute inset-0 mx-auto my-auto opacity-20"
                  />
                )}

                {/* Actual Image */}
                <Image
                  src={`/gallery/${image}`}
                  alt={`Image ${index}`}
                  width={isListView ? 1080 : 512}
                  height={isListView ? 1080 : 512}
                  className={`rounded-lg shadow-md object-contain w-full ${
                    isListView ? "h-auto" : ""
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popup Image Viewer */}
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center z-100 mx-4 lg:mx-0 mb-12 lg:mb-0">
            <div className="bg border border-[#62102f] rounded-lg flex flex-col overflow-hidden">
              <div className="p-2 border-b border-[#62102f] flex justify-between text-white">
                <div>{selectedImage}</div>
                <button
                  className="hover:text-[#8b1547] mr-2"
                  onClick={() => setSelectedImage(null)}
                >
                  x
                </button>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <div className="">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-h-[80vh] lg:max-w-[90vw] lg:max-h-[90vh] object-contain mx-auto my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
