import "./Image.css"

export default function Image ({onClickHandler, id, url, isSelected}) {
    return (
        <div>
            <img src={url} onClick={() => onClickHandler(id)} className={isSelected === true ? "is-selected" : "not-selected"}></img>
        </div>
    )
}