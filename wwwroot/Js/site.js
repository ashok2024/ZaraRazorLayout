function myJsFunction() {
    console.log("JavaScript function called from Blazor");
}
function getScreenType() {   
    return window.innerWidth;
}
window.registerResizeCallback = (dotNetHelper) => {
    window.onresize = () => {
        console.log("Resize event triggered: " + window.innerWidth);
        dotNetHelper.invokeMethodAsync("OnResize", window.innerWidth);
    };
};

