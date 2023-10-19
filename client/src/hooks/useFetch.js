import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState();
            // eslint-disable-next-line
    useEffect(() => {
        // eslint-disable-next-line
        makeApiCall();
                // eslint-disable-next-line
    }, [endpoint]);

    // eslint-disable-next-line
    const makeApiCall = async () => {
        // eslint-disable-next-line
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    };  

    return { data };
};
export default useFetch;