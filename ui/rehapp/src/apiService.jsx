const addDiseases = async () => {
  const response = await fetch("https://localhost:7080/Diseases", {
    mode: "cors",
    headers: { accept: "*/*", "Content-Type": "application/json" },
    method: "POST",

    body: JSON.stringify({
      label: "alko",
    }),
  });
  return response.json();
};
export default addDiseases;
