export function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isTablet() {
    const ua = navigator.userAgent.toLowerCase();
    return /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(ua);
}
