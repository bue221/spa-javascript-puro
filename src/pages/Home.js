import getData from "../utils/getData";

export default async () => {
  const characters = await getData();
  // console.log(characters)

  const view = `
    <div class="Characters">
    ${characters.results
      .map(
        (i) => `
        <article class="Characters-item">
           <a href="/#${i.id}/">
           <img src="${i.image}" alt="${i.name}" />
           <h2>${i.name}</h2>
           </a>
        </article>`
      )
      .join("")}
    </div>
    `;

  return view;
};
