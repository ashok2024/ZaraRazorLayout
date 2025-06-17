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
function toggleAll(source) {
    const checkboxes = document.querySelectorAll('.rowCheckbox');
    checkboxes.forEach(cb => cb.checked = source.checked);
}

function updateSelectAll() {
    const checkboxes = document.querySelectorAll('.rowCheckbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    document.getElementById('selectAll').checked = allChecked;
}
