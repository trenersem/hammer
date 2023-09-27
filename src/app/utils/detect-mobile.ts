export function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isTablet() {
    const ua = navigator.userAgent.toLowerCase();
    return /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(ua);
}
export function isSafari() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('safari') && !ua.includes('chrome');
}
export function isTabletBraveSafariFirefox() {
    const ua = navigator.userAgent.toLowerCase();
    const isBraveSafariFirefox = ua.includes('brave') || ua.includes('firefox');
    return isBraveSafariFirefox && isTablet();
}
