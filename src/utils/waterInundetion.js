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
  let hashmap = {};
  let result = [];
  arr.forEach((element, index) => {
    let lat1 = origin[0];
    let lat2 = element[0];
    let lon1 = origin[1];
    let lon2 = element[1];
    const d = distance(lat1, lat2, lon1, lon2);
    if (lat2 - lat1 >= 0 && lon2 - lon1 >= 0) Q1.push(d);
    if (lat2 - lat1 < 0 && lon2 - lon1 >= 0) Q2.push(d);
    if (lat2 - lat1 < 0 && lon2 - lon1 < 0) Q3.push(d);
    if (lat2 - lat1 >= 0 && lon2 - lon1 < 0) Q4.push(d);
    hashmap[index] = d;
  });
  console.log(hashmap);
  console.log(Q1, Q2, Q3, Q4);

  const max1 = Math.max(...Q1);
  console.log(max1);
  for (const key in hashmap) {
    if (Object.hasOwnProperty.call(hashmap, key)) {
      if (max1 === hashmap[key]) result.push(key);
      //   console.log("here,", max1, key);
    }
  }

  const max2 = Math.max(...Q2);
  for (const key in hashmap) {
    if (Object.hasOwnProperty.call(hashmap, key)) {
      if (max2 === hashmap[key]) result.push(key);
      //   console.log("here,", max2, key);
    }
  }
  const max3 = Math.max(...Q3);
  for (const key in hashmap) {
    if (Object.hasOwnProperty.call(hashmap, key)) {
      if (max3 === hashmap[key]) result.push(key);
      //   console.log("here,", max3, key);
    }
  }
  const max4 = Math.max(...Q4);
  for (const key in hashmap) {
    if (Object.hasOwnProperty.call(hashmap, key)) {
      if (max4 === hashmap[key]) result.push(key);
      //   console.log("here,", max4, key);
    }
  }

  return result;
};

const arr = [
  [-67.13734, 45.13745],
  [-66.96466, 44.8097],
  [-68.03252, 44.3252],
  [-69.06, 43.98],
  [-70.11617, 43.68405],
  [-70.64573, 43.09008],
  [-70.75102, 43.08003],
  [-70.79761, 43.21973],
  [-70.98176, 43.36789],
  [-70.94416, 43.46633],
  [-71.08482, 45.30524],
  [-70.66002, 45.46022],
  [-70.30495, 45.91479],
  [-70.00014, 46.69317],
  [-69.23708, 47.44777],
  [-68.90478, 47.18479],
  [-68.2343, 47.35462],
  [-67.79035, 47.06624],
  [-67.79141, 45.70258],
  [-67.13734, 45.13745],
];

console.log(extremeSquare(arr, [-68.137343, 45.137451]));

// export default extremeSquare;
