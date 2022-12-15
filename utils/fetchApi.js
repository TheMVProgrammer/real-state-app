import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '2983f3cb21mshd4dbfbcb763706ap1907eejsn3c84c3a0f699',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}