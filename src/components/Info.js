function Info({ coverImg, title, description}) {
    return (
        <div>
            <img src={coverImg} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Info;