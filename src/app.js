import styles from "url:./styles.css";

class MyElement extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <link rel="stylesheet" href="${styles}" />

    <p class="case1">If :host is working, the background should be red.</p>
    <p class="case2">If :where(:host, :root) is working, the background should be orange.</p>
    <p class="aaa">If :where(.aaa, .bbb) is working, the background should be pink.</p>
    <p class="bbb">If :where(.aaa, .bbb) is working, the background should be pink.</p>`;
  }
}

customElements.define("my-element", MyElement);
