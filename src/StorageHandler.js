// This file contains functions to handle storing and retrieving pin location data asynchronously using Local Storage.
// It provides methods for saving and retrieving data to and from LocalStorage
// The storage handler ensures asynchronous updates without disrupting the user experience.


// save pin location is an asynchronous function that passes the exact position of any of the markers to store 
// in local storage

export async function savePinLocation(latitude, longitude, latKey , lngKey ) {
  const data = {
    latitude,
    longitude,
  };
  // local storage's set item only accepts strings, so we need to stringify our JSON
  localStorage.setItem(latKey, JSON.stringify(latitude));
  localStorage.setItem(lngKey, JSON.stringify(longitude));
  // console.log('Pin location saved to Local Storage', data)
   // simulate an asynchronous operation with a delay
   await new Promise(resolve => setTimeout(resolve, 500));
}
  
  
  // this function uses the marker names/names given to values already saved in local storage
  //to retrieve the exact position of the marker from local storage
  export async function getPinLocation(latKey, lngKey) {
    // simulate an asynchronous operation with a delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const latData = localStorage.getItem(latKey);
    const lngData = localStorage.getItem(lngKey);
    
    if (latData && lngData) {
      // local storage's get item returns a string, so we need to parse it back to JSON
      const latitude = JSON.parse(latData);
      const longitude = JSON.parse(lngData);
      return { latitude, longitude };
    }
    
    return null;
  }
