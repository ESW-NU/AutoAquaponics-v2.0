import Backwashing from "./ControlPages/Backwashing";
import OnOffTimer from "../Components/OnOffTimer";
import FlowEntry from "../Components/FlowEntry";
import ControlEntry from "../Components/ControlEntry";

export const ControlPanel = () => {
  var timestamp = 1607110464663;
  var date = new Date(timestamp);

  console.log(
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
  );

  return (
    <div>
      Control Panel
      <OnOffTimer />
      <FlowEntry />
      <ControlEntry title="Backwash When Flow Rate Less Than (GPH)" />
    </div>
    // <Backwashing />
  );
};

// export default ControlPanel;
