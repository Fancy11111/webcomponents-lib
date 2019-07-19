class Timeline extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // if (!this.hasAttribute('color')) {
    //   this.setAttribute('color', '#ee6002');
    // }
    // Create a shadow root
    let shadow = this.attachShadow({ mode: 'open' });

    // Create spans
  }

  set color(color) {
    this.setAttribute('color', color);
  }

  get color() {
    return this.getAttribute('color');
  }

  set data(data) {
    this.setAttribute('data', data);
  }

  get color() {
    return this.getAttribute('data');
  }

  connectedCallback() {
    if (!this.hasAttribute('color')) {
      this.setAttribute('color', '#000');
    }

    let mockData = [
      {
        time: '2010-2014',
        location: 'BRG Gröhrmühlgasse',
        type: 'Schule',
        info: 'Schüler',
        link: 'http://www.brgg.at/'
      },
      {
        time: '2014-2019',
        location: 'HTL Wr. Neustadt',
        type: 'Schule',
        info: 'Schüler der Abteilung Informatik',
        link: 'http://www.htlwrn.ac.at/'
      }
    ];

    if (!this.hasAttribute('data')) {
      this.setAttribute('data', JSON.stringify(mockData));
    }

    let shadow = this.shadowRoot;

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'timeline-container');

    let data = JSON.parse(this.getAttribute('data'));

    data.forEach(element => {
      let child = document.createElement('div');
      child.setAttribute('class', 'timeline-item');
      child.innerHTML = `
        <div class="timeline-item-content">
          <span class="tag">${element.type}</span>
          <time>${element.time}</time>
          <h1 style="font-size: 0.9em">${element.location}</h1>
          <p>${element.info}</p>
          ${
            element.link
              ? `<a href='${
                  element.link
                }' rel='noopener noreferrer' target='_blank'> Zur Website </a>`
              : ''
          }
          <span class="circle"></span>
        </div>
      `;
      wrapper.appendChild(child);
    });
    let middle = document.createElement('div');
    middle.setAttribute('class', 'middle');
    wrapper.appendChild(middle);
    shadow.appendChild(wrapper);

    let style = document.createElement('style');
    style.textContent = `
      *, ::after, ::before {
        box-sizing: border-box
      }

      a {
        text-decoration: underline;
      }

      a:visited {
        color: black;
      }

      .timeline-container {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 40px 0;
      }

      .middle {
        /* middle-line */
        background-color: ${this.getAttribute('color')};
        content: '';
        position: absolute;
        left: calc(50% - 3px);
        width: 5px;
        height: 100%;
      }

      .timeline-item {
        display: flex;
        justify-content: flex-end;
        padding-right: 30px;
        position: relative;
        margin: 10px 0;
        width: 50%;
      }

      .timeline-item:nth-child(odd) {
        align-self: flex-end;
        justify-content: flex-start;
        padding-left: 30px;
        padding-right: 0;
      }

      .timeline-item-content {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 15px;
        position: relative;
        width: 400px;
        max-width: 70%;
        text-align: right;
        border: 1px solid ${this.getAttribute('color')};
      }

      .timeline-item-content::after {
        content: ' ';
        background-color: #fff;
        box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
        position: absolute;
        right: -7.5px;
        top: calc(50% - 7.5px);
        transform: rotate(45deg);
        width: 15px;
        height: 15px;
        border-right: 1px solid ${this.getAttribute('color')};
        border-top: 1px solid ${this.getAttribute('color')};
      }

      .timeline-item:nth-child(odd) .timeline-item-content {
        text-align: left;
        align-items: flex-start;
      }

      .timeline-item:nth-child(odd) .timeline-item-content::after {
        right: auto;
        left: -7.5px;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
        border-right: none;
        border-top: none;
        border-left: 1px solid ${this.getAttribute('color')};
        border-bottom: 1px solid ${this.getAttribute('color')};
      }

      .timeline-item-content .tag {
        color: #fff;
        background: ${this.getAttribute('color')};
        font-size: 12px;
        top: 5px;
        left: 5px;
        letter-spacing: 1px;
        padding: 5px;
        position: absolute;
        text-transform: uppercase;
      }

      .timeline-item:nth-child(odd) .timeline-item-content .tag {
        left: auto;
        right: 5px;
      }

      .timeline-item-content time {
        color: #777;
        font-size: 12px;
        font-weight: bold;
      }

      .timeline-item-content p {
        font-size: 16px;
        line-height: 24px;
        margin: 0px 0px 10px 0px;
        max-width: 250px;
      }

      .timeline-item-content a {
        font-size: 14px;
        font-weight: bold;
      }

      .timeline-item-content a::after {
        content: ' ►';
        font-size: 12px;
      }

      .timeline-item-content .circle {
        background-color: #fff;
        border: 3px solid ${this.getAttribute('color')};
        transform: rotate(45deg);
        position: absolute;
        top: calc(50% - 10px);
        right: -40px;
        width: 20px;
        height: 20px;
        z-index: 100;
      }

      .timeline-item:nth-child(odd) .timeline-item-content .circle {
        right: auto;
        left: -41px;
      }

      @media only screen and (max-width: 1023px) {
        .timeline-item-content {
          max-width: 100%;
        }
      }

      @media only screen and (max-width: 767px) {
        .timeline-item-content,
        .timeline-item:nth-child(odd) .timeline-item-content {
          padding: 15px 10px;
          text-align: center;
          align-items: center;
        }

        .timeline-item-content .tag {
          width: calc(100% - 10px);
          text-align: center;
        }

        .timeline-item-content time {
          margin-top: 20px;
        }

        .timeline-item-content a {
          text-decoration: underline;
        }

        .timeline-item-content a::after {
          display: none;
        }
      }`;

    shadow.appendChild(style);
  }
}

customElements.define('timeline-el', Timeline);
