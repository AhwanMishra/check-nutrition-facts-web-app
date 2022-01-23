import { RightSideAd } from '../ads/right-side-ad';
import { MobileAd } from '../ads/mobile-ad';



const maxMobileDisplayWidth = 700;

export function  getWindowWidth () {
    return(window.innerWidth);
}

export function isMobileDevice () {
    var toReturn;
    getWindowWidth() <= maxMobileDisplayWidth ? toReturn = true : toReturn = false;
    return toReturn;
} 

export function getDesktopAd (props) {
    if(!isMobileDevice()) {
        return (<RightSideAd propsFromParent = {props} />);
    }
    else return null;
}


export function getMobileAd (props) {
    if(isMobileDevice()) {
        return (<MobileAd propsFromParent = {props}/>);
    }
    else return null;
}

