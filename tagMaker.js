function Tag(tagName, parent, attribute) {
    var element = document.createElement(tagName);
    parent.appendChild(element);
    if (attribute) {
        Object.assign(element, attribute);
    }
    ;
    return element;
}
;
