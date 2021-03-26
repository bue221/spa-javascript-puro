export default ()=> 
    location.hash.slice(1).toLowerCase().split('/')[0] || '/' // ['','1','']
