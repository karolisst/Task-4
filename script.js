/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch("./cars.json")
  .then((response) => response.json())
  .then((result) => {
    const output = document.getElementById("output");

    result.forEach((car) => {
      const brandWrapper = document.createElement("div");
      brandWrapper.className = "card-wrapper";

      brandWrapper.innerHTML = "<H2>" + car.brand + "</H2>";

      const modelsWrapper = document.createElement("ul");

      car.models.forEach((model) => {
        const modelItem = document.createElement("li");
        modelItem.innerText = model;
        modelsWrapper.appendChild(modelItem);
      });

      brandWrapper.appendChild(modelsWrapper);
      output.appendChild(brandWrapper);
    });
  })
  .catch((error) => console.error(error));
