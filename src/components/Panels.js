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
                            const btns = e.target.closest('.btns').querySelectorAll('i');
                            for(let el of btns) el.classList.remove("on");
                            e.target.classList.add("on");
                            props.audio.current.pause();
                        }}></i>
                        <i className="fas fa-play" onClick={e=>{
                            const btns = e.target.closest('.btns').querySelectorAll('i');
                            for(let el of btns) el.classList.remove("on");
                            e.target.classList.add("on");
                            props.audio.current.play();
                        }}></i>
                        <i className="fas fa-redo" onClick={e=>{
                            const btns = e.target.closest('.btns').querySelectorAll('i');
                            for(let el of btns) el.classList.remove("on");
                            e.target.classList.add("on");
                            props.audio.current.pause();
                            props.audio.current.load();
                        }}></i>
                    </div>
                </div>
                <audio src={audioSrc} ref={props.audio}></audio>
            </div>
        </article>
    )
}

export default Panels;