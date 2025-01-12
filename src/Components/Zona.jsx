import React from "react";
import Button from "@mui/material/Button";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import  { useState } from "react";

// or
export function Zona() {

    const [tempSelected, setTempSelected] = useState(22);
    const [textButonOnOff, setTextButonOnOff] = useState("OFF");

    const tempChangeUp = ()=>{
        if(tempSelected < 30){
            setTempSelected(tempSelected + 0.5);
        };
    };
    const tempChangeDown = ()=>{
        if(tempSelected > 20){
            setTempSelected(tempSelected - 0.5);
        };
    };
    const buttonOffOn = () =>{
        if(textButonOnOff === "OFF"){
            setTextButonOnOff("ON");
        }else{
            setTextButonOnOff("OFF");
        };
    };

  return (
    <div>
      <div id="idBotonera">
      <Button
      
          className="button_temp"
          variant="outlined"
          size="small"
          onClick={()=>{buttonOffOn()}}
         
        >
          {textButonOnOff}
        </Button>
        <Button
          className="button_temp"
          variant="outlined"
          size="small"
          onClick={()=>{tempChangeUp()}}
          endIcon={<KeyboardArrowUpIcon />}
        >
          UP
        </Button>

        <Button
          className="button_temp"
          variant="outlined"
          size="small"
          onClick={()=>{tempChangeDown()}}
          startIcon={<KeyboardArrowDownIcon />}
        >
          DOWN
        </Button>

        <div>
          <span>{tempSelected}</span>
          <span className="button_temp">ºC</span> {/* O puedes usar <p> si prefieres párrafo */}
        </div>

      </div>
    </div>
  );
}
