import {useCallback} from 'react';
import axios from "axios";
import {ApiKey} from "../utils/const/apiKey";
import {URL} from "../utils/const/apiUrl";

export default function useGetArticles() {

    const data = useCallback(
        async (notEmptyQuery: boolean, query: string, country?: string, category?: string) => {
            let requestString= ''
            if (notEmptyQuery) {
                requestString = `q=${query}&`;
            } else {
                if (country) {
                    requestString += `country=${country}&`;
                }
                if (category) {
                    requestString += `category=${category}&`;
                }
            }
            try {
                return await axios.get(`${URL.url}?${requestString}apiKey=${ApiKey.apiKey}`);

            } catch (e) {
                console.log(e)
            }

        },
        [],
    );

    return [data];
}
