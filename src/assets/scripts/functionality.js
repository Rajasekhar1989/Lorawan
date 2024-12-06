var loading;

/**
 * Shows a loading indicator with a customizable message and duration.
 *  @param {string} loadMsg - Message to display on the loading indicator. Defaults to "Refreshing data...".
 *  @param {number} [wTime=20000] - Duration to display the loading indicator in milliseconds. Defaults to 20,000 ms (20 seconds).
 *  @returns {Promise<void>} - Resolves when the loading indicator is presented.
 */
export async function isRefresh(loadMsg, wTime=20000) {
    loadMsg = (loadMsg == undefined || loadMsg == null || loadMsg == "") ? "Refreshing data..." : loadMsg;
    try {
        loading = await loadingController.create({
            message: loadMsg,
            duration: wTime,
        });
        loading.present();
    }
    catch (e) {
        console.log(e);
    }
}

/**
 * Logs out the user by clearing session and local storage, then redirects to the login page.
 * This function:
 * - Clears items from local storage that are associated with the current user.
 * - Clears session storage.
 * - Redirects the user to the login page.
 */
export function logout() {    
    if(sessionStorage.getItem("LuserName") != undefined && sessionStorage.getItem("LuserName") != null) {
        Object.keys(localStorage).forEach((itemId) => {
            let resp = itemId.toString().includes(sessionStorage.getItem("LuserName").toString());
            if (resp)
                localStorage.removeItem(itemId.toString());
        });
        sessionStorage.clear();
        window.location.href = "/login";
    }
}