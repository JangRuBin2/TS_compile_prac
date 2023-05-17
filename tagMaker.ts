function Tag(tagName : string, parent : HTMLElement, attribute: object) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  if (attribute) {
    Object.assign(element,attribute)
  };
  return element
};

Tag("test", document.body, {
  id : "test"
})