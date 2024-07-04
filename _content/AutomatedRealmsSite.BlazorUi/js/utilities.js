window.isWindowFocused = true;
// Register a listener to the window blur and focus events
window.onblur = () => {
    window.isWindowFocused = false;
};
window.onfocus = () => {
    window.isWindowFocused = true;
};
window.siteUtilities = {
    getElement: function (elem) {
        if (typeof elem === "string") {
            let foundElem = document.getElementById(elem);
            if (foundElem === null) {
                foundElem = document.querySelector(elem);
            }
            return foundElem;
        }
        return elem;
    },
    getBoundingRect: function (elem) {
        var _a;
        return (_a = window.siteUtilities.getElement(elem)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    }
};
//# sourceMappingURL=utilities.js.map