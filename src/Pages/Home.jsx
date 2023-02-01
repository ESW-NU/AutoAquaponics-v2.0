import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../CSS/pages.css"
import AboutSection from "../Components/AboutSection";

const systemCAD = require("../Lib/PlumbingCADclear.webp");
const plumbing = require("../Lib/plumbing.webp");
const outlet = require("../Lib/outlet.webp");
const rpi = require("../Lib/rpi.webp");
const software1 = require("../Lib/software1.webp");
const software2 = require("../Lib/software2.webp");
const fish = require("../Lib/fish.webp");
const topView = require("../Lib/top_view.webp");
const team = require("../Lib/team.webp");
const motorized = require("../Lib/motorized.webp");
const sensor = require("../Lib/sensor.webp");
const plants = require("../Lib/plants.webp");
const biofilm = require("../Lib/biofilm.webp");
const filter = require("../Lib/filter.webp");
const flow = require("../Lib/flow.webp");
const sump = require("../Lib/sump.webp");
const videoStream = require("../Lib/videoStream.webp");
const code = require("../Lib/code.webp");
const esw = require("../Lib/esw.webp");
const wildIdeas = require("../Lib/wild-ideas.webp");
const msab = require("../Lib/msab.webp");

export const Home = () => {
  return (
    <div className="App">
      <div className="Pages">
        <Grid
          container
          columns={12}
          direction='row-reverse'
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={10} lg={5}>
              <Typography variant="h1">Northwestern AutoAquaponics</Typography>
              <br></br>
              <Typography variant="h3">
                A fully automated aquaponic system that grows both fish and
                plants unattended for months and can be
                <NavLink to="/dashboard">monitored</NavLink>and
                <NavLink to="/control-panel/tolerances">controlled</NavLink>
                remotely
              </Typography>
          </Grid>
          <Grid item xs={10} lg={6}>
            <div className="image-container">
              <img src={systemCAD} className="autoscaling-image" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="About">
        <AboutSection
          image_left={false}
          title={'Plumbing'}
          images={[plumbing, sump, flow, filter]}
        >
          Our plumbing system serves as the backbone of AutoAquaponics and facilitates the efficient
          transport of nutrients to the plants. It also removes solid waste and potentially toxic
          contaminants from the fish tank to ensure the health of our fish. AutoAquaponics’ plumbing
          consists of a 100 gallon fish tank, two 40 gallon grow beds, a 60 gallon sump tank, and a
          three-stage filtration system. The filter system includes a settling tank, a membrane
          filtration tank, and a biofilm reactor to convert ammonia from fish waste into nitrate for
          the plants.
        </AboutSection>
        <AboutSection
          image_left={true}
          title={'Electronics'}
          images={[sensor, rpi, outlet, motorized]}
        >
          These electronics put the Auto in AutoAquaponics, and allow us to both monitor and control
          the system from anywhere in the world. Our electrical system currently features a smart
          outlet box powered by an ESP32 microcontroller that automatically toggles the lights and
          motorized ball valves in the system, allowing us to flood our two grow beds at different
          intervals and control how much light our plants get. The outlet box also communicates with
          our sensor box via Bluetooth Low Energy. The sensor box contains a Raspberry Pi and a
          number of environmental sensors (pH, TDS, air/water temperature, relative humidity, water
          level) to help us understand the state of the system in real time. The Raspberry Pi pushes
          the sensor data to a remote Firebase database, which can be seen on the Dashboard page.
        </AboutSection>
        <AboutSection
          image_left={false}
          title={'Software'}
          images={[software1, videoStream, code, software2]}
        >
          AutoAquaponics’ software allows users to monitor and control the system remotely, and it
          uses Python and C++ to run the electronics that interact with our physical system. Our
          platform is built with React and Google Firebase, and it features a live dashboard that
          users can look at to monitor AutoAquaponics’ current state. The graphs are interactive,
          and toggle to display up to 7 days of data at once. Some future developments on the
          software side include creating the Control Panel, Settings, and Video Stream pages.
          Control Panel and Settings will enable people with the appropriate credentials to receive
          automated email/text updates on the system and toggle our smart outlet box to change
          lighting/flooding durations. Video Stream will include a live stream video of our fish
          that anyone can access. Stay tuned for more!
        </AboutSection>
        <AboutSection
          image_left={true}
          title={'Biology'}
          images={[fish, topView, biofilm, plants]}
        >
          Biology is an integral part of any farming system, and ours is no exception.
          AutoAquaponics cycles nutrients between aquatic animals, microbes, and plants, all of
          which interact in a symbiotic manner. Food starts out in the fish tank, where it is
          consumed and transformed into solid waste by the fish. This waste gets broken down by the
          heterotrophic bacteria in the filters and turns into ammonia. The ammonia in the water
          then gets captured by the nitrifying microbes, transforming it into nitrite and then
          nitrate. This final product becomes the fertilizer that our plants uptake through their
          roots to make protein and grow. We are currently cultivating wheatgrass, kale, and basil
          in our grow beds, and our fish tank is stocked with tiger barbs, mollies, South American
          cichlids, a Raphael catfish, and a red tailed shark. We also have many invertebrates
          living in the system (ramshorn snails, cherry shrimps, and gammarus pulex) to serve as
          live food sources for the fish.
        </AboutSection>
        <AboutSection
          image_left={true}
          title={'Contact'}
          images={[team]}
        >
          Email: <a target='_blank' href='mailto:contact.eswnu@gmail.com'>contact.eswnu@gmail.com</a>
          <br/>
          Project Blog:<a target='_blank' href='https://eswprojects.planio.com/projects/autoaquaponics'>eswprojects.planio.com/projects/autoaquaponics</a>
          <br></br>
          Download or contribute to our code on<a target='_blank' href='https://github.com/ESW-NU/AutoAquaponics-v2.0/tree/deploy'>GitHub</a>
          <br/><br/>
          This project was founded under<a className='NU' target='_blank' href='https://esw-nu.github.io/'>Engineers for a Sustainable World @ Northwestern</a>
          <br/><br/>
          <i>Made possible with the support of:</i>
          <Grid
            container
            columns={4}
            alignItems='center'
            justifyContent='space-evenly'
          >
            <Grid item xs={1} size='contain'>
              <img src={esw} style={{width: '90%', height: 'auto'}}/>
            </Grid>
            <Grid item xs='auto' size='contain'>
              <img src={wildIdeas} style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </Grid>
            <Grid item xs='auto' size='contain'>
              <img src={msab} style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </Grid>
          </Grid>
        </AboutSection>
      </div>
    </div>
  );
};