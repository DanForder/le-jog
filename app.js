// // 50.0657° N, 5.7132° W
// // 58.6373° N, 3.0689° W

console.log("app.js checked");

var map,
  flightPath,
  distanceTravelledMarker = 0;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 54.3, lng: -4.4 },
    mapTypeId: "terrain",
  });

  const route = [
    {
      lat: 58.63732,
      lng: -3.0689400000000004,
    },
    {
      lat: 58.6088,
      lng: -3.0801000000000003,
    },
    {
      lat: 58.577160000000006,
      lng: -3.0731100000000002,
    },
    {
      lat: 58.54656000000001,
      lng: -3.0927300000000004,
    },
    {
      lat: 58.5116,
      lng: -3.1481100000000004,
    },
    {
      lat: 58.48044,
      lng: -3.14108,
    },
    {
      lat: 58.450120000000005,
      lng: -3.09749,
    },
    {
      lat: 58.44126000000001,
      lng: -3.0942600000000002,
    },
    {
      lat: 58.393190000000004,
      lng: -3.1327900000000004,
    },
    {
      lat: 58.351020000000005,
      lng: -3.1585400000000003,
    },
    {
      lat: 58.32564000000001,
      lng: -3.19553,
    },
    {
      lat: 58.282790000000006,
      lng: -3.3605400000000003,
    },
    {
      lat: 58.25876,
      lng: -3.4067700000000003,
    },
    {
      lat: 58.228590000000004,
      lng: -3.4478100000000005,
    },
    {
      lat: 58.1968,
      lng: -3.4826400000000004,
    },
    {
      lat: 58.17638,
      lng: -3.5183600000000004,
    },
    {
      lat: 58.15514,
      lng: -3.5876600000000005,
    },
    {
      lat: 58.132920000000006,
      lng: -3.62415,
    },
    {
      lat: 58.083020000000005,
      lng: -3.7423900000000003,
    },
    {
      lat: 58.02394,
      lng: -3.8574800000000002,
    },
    {
      lat: 57.99775,
      lng: -3.8874800000000005,
    },
    {
      lat: 57.98776,
      lng: -3.9200100000000004,
    },
    {
      lat: 57.96595000000001,
      lng: -4.01196,
    },
    {
      lat: 57.954130000000006,
      lng: -4.075950000000001,
    },
    {
      lat: 57.93853000000001,
      lng: -4.08378,
    },
    {
      lat: 57.91720000000001,
      lng: -4.0608900000000006,
    },
    {
      lat: 57.885470000000005,
      lng: -4.0819600000000005,
    },
    {
      lat: 57.85358000000001,
      lng: -4.111750000000001,
    },
    {
      lat: 57.82875000000001,
      lng: -4.0835,
    },
    {
      lat: 57.80337000000001,
      lng: -4.050400000000001,
    },
    {
      lat: 57.784800000000004,
      lng: -4.02353,
    },
    {
      lat: 57.772090000000006,
      lng: -4.0328,
    },
    {
      lat: 57.74418000000001,
      lng: -4.07653,
    },
    {
      lat: 57.71209,
      lng: -4.16612,
    },
    {
      lat: 57.674490000000006,
      lng: -4.30585,
    },
    {
      lat: 57.642320000000005,
      lng: -4.3467,
    },
    {
      lat: 57.612390000000005,
      lng: -4.35709,
    },
    {
      lat: 57.58652000000001,
      lng: -4.36064,
    },
    {
      lat: 57.56242,
      lng: -4.33922,
    },
    {
      lat: 57.54075,
      lng: -4.33546,
    },
    {
      lat: 57.50011000000001,
      lng: -4.23148,
    },
    {
      lat: 57.46173,
      lng: -4.16856,
    },
    {
      lat: 57.427130000000005,
      lng: -4.12619,
    },
    {
      lat: 57.389860000000006,
      lng: -4.1222,
    },
    {
      lat: 57.37845000000001,
      lng: -4.04356,
    },
    {
      lat: 57.353970000000004,
      lng: -4.00509,
    },
    {
      lat: 57.308620000000005,
      lng: -3.9398400000000002,
    },
    {
      lat: 57.290940000000006,
      lng: -3.9012100000000003,
    },
    {
      lat: 57.279860000000006,
      lng: -3.8310100000000005,
    },
    {
      lat: 57.23436,
      lng: -3.8101700000000003,
    },
    {
      lat: 57.204080000000005,
      lng: -3.8323000000000005,
    },
    {
      lat: 57.17016,
      lng: -3.8568400000000005,
    },
    {
      lat: 57.13938,
      lng: -3.9177700000000004,
    },
    {
      lat: 57.08919,
      lng: -4.03052,
    },
    {
      lat: 57.04728000000001,
      lng: -4.13388,
    },
    {
      lat: 56.972240000000006,
      lng: -4.18628,
    },
    {
      lat: 56.92584000000001,
      lng: -4.23618,
    },
    {
      lat: 56.87169000000001,
      lng: -4.2568,
    },
    {
      lat: 56.8308,
      lng: -4.21891,
    },
    {
      lat: 56.817800000000005,
      lng: -4.15827,
    },
    {
      lat: 56.80178000000001,
      lng: -4.04699,
    },
    {
      lat: 56.769470000000005,
      lng: -3.9274700000000005,
    },
    {
      lat: 56.75699,
      lng: -3.82046,
    },
    {
      lat: 56.74960000000001,
      lng: -3.7806300000000004,
    },
    {
      lat: 56.73310000000001,
      lng: -3.7715300000000003,
    },
    {
      lat: 56.70788,
      lng: -3.7529900000000005,
    },
    {
      lat: 56.688,
      lng: -3.7054400000000003,
    },
    {
      lat: 56.64406,
      lng: -3.65492,
    },
    {
      lat: 56.57658000000001,
      lng: -3.6215,
    },
    {
      lat: 56.53763000000001,
      lng: -3.5350300000000003,
    },
    {
      lat: 56.463750000000005,
      lng: -3.47873,
    },
    {
      lat: 56.41955000000001,
      lng: -3.4646000000000003,
    },
    {
      lat: 56.38996,
      lng: -3.4877900000000004,
    },
    {
      lat: 56.344080000000005,
      lng: -3.5849900000000003,
    },
    {
      lat: 56.29421000000001,
      lng: -3.6907600000000005,
    },
    {
      lat: 56.26619,
      lng: -3.7564300000000004,
    },
    {
      lat: 56.254290000000005,
      lng: -3.83578,
    },
    {
      lat: 56.19632000000001,
      lng: -3.9771300000000003,
    },
    {
      lat: 56.13846,
      lng: -3.9713300000000005,
    },
    {
      lat: 56.05503,
      lng: -3.92301,
    },
    {
      lat: 56.010310000000004,
      lng: -3.91957,
    },
    {
      lat: 55.977720000000005,
      lng: -3.9478400000000002,
    },
    {
      lat: 55.91805000000001,
      lng: -4.064,
    },
    {
      lat: 55.85777,
      lng: -4.086740000000001,
    },
    {
      lat: 55.82865,
      lng: -4.09205,
    },
    {
      lat: 55.78567,
      lng: -4.02918,
    },
    {
      lat: 55.75665000000001,
      lng: -3.9734400000000005,
    },
    {
      lat: 55.723710000000004,
      lng: -3.9550300000000003,
    },
    {
      lat: 55.69825,
      lng: -3.94593,
    },
    {
      lat: 55.6542,
      lng: -3.8983900000000005,
    },
    {
      lat: 55.607580000000006,
      lng: -3.84249,
    },
    {
      lat: 55.52946000000001,
      lng: -3.77294,
    },
    {
      lat: 55.51088000000001,
      lng: -3.7021400000000004,
    },
    {
      lat: 55.474430000000005,
      lng: -3.6947200000000002,
    },
    {
      lat: 55.459810000000004,
      lng: -3.6457,
    },
    {
      lat: 55.441810000000004,
      lng: -3.6516100000000002,
    },
    {
      lat: 55.428960000000004,
      lng: -3.6252100000000005,
    },
    {
      lat: 55.40964,
      lng: -3.5664100000000003,
    },
    {
      lat: 55.39204,
      lng: -3.5236600000000005,
    },
    {
      lat: 55.35855,
      lng: -3.5130100000000004,
    },
    {
      lat: 55.322160000000004,
      lng: -3.46736,
    },
    {
      lat: 55.25011000000001,
      lng: -3.4097700000000004,
    },
    {
      lat: 55.18717,
      lng: -3.40708,
    },
    {
      lat: 55.14692,
      lng: -3.3801900000000002,
    },
    {
      lat: 55.07844000000001,
      lng: -3.3118700000000003,
    },
    {
      lat: 55.009550000000004,
      lng: -3.0857300000000003,
    },
    {
      lat: 54.940020000000004,
      lng: -2.96593,
    },
    {
      lat: 54.92624000000001,
      lng: -2.9144900000000002,
    },
    {
      lat: 54.880990000000004,
      lng: -2.88179,
    },
    {
      lat: 54.819410000000005,
      lng: -2.88655,
    },
    {
      lat: 54.76675,
      lng: -2.8390400000000002,
    },
    {
      lat: 54.675000000000004,
      lng: -2.7785,
    },
    {
      lat: 54.62886,
      lng: -2.72397,
    },
    {
      lat: 54.56936,
      lng: -2.6892400000000003,
    },
    {
      lat: 54.46354,
      lng: -2.62008,
    },
    {
      lat: 54.42231,
      lng: -2.59993,
    },
    {
      lat: 54.383160000000004,
      lng: -2.58198,
    },
    {
      lat: 54.35709000000001,
      lng: -2.61551,
    },
    {
      lat: 54.324940000000005,
      lng: -2.62934,
    },
    {
      lat: 54.2595,
      lng: -2.6859300000000004,
    },
    {
      lat: 54.23350000000001,
      lng: -2.71938,
    },
    {
      lat: 54.194340000000004,
      lng: -2.72384,
    },
    {
      lat: 54.12903000000001,
      lng: -2.74908,
    },
    {
      lat: 54.059180000000005,
      lng: -2.7688300000000003,
    },
    {
      lat: 53.998520000000006,
      lng: -2.78038,
    },
    {
      lat: 53.95138000000001,
      lng: -2.7510000000000003,
    },
    {
      lat: 53.85685,
      lng: -2.7365600000000003,
    },
    {
      lat: 53.806740000000005,
      lng: -2.6974,
    },
    {
      lat: 53.778600000000004,
      lng: -2.6466800000000004,
    },
    {
      lat: 53.746010000000005,
      lng: -2.64867,
    },
    {
      lat: 53.709810000000004,
      lng: -2.67266,
    },
    {
      lat: 53.65231000000001,
      lng: -2.69096,
    },
    {
      lat: 53.583650000000006,
      lng: -2.69354,
    },
    {
      lat: 53.53479,
      lng: -2.6977900000000004,
    },
    {
      lat: 53.505300000000005,
      lng: -2.6632700000000002,
    },
    {
      lat: 53.44444000000001,
      lng: -2.58855,
    },
    {
      lat: 53.385740000000006,
      lng: -2.5045900000000003,
    },
    {
      lat: 53.33892,
      lng: -2.4871700000000003,
    },
    {
      lat: 53.310750000000006,
      lng: -2.41326,
    },
    {
      lat: 53.21059,
      lng: -2.3880500000000002,
    },
    {
      lat: 53.15343000000001,
      lng: -2.3466600000000004,
    },
    {
      lat: 53.09666000000001,
      lng: -2.34263,
    },
    {
      lat: 53.003220000000006,
      lng: -2.3255000000000003,
    },
    {
      lat: 52.98738,
      lng: -2.2530400000000004,
    },
    {
      lat: 52.961090000000006,
      lng: -2.22038,
    },
    {
      lat: 52.866870000000006,
      lng: -2.1651100000000003,
    },
    {
      lat: 52.82536,
      lng: -2.1463300000000003,
    },
    {
      lat: 52.787490000000005,
      lng: -2.13865,
    },
    {
      lat: 52.760560000000005,
      lng: -2.1039600000000003,
    },
    {
      lat: 52.700950000000006,
      lng: -2.10344,
    },
    {
      lat: 52.595890000000004,
      lng: -2.01525,
    },
    {
      lat: 52.53848000000001,
      lng: -1.9689,
    },
    {
      lat: 52.50600000000001,
      lng: -1.98479,
    },
    {
      lat: 52.48602,
      lng: -2.02426,
    },
    {
      lat: 52.444230000000005,
      lng: -2.01772,
    },
    {
      lat: 52.402080000000005,
      lng: -2.0481800000000003,
    },
    {
      lat: 52.37122,
      lng: -2.05324,
    },
    {
      lat: 52.34655000000001,
      lng: -2.07643,
    },
    {
      lat: 52.300610000000006,
      lng: -2.1130400000000003,
    },
    {
      lat: 52.25509,
      lng: -2.13469,
    },
    {
      lat: 52.18433,
      lng: -2.17084,
    },
    {
      lat: 52.14428,
      lng: -2.19424,
    },
    {
      lat: 52.10394,
      lng: -2.19002,
    },
    {
      lat: 52.05691,
      lng: -2.14176,
    },
    {
      lat: 52.018600000000006,
      lng: -2.1202,
    },
    {
      lat: 51.961580000000005,
      lng: -2.1282900000000002,
    },
    {
      lat: 51.917460000000005,
      lng: -2.1488300000000002,
    },
    {
      lat: 51.85806,
      lng: -2.17289,
    },
    {
      lat: 51.8209,
      lng: -2.2230800000000004,
    },
    {
      lat: 51.779430000000005,
      lng: -2.3075,
    },
    {
      lat: 51.67813,
      lng: -2.40294,
    },
    {
      lat: 51.607490000000006,
      lng: -2.46945,
    },
    {
      lat: 51.55125,
      lng: -2.55308,
    },
    {
      lat: 51.44923000000001,
      lng: -2.80107,
    },
    {
      lat: 51.431450000000005,
      lng: -2.83923,
    },
    {
      lat: 51.370810000000006,
      lng: -2.8879300000000003,
    },
    {
      lat: 51.32533,
      lng: -2.8917800000000002,
    },
    {
      lat: 51.29674000000001,
      lng: -2.8928000000000003,
    },
    {
      lat: 51.26436,
      lng: -2.92205,
    },
    {
      lat: 51.200540000000004,
      lng: -2.96816,
    },
    {
      lat: 51.134930000000004,
      lng: -2.96828,
    },
    {
      lat: 51.05854,
      lng: -3.0221700000000005,
    },
    {
      lat: 51.000460000000004,
      lng: -3.07886,
    },
    {
      lat: 50.975820000000006,
      lng: -3.1527800000000004,
    },
    {
      lat: 50.940470000000005,
      lng: -3.2933800000000004,
    },
    {
      lat: 50.914100000000005,
      lng: -3.36031,
    },
    {
      lat: 50.848890000000004,
      lng: -3.38674,
    },
    {
      lat: 50.763450000000006,
      lng: -3.45861,
    },
    {
      lat: 50.69001,
      lng: -3.47955,
    },
    {
      lat: 50.69198,
      lng: -3.53839,
    },
    {
      lat: 50.720180000000006,
      lng: -3.5987000000000005,
    },
    {
      lat: 50.729440000000004,
      lng: -3.6921200000000005,
    },
    {
      lat: 50.71929,
      lng: -3.79267,
    },
    {
      lat: 50.739430000000006,
      lng: -3.9152000000000005,
    },
    {
      lat: 50.694720000000004,
      lng: -4.131010000000001,
    },
    {
      lat: 50.65341,
      lng: -4.292210000000001,
    },
    {
      lat: 50.628530000000005,
      lng: -4.35576,
    },
    {
      lat: 50.60464,
      lng: -4.4518,
    },
    {
      lat: 50.58308,
      lng: -4.53552,
    },
    {
      lat: 50.53757,
      lng: -4.59834,
    },
    {
      lat: 50.508140000000004,
      lng: -4.66187,
    },
    {
      lat: 50.477250000000005,
      lng: -4.69948,
    },
    {
      lat: 50.44966,
      lng: -4.69756,
    },
    {
      lat: 50.42109000000001,
      lng: -4.8346,
    },
    {
      lat: 50.41413000000001,
      lng: -4.89208,
    },
    {
      lat: 50.382220000000004,
      lng: -4.93186,
    },
    {
      lat: 50.354960000000005,
      lng: -4.99488,
    },
    {
      lat: 50.33809,
      lng: -5.05229,
    },
    {
      lat: 50.269380000000005,
      lng: -5.173190000000001,
    },
    {
      lat: 50.19675,
      lng: -5.397970000000001,
    },
    {
      lat: 50.16134,
      lng: -5.461600000000001,
    },
    {
      lat: 50.13425,
      lng: -5.49056,
    },
    {
      lat: 50.11393,
      lng: -5.556870000000001,
    },
    {
      lat: 50.091120000000004,
      lng: -5.628590000000001,
    },
    {
      lat: 50.06557,
      lng: -5.713080000000001,
    },
  ];

  flightPath = new google.maps.Polyline({
    path: route,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

function setDistanceTravelledMarker(distanceTravelled) {
  if (distanceTravelledMarker !== 0) {
    distanceTravelledMarker.setMap(null);
  }

  const polyLengthInMetres = google.maps.geometry.spherical.computeLength(
    flightPath.getPath().getArray()
  );

  const distanceTravelledPosition = getDistanceMarker(
    flightPath.getPath().getArray(),
    polyLengthInMetres,
    distanceTravelled
  );

  distanceTravelledMarker = new google.maps.Marker({
    position: distanceTravelledPosition,
    map: map,
  });
}

function getDistanceMarker(points, totalDistance, distanceTravelled) {
  const percentageTravelled =
    totalDistance * (1 - distanceTravelled / totalDistance);

  let tempDistance = percentageTravelled;
  let markerLatLng;

  // We go through each segment of the line
  for (let i = 0; i < points.length - 1; i++) {
    let segment = points.slice(i, i + 2);
    let length = google.maps.geometry.spherical.computeLength(segment);
    tempDistance = tempDistance - length;

    // If we're at zero or below, we've found the line where our midpoint exists
    if (tempDistance <= 0) {
      // We've gone past the midpoint so we need to back up.
      let midpointLength = tempDistance + length;

      // The proportion of the current segment where our midpoint exists
      let percentage = midpointLength / length;

      markerLatLng = google.maps.geometry.spherical.interpolate(
        segment[0],
        segment[1],
        percentage
      );
      break;
    }
  }

  if (typeof markerLatLng === "undefined") {
    // we don't have a midpoint for this polyline, something went very wrong
    return false;
  } else {
    return markerLatLng;
  }
}

let handleWhereAmI = () => {
  const distanceTravelledMetres =
    document.getElementById("distance-travelled").value * 1000;

  setDistanceTravelledMarker(distanceTravelledMetres);
};

// function initMap() {
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer();
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 6,
//     center: { lat: 54.3, lng: -4.4 },
//   });

//   directionsRenderer.setMap(map);

//   calculateAndDisplayRoute(directionsService, directionsRenderer);
// }

// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//   const waypts = [];
//   const checkboxArray = document.getElementById("waypoints");

//   //   waypts.push({
//   //     location: { lat: 58.6373, lng: -3.0689 },
//   //     stopover: true,
//   //   });

//   //   waypts.push({
//   //     location: { lat: 50.0657, lng: -5.7132 },
//   //     stopover: true,
//   //   });

//   directionsService.route(
//     {
//       origin: { lat: 58.6373, lng: -3.0689 },
//       destination: { lat: 50.0657, lng: -5.7132 },
//       //   waypoints: waypts,
//       optimizeWaypoints: true,
//       travelMode: google.maps.TravelMode.DRIVING,
//     },
//     (response, status) => {
//       if (status === "OK") {
//         directionsRenderer.setDirections(response);
//         const route = response.routes[0];
//         console.log(route);
//       } else {
//         window.alert("Directions request failed due to " + status);
//       }
//     }
//   );

// }
