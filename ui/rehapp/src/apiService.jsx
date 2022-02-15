const addDiseases = async () => {
  const response = await fetch("http://localhost:5080/Diseases", {
    mode: "cors",
    headers: { accept: "*/*", "Content-Type": "application/json" },
    method: "POST",

    body: JSON.stringify({
      label: "htrsgf",
    }),
  });
  return response.json();
};
export default addDiseases;
