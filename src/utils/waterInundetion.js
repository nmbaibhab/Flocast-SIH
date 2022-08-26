function distance(lat1, lat2, lon1, lon2) {
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return c * r;
}

const extremeSquare = (arr, origin) => {
  let Q1 = [],
    Q2 = [],
    Q3 = [],
    Q4 = [];
  arr.forEach((element, index) => {
    let lat1 = origin[0];
    let lat2 = element[0];
    let lon1 = origin[1];
    let lon2 = element[1];
    let hashmap = {};
    const d = distance(lat1, lat2, lon1, lon2);
    if (lat2 - lat1 >= 0 && lon2 - lon1 >= 0) Q1.push(d);
    if (lat2 - lat1 < 0 && lon2 - lon1 >= 0) Q2.push(d);
    if (lat2 - lat1 < 0 && lon2 - lon1 < 0) Q3.push(d);
    if (lat2 - lat1 >= 0 && lon2 - lon1 < 0) Q4.push(d);
    hashmap[index] = d;
  });
  return [Math.max(Q1), Math.max(Q2), Math.max(Q3), Math.max(Q4)];
};
export default extremeSquare;
