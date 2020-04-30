import Axios from 'axios';

const fetchData = async() => {
    const response = await Axios.get(`https://raw.githubusercontent.com/anadahalli/interview/master/db.json`);
    const result = await response.data;
    return result
}

export {
    fetchData
}