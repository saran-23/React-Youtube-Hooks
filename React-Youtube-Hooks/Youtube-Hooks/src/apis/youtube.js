import axios from 'axios';
const KEY = 'AIzaSyA55kv7NYa5eyFyBnzntinE3NdJc6ZNZnk';
// const KEY = 'AIzaSyA-DIOn6iy-azHeYwy5ljZeOabDeCBvfJQ';
export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
        
    }
});


                                                            