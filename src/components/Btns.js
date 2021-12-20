import { useState } from "react";

function Btns(props) {
    let [index, setIndex] = useState(0);

    function move(num) {
        setIndex(num);
        props.frame.current.style.transform = `rotate(${index*props.deg}deg)`;
        const article = props.frame.current.querySelectorAll('article');
        article.forEach(el=>el.classList.remove("on"));
        article[-index].classList.add("on");
    }
    return(
        <>
            <div className="prev" onClick={()=>move(++index)}>
                <span>PREV</span>
            </div>
            <div className="next" onClick={()=>move(--index)}>
                <span>NEXT</span>
            </div>
        </>
    )
}

export default Btns;