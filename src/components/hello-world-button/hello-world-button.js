import './hello-world-button.scss';
class HelloWorldButton {
  buttonCssClass = 'hello-world-button';
  textCssClass = 'hello-world-text';
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector('body');
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = 'Hola papei';
      p.classList.add(this.textCssClass);
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

// function helloWorld() {
//   console.log('Hello world');
// }
export default HelloWorldButton;
