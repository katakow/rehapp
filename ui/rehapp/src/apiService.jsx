const addDiseases = async () => {
<<<<<<< HEAD
  const response = await fetch("https://localhost:7080/Diseases", {
    mode: "cors",
=======
  const response = await fetch("http://localhost:5080/Diseases", {
>>>>>>> master
    headers: { accept: "*/*", "Content-Type": "application/json" },
    method: "POST",

    body: JSON.stringify({
      label: "alko",
    }),
  });
  return response.json();
};
export default addDiseases;
