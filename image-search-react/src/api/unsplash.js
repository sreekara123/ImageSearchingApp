import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dbcdc96003f9c228552e9dc1ec8fb0870c35820eedcd820bfcc9a30e72c045c9'
    }
});