import "./Gallery.css"
import Image from "./Image"
import images from "../data/images.json"
import { useState } from "react"
import Slide from "./Slide"

export default function Gallery () {

    const [activeImageId, setActiveImageId] = useState(0)
    const [activeSlideId, setActiveSlideId] = useState(0)

    function handleClickImage (imageId) {
        setActiveImageId(imageId)
        handleSlideChange("image-change", imageId)
    }

    function handleSlideChange (typeOfChange, imageId) {
        if (typeOfChange === "image-change") {
            setActiveSlideId(imageId)
        }
        if (typeOfChange === "slide-previous-change") {
            let previousImageId = imageId
            if (previousImageId != 0 && previousImageId < images.length) {
                previousImageId = imageId - 1
                setActiveSlideId(previousImageId)
                handleClickImage(previousImageId)
            } else {
                previousImageId = images.length-1
                setActiveSlideId(previousImageId)
                handleClickImage(previousImageId)
            }
        }
        if (typeOfChange === "slide-next-change") {
            let nextImageId = imageId + 1
            if (nextImageId > 0 && nextImageId < images.length) {
                setActiveSlideId(nextImageId)
                handleClickImage(nextImageId)
            } else {
                nextImageId = 0
                setActiveSlideId(nextImageId)
                handleClickImage(nextImageId)
            }
        }
        if (typeOfChange === "slide-random-change") {
            let randomImage = Math.floor(Math.random() * images.length)
            console.log(randomImage)
            setActiveSlideId(randomImage)
            handleClickImage(randomImage)
        }
    }

    return (
        <>
            <div className="gallery-container">
                <Slide url={images[activeSlideId].url} id={activeSlideId} onClickHandler={handleSlideChange}/>
            </div>
            <div>
                {images.map((image, index) => {
                    return <Image key={index} url={image.url} id={index} onClickHandler={handleClickImage} isSelected={index === activeImageId}/>
                })}
            </div>
        </>
    )
}