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

    document.getElementById("output").style.cssText =
      "  margin-top: 50px; width: 90%; display: flex; flex-wrap: wrap; column-gap: 2%; row-gap: 20px;";

    result.forEach((car) => {
      const brandWrapper = document.createElement("div");
      brandWrapper.className = "card-wrapper";
      brandWrapper.innerHTML = "<H2>" + car.brand + "</H2>";
      brandWrapper.style.cssText =
        "width: 23.5%; padding: 50px; background-color: rgb(236, 236, 236); border-radius: 20px; box-shadow: rgba(51, 51, 51, 0.466) 0 0 10px;";

      const modelsWrapper = document.createElement("ul");

      car.models.forEach((model) => {
        const modelItem = document.createElement("li");
        modelItem.innerText = model;
        modelsWrapper.appendChild(modelItem);
        modelsWrapper.style.cssText = "margin-top: 20px";
      });

      brandWrapper.appendChild(modelsWrapper);
      output.appendChild(brandWrapper);
    });
  })
  .catch((error) => console.error(error));
