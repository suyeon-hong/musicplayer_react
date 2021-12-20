function Panels(props) {
    let bgImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.data}.jpg)`}
    let audioSrc = `${process.env.PUBLIC_URL}/music/${props.data}.mp3`
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
                        <i className="fas fa-pause" onClick={e=>{
                            props.audio.current.pause();
                            e.target.closest('.inner').querySelector(".pic").classList.remove("on");
                        }}></i>
                        <i className="fas fa-play" onClick={e=>{
                            props.audio.current.play();
                            e.target.closest('.inner').querySelector(".pic").classList.add("on");
                        }}></i>
                        <i className="fas fa-redo" onClick={e=>{
                            props.audio.current.pause();
                            props.audio.current.load();
                            e.target.closest('.inner').querySelector(".pic").classList.remove("on");
                        }}></i>
                    </div>
                </div>
                <audio src={audioSrc} ref={props.audio}></audio>
            </div>
        </article>
    )
}

export default Panels;