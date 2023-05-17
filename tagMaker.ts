function Tag(tagName : string, parent : string, Attribute: object) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  if (Attribute) {
    Object.assign(element,Attribute)
  };
  return element
};