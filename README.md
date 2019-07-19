# Web Component Library

This is a small library of my custom [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

Goal of this repository is primarily for me to learn about Web Components, but also to centralize all of my components into a library.

All of these Components are free to use, but be warned that they may be very raw and unpolished.

For general information on [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) and [Templates/Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) refer to [MDN web docs](https://developer.mozilla.org/en-US/). 

## Timeline

### Motivation

I wanted to create a CV for myself but I didn't want to use the classical format.
My CSS skills also needed some improvements.

I oriented myself at the [React Timeline Component tutorial](https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/) from [Florian Pop](https://www.florin-pop.com).

### Attributes

Tag: timeline-wc

- color: The color used in the tags, the middle line and the timeline element borders
- data: An array of objects used to fill the timeline with information

Example for data format

```js
  {
    time: '2010-2014',
    location: 'BRG Gröhrmühlgasse',
    type: {
      text: 'School',
      color: '#FFF'  
    },
    info: 'Student',
    link: {
      link: 'http://www.brgg.at/',
      text: 'Visit website'
    }
  }
```

- time: The time/date displayed in the inner upper corner
- location: The header that is displayed
- type: The type of activity/event, displayed in the outer upper corner + (optional) color of the tag
- info: Small paragraph under the header
- link: (Optional) A link to a site connected to the activity/event + text that is displayed