import './Room.css'

import React, {useState} from 'react';

function Room() {
  let [isLit, setLit] = useState(false);
  let [roomtmp, setRoomtmp] = useState(22);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
        This room is {isLit ? 'lit' : 'dark'}
        <br/>

        <button onClick = {() => {setLit(true)}}> ON </button>
        <button onClick = {() => {setLit(false)}}> OFF </button>

        <br/>
        The room temperature is currently {roomtmp}
        <br/>

        <button onClick ={() => {setRoomtmp(++roomtmp)}}>+ </button>
        <button onClick ={() => {setRoomtmp(--roomtmp)}}>- </button>
    </div>
  );
}

export default Room;
