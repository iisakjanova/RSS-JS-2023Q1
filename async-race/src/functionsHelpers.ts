function createElement(tag: string, className: string, content = "") {
  const element = document.createElement(`${tag}`);
  element.className = `${className}`;

  if (content) {
    element.innerHTML = `${content}`;
  }
  return element;
}

export default createElement;
