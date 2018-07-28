const getPostTitles = posts => posts.map(getTitle);
const getTitle = post => post.title.rendered;

const getApiPromise = url => {
    return $.get(url);
}
