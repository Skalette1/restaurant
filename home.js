export const createHomePage = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const homeInfo = document.createElement("div");
  homeInfo.classList.add("homeInfo");
  homeInfo.innerHTML = `
    <img src="public/rising-sun.svg" alt="" id="homeInfoImg">
    <h1>Smoked meats, boozy slushees, rad veggies, chill vibes.</h1>
    <p>
    Loro is an Asian smokehouse 
    and bar originally created by the award-
    winning chefs behind Uchi and 
    Franklin Barbecue. Together, they 
    merged their love of Asian cuisine 
    and Texas barbecue to offer
    innovative dishes you won’t find 
    anywhere else. So come on by, kick
    back, and stay awhile.
    </p>
  `;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  const smoke = document.createElement("img");
  smoke.classList.add("smoke");
  smoke.src = "public/hp-pit-smoker.svg";
  const tigerImg = document.createElement("img");
  tigerImg.src = "public/blue-tiger-solid.svg";
  imgContainer.append(smoke, tigerImg);

  homeContainer.append(homeInfo, imgContainer);

  const animateText = async (element, text) => {
    element.textContent = "";
    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  };

  const textElement = homeInfo.querySelector("p");
  if (textElement) {
    const text = textElement.textContent;
    animateText(textElement, text);
  }

  return homeContainer;
};
