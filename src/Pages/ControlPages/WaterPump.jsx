import {React, useState} from "react";
import OnOffTimer from "../../Components/OnOffTimer";
import FlowEntry from "../../Components/FlowEntry";

export const WaterPump = () => {
  const [onofftimer, setOnofftimer] = useState("off");
  const [flow, setFlow] = useState(0);
  const [time, setTime] = useState(0);

  const handleOnofftimerChange = (event) => {
    setOnofftimer(event.target.value);
  }

  const handleFlowChange = (event) => {
    setFlow(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  return (
    <div>
      <OnOffTimer onofftimer={onofftimer} handleOnofftimerChange={handleOnofftimerChange}/>
      {onofftimer}
      <FlowEntry flow={flow} time={time} handleFlowChange={handleFlowChange} handleTimeChange={handleTimeChange}/>
      {flow}
      {time}
    </div>
  );
}

export default WaterPump;