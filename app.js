
const api = //$.get sustituyo por getApiPromise
        getApiPromise('https://elsemanario.com/wp-json/wp/v2/posts');
//console.log ('api', api);
const titles = api.then(getPostTitles);
titles.then(console.log)

// const titles = api.then(posts => posts.map (posts => posts.title.rendered))
//     console.log({titles})
//     titles.then(console.log)
    
//     console.log({titles, api})

