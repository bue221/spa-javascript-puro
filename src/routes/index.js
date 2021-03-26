import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

import gethash from '../utils/gethash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact'
}

export default async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    if(header) header.innerHTML = await Header()

    let hash = gethash();
    let route = await resolveRoutes(hash)

    // console.log(route)
    // console.log('hash',hash)
    let render = routes[route] ?? Error404

    if(content) content.innerHTML = await render()
}

