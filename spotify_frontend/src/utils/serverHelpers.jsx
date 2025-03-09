import { backendUrl } from './config';

export const makeUnauthenticatedPostRequest = async(Route, body) => {
    const response = await fetch(`${backendUrl}${Route}`, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};