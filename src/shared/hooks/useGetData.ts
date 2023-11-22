import {useCallback} from 'react';
import axios from "axios";
import {ApiKey} from "../utils/const/apiKey";

export default function useGetData() {

    const data = useCallback(
        async (notEmptyQuery: boolean, query: string, country?: string, category?: string) => {
            let response
            if (country || category) {
                response = await axios.get(`https://newsapi.org/v2/top-headlines?${country ? `country=${country}&`: ''}${category ? `category=${category}&`: ''}apiKey=${ApiKey.apiKey}`);
            } else {
                response = await axios.get(`https://newsapi.org/v2/everything?${notEmptyQuery ? `q=${query}&`: ''}apiKey=${ApiKey.apiKey}`);
            }

            return response;
        },
        [],
    );

    return [data];
}
