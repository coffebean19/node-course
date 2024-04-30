const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS 1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
  console.log("model");
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    upcoming: true,
    success: true,
    customers: ["ZTM", "NASA"],
    flightNumber: latestFlightNumber,
  }));
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};