const moment = require("moment");
const _ = require("lodash");

const flight = [
  {
    id: 1,
    airline_code: "ai",
    airline: "Air India",
    number: "AI-202",
    from: "PUNE",
    to: "DELHI",
    from_code: "PNQ",
    to_code: "DEL",
    depart_date: "Thu Jan 07 2021 17:03:07 GMT+0530 (IST)",
    arrive_date: "Thu Jan 07 2021 19:03:07 GMT+0530 (IST)",
    price: 2500,
    return_trip: {
      airline: "Air India",
      number: "AI-203",
      from: "DELHI",
      to: "PUNE",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: "Thu Jan 08 2021 10:03:07 GMT+0530 (IST)",
      arrive_date: "Thu Jan 08 2021 12:03:07 GMT+0530 (IST)",
      price: 500,
    },
  },
  {
    id: 2,
    airline_code: "indigo",
    airline: "Indigo",
    number: "IND-202",
    from: "HYDERABAD",
    to: "DELHI",
    from_code: "HYD",
    to_code: "DEL",
    depart_date: "Thu Jan 07 2021 15:03:07 GMT+0530 (IST)",
    arrive_date: "Thu Jan 07 2021 17:03:07 GMT+0530 (IST)",
    price: 5100,
    return_trip: {
      airline: "Indigo",
      number: "IND-203",
      from: "DELHI",
      to: "HYDERABAD",
      from_code: "DEL",
      to_code: "HYD",
      depart_date: "Thu Jan 08 2021 09:03:07 GMT+0530 (IST)",
      arrive_date: "Thu Jan 08 2021 11:03:07 GMT+0530 (IST)",
      price: 1500,
    },
  },
  {
    id: 3,
    airline_code: "ai",
    airline: "Air India",
    number: "AI-204",
    from: "PUNE",
    to: "DELHI",
    from_code: "PNQ",
    to_code: "DEL",
    depart_date: "Thu Jan 07 2021 17:03:07 GMT+0530 (IST)",
    arrive_date: "Thu Jan 07 2021 19:03:07 GMT+0530 (IST)",
    price: 2000,
    return_trip: {
      airline: "Air India",
      number: "AI-205",
      from: "DELHI",
      to: "PUNE",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: "Thu Jan 07 2021 10:03:07 GMT+0530 (IST)",
      arrive_date: "Thu Jan 08 2021 12:03:07 GMT+0530 (IST)",
      price: 500,
    },
  },
  {
    id: 4,
    airline_code: "indigo",
    airline: "Indigo",
    number: "IND-204",
    from: "HYDERABAD",
    to: "DELHI",
    from_code: "HYD",
    to_code: "DEL",
    depart_date: "Thu Jan 07 2021 15:03:07 GMT+0530 (IST)",
    arrive_date: "Thu Jan 07 2021 17:03:07 GMT+0530 (IST)",
    price: 6000,
    return_trip: {
      airline: "Indigo",
      number: "IND-205",
      from: "DELHI",
      to: "HYDERABAD",
      from_code: "DEL",
      to_code: "HYD",
      depart_date: "Thu Jan 08 2021 09:03:07 GMT+0530 (IST)",
      arrive_date: "Thu Jan 08 2021 11:03:07 GMT+0530 (IST)",
      price: 1500,
    },
  },
];

export function getFlights(origin, destination, date, range) {
  const date1 = moment(date);
  const array = [];

  flight.forEach((f) => {
    if (moment(date1).isSame(f.depart_date, "day")) {
      if (_.inRange(f.price, range[0], range[1])) {
        if (_.isEqual(origin, f.from.toLowerCase())) {
          if (_.isEqual(destination, f.to.toLowerCase())) array.push(f);
        }
      }
    }
  });

  return array;
}
