export const welcomeView = (props) => {
    const { onStartClick } = props;
    const element = document.createElement("div");
    element.innerHTML = `
  <div>
  
  <div class="welcomeEvent"> → Welcome To Cats Event ← </div>
  
  
  <div class="catPat"> 
  <div class="getCatsContainer">
  <div class="getCats"> → How Many Cats Do You Want To See ?</div>
  
  <button class="choose" value="10">10</button>
  <button class="choose" value="20">20</button>
  <button class="choose" value="30">30</button>
  </div>

  
 
  <div class="catBreedsContainer">
  <div class="catBreeds"> → Cat For Breed</div>
  
  
  <button class="choose" value="beng">Bengal</button>
  <button class="choose" value="abys">Abyssinian</button>
  <button class="choose" value="esho">Exotic Shorthair</button>
  <button class="choose" value="hbro">Havana Brown</button>
  <button class="choose" value="aege">Aegean</button>
  <button class="choose" value="tang">Turkish Angora</button>
  <button class="choose" value="tonk">Tonkinese</button>
  <button class="choose" value="tvan">Turkish Van</button>
  <button class="choose" value="sphy">Sphynx</button>
  
  </div>
  </div>
  
  </div>`;
    const buttons = Array.from(element.getElementsByClassName("choose"));
    buttons.forEach((item) => {
      item.addEventListener("click", onStartClick);
    });
    return { element };
  };
