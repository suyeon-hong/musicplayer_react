function Panels(props) {
    let bgImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.data}.jpg)`}
    let videoSrc = `url(${process.env.PUBLIC_URL}/img/${props.data}.mp3)`
    let rotatePanel = {transform: `rotate(${props.deg*props.index}deg) translateY(-100vh)`}

    return(
        <article style={rotatePanel}>
            <div className="inner">
                <div className="pic" style={bgImg}>
                <div className="dot"></div>
                </div>
                <div className="txt">
                    <h2>{props.data}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, itaque?</p>
                    <div className="btns">
                        <i className="fas fa-pause"></i>
                        <i className="fas fa-play"></i>
                        <i className="fas fa-redo"></i>
                    </div>
                </div>
                <video src={videoSrc}></video>
            </div>
        </article>
    )
}

export default Panels;