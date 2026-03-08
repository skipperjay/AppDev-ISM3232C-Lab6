import { PopulationServiceImpl } from "./services";

// 1. Initialize the service
const service = new PopulationServiceImpl("https://api.worldbank.org");

// 2. call the API to get countries
console.log("Checking if the project works...");

// Notice I added ": any" to the variables below to satisfy the strict rules
service.getAllCountries().then((countries: any) => {
    console.log(`SUCCESS! We found ${countries.length} countries.`);
    console.log("Here is the first one:", countries[0]);
}).catch((error: any) => {
    console.error("FAILURE: Something went wrong:", error);
});
