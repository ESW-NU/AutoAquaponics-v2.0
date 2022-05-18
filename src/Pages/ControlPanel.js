import Backwashing from './ControlPages/Backwashing.js'
import OnOffTimer from '../Components/OnOffTimer.js';
import FlowEntry from '../Components/FlowEntry.js';
import ControlEntry from '../Components/ControlEntry.js';

export const ControlPanel = () => {
    return (
        <div>
            Control Panel
            <OnOffTimer/>
            <FlowEntry/>
            <ControlEntry title="Backwash When Flow Rate Less Than (GPH)"/>
        </div>
        // <Backwashing />
    );
}

// export default ControlPanel;