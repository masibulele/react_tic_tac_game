import React, { useRef, useState } from "react";
import "./style.css";
// import pictures
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png"

let data = ["","","","","","","","",""]





const Tictac = ()=>{

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let title = useRef(0)

    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)
    let boxArry =[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    // mark square
    const toggle= (e,idx)=>{
        if(lock){
            return 0;
        }
        if(count % 2 ===0){
            
            e.target.innerHTML=`<img src='${cross_icon}'/>`;
            data[idx]='x';
            setCount(++count);
            
        } else {
            
            e.target.innerHTML=`<img src='${circle_icon}'/>`;
            data[idx]='o';
            setCount(++count);
        }

        checkWin(data)


    }

    // check for win
    const checkWin = (data)=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
             won(data[2]);
        }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
             won(data[5]);
        }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
             won(data[8]);
        }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
             won(data[6]);
        }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
             won(data[7]);
        }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[7]);
        }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
             won(data[8]);
        }else if(data[3]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
        

    }

    // what must happen if there is a winner

    const won =(winner)=>{
        setLock(true);

        if(winner==="x"){
            title.current.innerHTML=`Congratulations <img src='${cross_icon}'/> wins`

        }else{
            title.current.innerHTML=`Congratulations <img src='${circle_icon}'/> wins`
        }

    }
    const reset = ()=>{
        setLock(false);
        title.current.innerHTML='Tic Tac Toe in <span>React</span>';
        boxArry.map((box)=>{
            box.current.innerHTML=""
        });
    }

    return(
        <div className="container">
            <div className="header">
                <h1 className="head" ref={title}>Tic Tac Toe in <span>React</span></h1>

            </div>
            <div className="board-container">
                <div className="row">
                    <div className="box" onClick={(e)=>{toggle(e,0)}} ref={box1}></div>
                    <div className="box" onClick={(e)=>{toggle(e,1)}} ref={box2}></div>
                    <div className="box" onClick={(e)=>{toggle(e,2)}} ref={box3}></div>
                </div>
                <div className="row">
                    <div className="box" onClick={(e)=>{toggle(e,3)}} ref={box4}></div>
                    <div className="box" onClick={(e)=>{toggle(e,4)}} ref={box5}></div>
                    <div className="box" onClick={(e)=>{toggle(e,5)}} ref={box6}></div>
                </div>
                <div className="row">
                    <div className="box" onClick={(e)=>{toggle(e,6)}} ref={box7}></div>
                    <div className="box" onClick={(e)=>{toggle(e,7)}} ref={box8}></div>
                    <div className="box" onClick={(e)=>{toggle(e,8)}} ref={box9}></div>
                </div>
                

            </div>
            <button className="reset" onClick={()=>{reset()}}>Reset</button>
        </div>
    )
};

export default Tictac


