# Kaiizen backend exercise

This is a Node/Typescript/Express exercise for backend roles at Kaiizen. It should take about 2 hours to complete. A very basic framework is provided so that you can focus on the implementation work rather than the plumbing. To begin, fork or clone this repo, then build the features described below.

## Exercise

### Background

You own and operate Greasy Wheel, a mediocre pizza delivery company. Greasy Wheel employs three drivers (Fry, Bender, and Leela), each of whom deliver pizzas via car to your customers.

Each employee starts their day at your central pizza kitchen in downtown Chicago, and loads up their car with enough pizzas to make all of their deliveries for the day. Then, they visit each delivery location one after another. Then, they return to the pizza kitchen to drop off the remaining pizzas to use for deliveries the next day (it's a _very_ mediocre pizza company).

### Problem

You need a dashboard to keep track of the deliveries that each driver is making. This dashboard should allow you to view all of the deliveries for all drivers, as well as recording new deliveries that each driver makes.

Additionally, the Pizza Delivery Drivers Union has negotiated that drivers cannot drive more than 100 miles in any given day. As a company owner, you need to monitor how far each driver drives each day, and make sure that you don't do a delivery if it'll cause the driver to exceed their daily mileage limit.

### Formal requirements

* **A "dashboard" interface** with a table listing all deliveries made by all drivers across all days. This should include the date of each delivery, which driver made it, and the lat/lng of the delivery.
* **A "new delivery" interface** that lets you create a delivery.
    * This should have the following fields:
        * Date of delivery
        * Driver (Fry, Bender, or Leela). It's fine to hardcode these driver names for this exercise.
        * Delivery location (lat/lng). You can use a map to set this, but it's not required. A Google Maps API key and example embed code is provided in the repo if you need.
    * If the form is submitted with a delivery that would cause the driver to exceed their miles, then an error should be shown and the delivery should not be created.
* **A "driver report" interface** with a table showing one row for each driver-day, where each row has the following fields:
    * Date
    * Driver name
    * Number of deliveries
    * Distance driven
* The distance driven for a driver each day is calculated using the euclidean distance ("as the crow flies") between points. Driven miles are tracked starting from when the driver leaves the pizza kitchen, and stop accruing once they arrive back at the kitchen at the end of the day.
* You must use Postgres, Node, and Typescript.

The kitchen's location is `{ lat: 41.8781, lng: -87.6298 }`.

#### If it'll take more than 2 hours

This is not designed to take all day; feel free to stop at the two hour mark if you're not finished with the requirements. The main parts that we want to at least see are:
* The database structure
* The algorithm to calculate distance per day, and how that's implemented

### Out of scope

* **Security.** You do not need any sort of authorization or authentication mechanism.
* **UI/UX.** You can have an ugly UI (like default browser styles), and it can have a weird user experience as long as it satisfies the requirements.
* **Sticking to the repo exactly.** Feel free to deviate from the structure or plumbing provided, and be prepared to explain your reasoning. As long you use Postgres, Node, and Typescript, nothing else matters.
* **Automated tests.** Feel free to write unit tests if they're helpful, but they're not necessary for this exercise.

### Getting started

This repo contains a barebones Node/Typescript/Express app with a Postgres database attached. To get started:

1. Clone this repo to your machine.
2. Run `docker-compose up` in the root of the repo in one terminal. This will bring up a Postgres database server with PostGIS installed. You can use PostGIS geospatial features if they're helpful, but it's not required.
3. In another terminal window, run `npm run start`. The server will auto-reload when you make changes.
4. Run `npm run migrate` to execute the `scripts/migrate.ts` file. This can be used to quickly create your database tables, but it's not required.
5. Open [http://127.0.0.1:3000] in your browser.
6. Edit the application code and refresh your browser to see the changes.

You can use `npm run test` to run unit tests via `vitest` if you need. An example test stub has been provided.

### Submitting your completed project

Please push your completed work to a new repo on Github or Gitlab or wherever, and send us a link. We'll schedule an hour meeting where we go over your solution together.
