import { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const sigImagen = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const antImagen = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    useEffect(() => {
    const autoSlide = setInterval(() => {
        sigImagen();
    }, interval);

    return () => clearInterval(autoSlide);
    }, [current, interval]);

    if (!Array.isArray(images) || images.length === 0) {
    return null;
    }

    return (
    <div className="relative w-380 mx-auto overflow-hidden pt-10">
        {images.map((img, index) => (
        <div
            key={index}
            className={`${
            index === current ? "block" : "hidden"
            } w-full h-64 md:h-140`}
        >
            <img
            src={img}
            alt={`slide-${index}`}
            className="w-380 h-120 object-cover rounded-lg shadow-lg transition-all duration-700"
            />
        </div>
        ))}

        <button
        onClick={antImagen}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
        &#10094;
        </button>

        <button
        onClick={sigImagen}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
        &#10095;
        </button>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
            <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
            />
        ))}
        </div>
    </div>
    );
};

export default Carousel;


