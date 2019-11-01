# Contributing

First of all, thanks to taking your time to help building **xavier**!

In this document, we present rules and guidelines for contributing to xavier. We are very concerned with Quality Assurance (QA) and accessability and that may seem quite rigid. But that has a reason, software health, productivity and obviously quality. 

Here in xavier, most of developers use [VSCode](https://code.visualstudio.com/) for coding but feel free to choose your editor. Also here you can find some tools and extensions recommendations.

The development team should use the following development techniques and standards:

## Test-Driven Development (TDD)

We utilize [TDD](https://en.wikipedia.org/wiki/Test-driven_development) technique to keep the code base error/bug free. 

Sometimes there is already a unit or integration test written for a React component or function. In this case if you will update, please **test** during your coding.

If are using VSCode, we recommend the following extensions:

- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) by Orta.

## Code Standards

We are using [Babel](https://babeljs.io/) compiler for our code. No need to use Vanilla JS.  

Most of our code standard is guaranteed by `.eslintrc` and `.editorconfig` files. Don't disable any rule provided by this two files.

After you develop any xavier components, always run the command your favorite command prompt:

```
npm run lint
```

This will run eslint and will show errors that must be fixed. We will not accept Pull Requests with no linted code.

To enforce the rules (in VSCode) we recommend:
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Structure

Our project is organized as follows:

```
|- xavier
|
|-- config: webpack configuration and development scripts
|
|-- docs: project documentation
|
|-- src: source code
|
|-- static: static files
|
|-- test: unit and integration tests for API and functions not related to React
|
|-- vendor: external libraries. Most of these libraries are modified for xavier specific usage.
|
```
 There is no specific rule for our structure:
 - In the root folder of the project has only configuration files. Do not include anything there.
 - Your probably will work at `src` and `test` folders. So include files only there.
 - Maintain current folder arrangement.

## Accessability

This is very important topic for xavier. 

Make sure to read about the specifications in the following links:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility) 
- [Introduction to ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)
- [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)

[Chrome](https://www.google.com/intl/en_us/chrome/) browser as very useful extension which report several keys including accessability. Take a look in [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

## Style and Design Guide

We are using the amazing [Astro](https://github.com/magnetis/astro) design system. If will write/update a component please follow the guide described in the previous link.

Since we are using [JSS](https://cssinjs.org/), you will probably need to convert CSS to JSS.
There some good (but not optimal) tools for this in the internet like this [one](https://transform.tools/css-to-js). `

Some of this tools can create invalid characters as example:

```javascript
const converted = {
  '.btn-venus\n.btn-fancy': {
    position: 'relative',
    padding: '1rem',
    maxWidth: 320,
  },
};
```

Look at this boy. `\n` character should be a space. Make sure to remove any invalid chars. The JSS parser don't recognize them and your stylesheet will not work.

### Tints

We have two main colors that we use based on the Astro system. And most likely you will see them a lot.

#### Mars:

![alt text](http://tobiasbu.github.io/img/mars.png)

#### Neptune: 

![alt text](http://tobiasbu.github.io/img/neptune.png)

Neptune is not officially part of Astro. It's a custom tint used by xavier.
You can reference both colors using CSS vars in JSS like with no problems.

```javascript
const myStyle = {
  '.neptune-box': {
    backgroundColor: 'var(--color-neptune-300)';
  },
  '.mars-box': {
    backgroundColor: 'var(--color-mars-600)';
  },
};
```

The VSCode marketplace has useful tools to convert CSS. We usually use the [CSS to JSS](https://marketplace.visualstudio.com/items?itemName=infarkt.css-to-jss).
