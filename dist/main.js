(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{try{const e=a?`${n}/${a}`:n,t=fetch(e);return(await t).json()}catch(n){console.log("No se puedo obtener la data: ",n)}},e=()=>location.hash.slice(1).toLowerCase().split("/")[0]||"/",t=()=>"\n    <div class='Error404'>\n        <h2>Error 404</h2>\n    </div>\n    ",i={"/":async()=>`\n    <div class='Characters'>\n    ${(await a()).results.map((n=>`\n        <article class='Character-item'>\n           <a href='/#${n.id}/'>\n           <img src=${n.image} alt=${n.name} />\n           <h2>${n.name}</h2>\n           </a>\n        <article>\n    `))}\n    </div>\n    `,"/:id":async()=>{const n=await a(e());return`\n    <div class='Character-inner'>\n        <article class='Characters-card'>\n        <img src=${n.image} alt=${n.name} />    \n        <h2>${n.name} </h2>\n        </article>\n        <article class='Characters-card'>\n            <h3>Episodes: ${n.name} </h3>\n            <h3>Status: ${n.status} </h3>\n            <h3>Species: ${n.species} </h3>\n            <h3>Gender: ${n.gender} </h3>\n            <h3>Origin: ${n.origin.name} </h3>\n            <h3>Last location:${n.location.name} </h3>\n        </article>\n    </div>\n    `},"/contact":"contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n&&(n.innerHTML=await"\n    <div class='Header-main'>\n        <div class='Header-logo'>\n            <h1>\n                <a href='/'>\n                 100tifi.co\n                </a>\n            </h1>\n        </div>\n        <div class='Header-nav'>\n            <a href='/#about'>\n                About\n            </a>\n        </div>\n    </div>\n    ");let c=e(),r=await(n=>n.length<=3?"/"===n?n:"/:id":"$/{route}")(c),s=i[r]??t;a&&(a.innerHTML=await s())};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();