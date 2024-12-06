import eventBus from "./eventbusnav";
import { alertController, loadingController } from "@ionic/vue";

/**
 * Displays an informational alert message with a customizable header and message.
 *  @param {string} [isHeader="Information Message"] - The header text for the alert.
 *  @param {string} isMsg - The message text to display in the alert.
 *  @returns {Promise<void>} A promise that resolves when the alert has been presented.
 */
export async function  InformationMsg(isHeader="Information Message",isMsg) {
    const alert = await alertController.create({
        cssClass:'confirmAlert noHeader',
        header: isHeader,
        message: isMsg,
        backdropDismiss : false,
        buttons:[
        {
            text: 'OK',                
            cssClass:'alert-button-confirm',
            handler: () => {
				getEvtName("information");
            }
            },              
        ],
    });
    await alert.present();
}

/**
 * Displays a confirmation dialog with 'Yes' and 'No' options.
 *  @param {string} [isHeader="Confirmation Message"] - The header text for the confirmation dialog.
 *  @param {string} [isMsg=""] - The message text to display in the confirmation dialog.
 *  @returns {Promise<void>} A promise that resolves when the confirmation dialog has been presented.
 */
export async function  confirmMsg(isHeader="Confirmation Message",isMsg = "") {    
    console.log(isHeader);
    alertController.create({
    cssClass:'confirmAlert',
    message: isMsg,    
    buttons: [
        {
            text: 'Yes',
            handler: () => {
				getEvtName('confirmYes');
            }
        },
        {
            text: 'No',
            handler: () => {
                getEvtName('confirmNo');
            }
        }
    ]
    }).then(res => {
        res.present();
    });
}

/**
 * Emits an event based on the provided name and the current route.
 *  @param {string} [name=""] - The event name to be emitted. If not provided, defaults to the route name.
 *  @returns {void}
 */
export function getEvtName(name="") {
    let route = window.location.pathname.split("/")[1];
	let evtName = (name != "") ? (name == "confirmYes") ? ("evtLogout" + name) : (route + name) : ("evt" + route);
	console.log("EvtName : ", evtName);
	eventBus().emitter.emit(evtName);
}

/**
 * Dismisses the loading indicator if it is currently displayed.
 *  This function attempts to dismiss a loading indicator that was previously shown.
 *  It catches and logs any errors that occur during the dismissal process.
 *  @returns {Promise<void>} A promise that resolves when the loading indicator has been dismissed.
 */
export async function loaderDismiss() {
    try {
        loading = await loadingController.dismiss();
    }
    catch (e) {       
        console.log(e);
    }
}