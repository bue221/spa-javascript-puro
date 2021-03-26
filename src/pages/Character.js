import getData from "../utils/getData";
import gethash from "../utils/gethash";

export default async () => {
  const character = await getData(gethash());
  // console.log(character)
  const view = `
    <div class='Characters-inner'>
        <article class='Characters-card'>
        <img src=${character.image} alt=${character.name} />    
        <h2>${character.name} </h2>
        </article>
        <article class='Characters-item'>
            <h3>Episodes: ${character.name} </h3>
            <h3>Status: ${character.status} </h3>
            <h3>Species: ${character.species} </h3>
            <h3>Gender: ${character.gender} </h3>
            <h3>Origin: ${character.origin.name} </h3>
            <h3>Last location:${character.location.name} </h3>
        </article>
    </div>
    `;
  return view;
};
