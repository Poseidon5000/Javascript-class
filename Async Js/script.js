
// const getCountryData = function(country){
// fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
//    return response.json()
// }).then(function([data]){
// // console.log(data.borders[0]);
//  const html = ` <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${(data.currencies.EUR.symbol)}</p>
//           </div>
//         </article>`

        

//     countriesContainer.insertAdjacentHTML("beforeend", html)
//     countriesContainer.style.opacity = 1;

//     const [neighbour] = data.borders;
//      if(!neighbour)return;

//    return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// }).then((response)=>{
//    return response.json()
// }).then(([data])=>{
//     const html = ` <article class="country neighbour">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.cat}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${(data.currencies.EUR.symbol)}</p>
//           </div>
//         </article>`

//     countriesContainer.insertAdjacentHTML("beforeend", html)
//     countriesContainer.style.opacity = 1;
//     console.log(data.languages);
// })
// }


// getCountryData("portugal")
// getCountryData("italy")
// getCountryData("spain")
// getCountryData("germany")









///////////////////////////////////////


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// const getCountries = (country) =>{
// const request = fetch(`https://restcountries.com/v3.1/name/${country}`).then((res)=>{
//   // console.log(res);
// return res.json()
// }).then(([data])=>{

//   // console.log(data.borders[0]);

//  const html = `<article class="country">
//           <img class="country__img" src='${data.flags.svg}'/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${data.currencies.EUR.symbol}</p>
//           </div>
//         </article>`

//       countriesContainer.insertAdjacentHTML("beforeend", html)
//       countriesContainer.style.opacity=1

//    const neighbour = data.borders[0]

//   // console.log(neighbour);

//   if(!neighbour) return

//   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// }
// ).then((response)=>{
//   // console.log(response)
//  return response.json()
// }).then(([data])=>{
 
//    const html = `<article class="country neighbour">
//           <img class="country__img" src='${data.flags.svg}'/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${data.currencies.EUR.symbol}</p>
//           </div>
//         </article>`

//       countriesContainer.insertAdjacentHTML("beforeend", html)
//       countriesContainer.style.opacity=1

//       console.log(data);
// })
// }

// // getCountries("portugal")
//  getCountries("italy")

const getCountryData = async function(country){
  const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
 const [data] = await request.json()
 console.log(data); 
}

getCountryData("italy")
