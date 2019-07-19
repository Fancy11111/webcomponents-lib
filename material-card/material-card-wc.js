class MaterialCardWC extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });

    let mockData = {
      header: 'Title',
      subheaber: 'Subtitle',
      thumbnail: '',
      media: {
        src: 'some link',
        alt: 'Text displayed if image does not load'
      },
      info:
        'This is supporting info text hopefully breaking line on long ass text like it supposed to',
      actions: [
        {
          text: 'text displayed in btn 1',
          link: 'link that gets used for btn action'
        },
        {
          text: 'text displayed in btn 2',
          link: 'link that gets used for btn action'
        }
      ],
      icons: [
        {
          icon: 'person', // Name of google material icon
          link: 'https://twitter.com/FancyFenzi'
        },
        {
          icon: 'person_outline',
          link: 'https://github.com/Fancy11111'
        }
      ]
    };

    /**
     * @todo Write the template code
     * @body Need to rewrite html in material-card.html to template code + insert all data
     */

    /**
     * @todo Rewrite style with parameters
     * @body Add all styling from material-card.html with variables for color etc.
     * maybe make layouting variable depending on data
     */

    let style = `
    .card-container {
      margin-left: 100px;
    }

    .card-content {
      display: grid;
      grid-template: 
      'media'
      'media'
      'media'
      'media'
      'media'
      'media'
      'top'
      'top'
      'bottom'
      'bottom';
      position: relative;
      margin: 10px 0;
      width: 400px;
      height: 500px;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.400);
      transition: all 0.1s linear;
    }

    .card-content:hover {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.500);
    }

    .card-top {
      grid-area: top;
      display: grid;
      grid-template-columns: 18% 1fr;
    }

    .top-text h2 {
      padding: 0;
      margin: 23px 0px 0px 10px;
      font-size: 1.3em;
    }

    .top-text h3 {
      padding: 0;
      margin: 4px 0px 0px 10px;
      font-size: 1em;
      bottom: 0;
      color: rgb(112, 112, 112);
    }

    .thumbnail {
      border-radius: 50%;
      margin: auto;
      width: 44px;
      height: 44px;
    }

    .media {
      grid-area: media;
      height: 100%;
      width: 100%;
    }

    .card-bottom {
      grid-area: bottom;
      padding-left: 14px;
      display: grid;
      grid-auto-rows: 60% 1fr;
    }

    .info-text {
      color: rgb(112, 112, 112);
      margin: 12px 0 0 0;
      padding-right: 20px;
      font-size: 0.9em;
    }

    .actions {
      display: grid;
      margin: auto 0;
      grid-template-columns: 55% 1fr 25%;
    }

    .action-btn {
      background: #fff;
      color: teal;
      border: none;
      box-shadow: none;
      transition: all 0.1s linear;
      text-align: left;
    }

    .action-btn:hover {
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.356);
    }

    .icons a {
      margin: 0 10px;
      color: rgb(112, 112, 112);
    }
    `;
  }

  set data(value) {
    this.setAttribute('data', value);
  }

  get data() {
    return this.getAttribute('data');
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  get color() {
    return this.getAttribute('color');
  }

  set accent(value) {
    this.setAttribute('accent', value);
  }

  get accent() {
    return this.getAttribute('accent');
  }
}
