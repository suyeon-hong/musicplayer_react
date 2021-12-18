import { useState } from "react";

function Btns(props) {
    let [index, setIndex] = useState(0);

    function next(e){
        setIndex(--index);
        const frame = e.target.closest("figure").querySelector("section");
        frame.style.transform = `rotate(${index*props.deg}deg)`;
    }
    function prev(e){
        setIndex(++index);
        const frame = e.target.closest("figure").querySelector("section");
        frame.style.transform = `rotate(${index*props.deg}deg)`;
    }
    return(
        <>
            <div className="prev" onClick={e=>prev(e)}>
                <span>PREV</span>
            </div>
            <div className="next" onClick={e=> next(e)}>
                <span>NEXT</span>
            </div>
        </>
    )
}

export default Btns;