/**
 * Retrieves the authorization token and cancel token for API requests.
 *  @returns {Object} - An object containing headers with the authorization token and a cancel token.
 */
export function getTocken() {
    // Create an object with headers and cancel token
    let tocInfo = {
        headers: { 'Authorization': localStorage.getItem('tokenInfo') },
        cancelToken: cancelToken.token
    };
    return tocInfo;
}

/**
 * Fetches data from an API using a specified HTTP method and URL.
 *  @param {string} method - HTTP method (e.g., 'GET', 'POST').
 *  @param {string} getUrl - API endpoint URL.
 *  @param {Object} [data={}] - Data to send with the request. Default is an empty object.
 *  @param {boolean} [formData=false] - Whether to send data as `formData`. Default is `false`.
 *  @returns {Promise<Object>} - The response data from the API.
 *  @throws {Error} - Throws an error if the request fails.
 */
export async function fetchAPIInfo(method, getUrl, data = {}, formData = false) {
    try {
        // Set request headers based on whether sending FormData or JSON
        const headers = { 'Content-Type': formData ? 'multipart/form-data' : 'application/json' };
        const accessToken = localStorage.getItem(`getToken${sessionStorage.getItem("LuserName")}`);
        
        if (accessToken) {
            headers['Authorization'] = 'Bearer ' + accessToken;
        }
        
        // Make the API request using Axios
        const response = await axios({
            method,
            url: axios.defaults.baseURL + getUrl,
            data: formData ? data : JSON.stringify(data),
            headers,
        });
        
        // Dismiss any loading indicator
        loaderDismiss();
        
        return response.data;
    } catch (error) {
        // Dismiss loading indicator and handle errors
        loaderDismiss();
        logout();
        throw error;
    }
}

