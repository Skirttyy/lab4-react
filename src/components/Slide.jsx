import nextImage from "../assets/next.svg"
import previousImage from "../assets/previous.svg"
import randomImage from "../assets/random2.svg"
import "./Slide.css"

export default function Slide ({url, onClickHandler, id}) {
    return (
        <div className="slide-container">
            <div className="slide-image">
                <img src={url}></img>
            </div>
            <div className="slide-options">
                <img className="slide-options-previous" src={previousImage} onClick={() => onClickHandler("slide-previous-change", id)}></img>
                <img className="slide-options-random" src={randomImage} onClick={() => onClickHandler("slide-random-change", id)}></img>
                <img className="slide-options-next" src={nextImage} onClick={() => onClickHandler("slide-next-change", id)}></img>
            </div>
        </div>
    )
}