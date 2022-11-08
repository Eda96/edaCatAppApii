export const catsView = () => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div>
    
    <div class="catsView"> 
    <div id="paw">🐾🐾🐾🐾🐾🐾🐾🐾🐾</div> 
    </div>
    <div id="catLists"></div>
    <div id="error"></div>
    
    
    
    </div>`;
  const showCats = (data) => {
    const catLists = element.querySelector("#catLists");
    console.log(data);
    data.forEach((element) => {
      console.log(element.url);
      const catDiv = document.createElement("div");
      catDiv.innerHTML = `
      <div>
    
      <img class="catPictures" src=${element.url} />
      <h3>${element.breeds[0].origin}</h3>
      <p>${element.breeds[0].name}</p>
      <p>${element.breeds[0].description}</p> </br>
      <a href ="${element.breeds[0].wikipedia_url}" target="_blank">Wikipedia Link</a>
      </div>
      `;
      catLists.appendChild(catDiv);
    });
  };
  const showError = (error) => {
    element.querySelector(
      "#error"
    ).innerHTML = `<h3>Something Went Wrong ${error}</h3>`;
  };
  return { element, showCats, showError };
};