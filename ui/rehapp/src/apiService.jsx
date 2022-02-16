const addDiseases = async () => {
  const response = await fetch("http://localhost:5080/Diseases", {
    headers: { accept: "*/*", "Content-Type": "application/json" },
    method: "POST",

    body: JSON.stringify({
      label: "alko",
    }),
  });
  return response.json();
};
export default addDiseases;
