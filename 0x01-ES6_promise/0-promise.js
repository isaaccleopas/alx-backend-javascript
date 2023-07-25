export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiResponse = { data: "Some data from the API" };

      resolve(apiResponse);
    }, 2000);
  });
}
