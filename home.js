export const createHomePage = () => {
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('homeContainer')

    const homeInfo = document.createElement('div')
    homeInfo.classList.add('homeInfo')
    homeInfo.innerHTML = `
    <img src="public/rising-sun.svg" alt="" id="homeInfoImg">
    <h1>Smoked  meats,<br> boozy slushees, <br>rad veggies, <br>chill vibes.</h1>
    <p>
    Loro is an Asian smokehouse 
    and bar originally created by the award-
    winning chefs behind <br />Uchi  and 
    Franklin Barbecue.Together, they 
    merged their love of Asian cuisine 
    and Texas barbecue<br />  to offer
    innovative dishes you won’t find 
    anywhere else. So come on by, kick
    back, and stay awhile.
    </p>
    `

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('imgContainer')
    const smoke = document.createElement('img')
    smoke.classList.add('smoke')
    smoke.src = 'public/hp-pit-smoker.svg'
    const tigerImg = document.createElement('img')
    tigerImg.src = 'public/blue-tiger-solid.svg'
    imgContainer.append(smoke, tigerImg)

    
    homeContainer.append(homeInfo, imgContainer)
    return homeContainer
}