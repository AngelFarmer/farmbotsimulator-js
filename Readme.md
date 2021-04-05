# Farmbot Simulator

Farmbot Simulator provides a means of simulating FarmBot (Humanity's first open source CNC agricultural robot). The simulation may be useful in:

- Schools. It eliminates the cost of acquiring a physical machine while creating several instances of the machine for students. For how it can be used in education see these discussion: 
- Research. It is now possible to use FarmBot software to research new hardware that can eliminate the constraints posed by the FarmBot hardware, chiefly: high cost and size limitations. For such use in research, please see FarmBot-Mega and FarmBot-Juakali.
- Software development. Custom FarmBot web application software can be created and tested without a physical FarmBot.

But this is just a node-js module. For a working simulation, see FarmBot-Simulator.

## Installation

```bash
npm install farmbotsimulator-js
```

## Usage

```bash
import {statemanager, simulator} from "farmbotsimulator-js"
import events from "events"

const eventEmitter = new events();

//new simulator(eventEmitter);
let stateController = new statemanager({events:eventEmitter});

let [err, care] = await to(
      stateController.checkTokenAndRefresh()
    );
if (err) {
    throw err;
}
stateController.loggedIn(care);

// connect to web applications (mqtt, web app)
stateController.startOrRestartSimulator();

```



## Notes

[Farmbot Max]([https://farm.bot/blogs/news/putting-farmbot-genesis-max-and-express-max-on-hold)

net