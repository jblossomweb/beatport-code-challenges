export const unsplash = id => `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`;
export const beatport = id => `https://geo-media.beatport.com/image/${id}.jpg`;
export const giphy = id => `https://media.giphy.com/media/${id}/giphy.gif`;

export const preload = images => images.forEach(src => {
    new Image().src = src;
});
