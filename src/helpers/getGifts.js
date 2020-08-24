export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=5&api_key=q3T6CyrSIPG4755nMJdZRWyHfBkmu0Ln`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifts = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return (gifts);
}
