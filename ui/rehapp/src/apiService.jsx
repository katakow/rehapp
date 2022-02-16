/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
const addDiseases = async () => {
  return fetch("http://localhost:5080/Diseases", {
    headers: { accept: "*/*", "Content-Type": "application/json" },
    method: "POST",

    body: JSON.stringify({
      label: "superchoroba",
    }),
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 600) {
        throw new Error("NIEPOPRAWNE DANE LOGOWANIA");
      }
      res.json();
    })
    .then((data) => {
      console.log(data);
      // return response.json();
    });
  // return resposne.json();
};
export default addDiseases;
