const URL_PARAM = new URLSearchParams(window.location.search);
const RIDE_ID = URL_PARAM.get("id");

const DATA_RIDE = getRideRecord(RIDE_ID)
console.log(DATA_RIDE)
const DIV_DATA = document.querySelector("#dataRide")

document.addEventListener("DOMContentLoaded", async () => {
    //vai ser a posição 0 do meu array que se encontra no value
    const FIRST_POSITION = DATA_RIDE.data[0]
    //Aplicando a fórmula para pegar a localidade
    const FIRST_LOCATION = await getLocationData(FIRST_POSITION.latitude, FIRST_POSITION.longitude)

    const CITY_DIV = document.createElement("div")
    //Inserindo na div o texto com a cidade e código do país
    CITY_DIV.innerText = `${FIRST_LOCATION.locality} - ${FIRST_LOCATION.countryCode}`
    CITY_DIV.className = "text-primary fw-bold fs-5"

    const MAX_SPEED = document.createElement("div")
    MAX_SPEED.innerText = `Max: ${getMaxSpeed(DATA_RIDE.data)} km/h`
    MAX_SPEED.className = "fw-bold fs-5 my-1"


    const DISTANCE_DIV = document.createElement("div")
    DISTANCE_DIV.innerText = `Distância: ${getDistance(DATA_RIDE.data)} km`
    DISTANCE_DIV.className = "mb-1 fs-5"

    const DURATION_DIV = document.createElement("div")
    DURATION_DIV.innerText = `Duração: ${getDuration(DATA_RIDE)}`;
    DURATION_DIV.className = "mb-1 fs-5"

    const RIDE_DATE_DIV = document.createElement("div")
    RIDE_DATE_DIV.innerText = `${getRideDate(DATA_RIDE)}`
    RIDE_DATE_DIV.className = "mb-1 fw-bold fs-5"

    const DIV_DATA_RIDE = document.createElement("div")
    DIV_DATA_RIDE.id = "divDataRide"


    //Inserindo minha localidade, velocidade, distancia e duração na minha div DIV_DATA_RIDE
    DIV_DATA_RIDE.appendChild(CITY_DIV)
    DIV_DATA_RIDE.appendChild(MAX_SPEED)
    DIV_DATA_RIDE.appendChild(DISTANCE_DIV)
    DIV_DATA_RIDE.appendChild(DURATION_DIV)
    DIV_DATA_RIDE.appendChild(RIDE_DATE_DIV)

    
    DIV_DATA.appendChild(DIV_DATA_RIDE)


})

