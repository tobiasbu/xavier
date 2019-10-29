
# astro-jss

**WIP**

A port JSS of [Astro](https://github.com/magnetis/astro).

## Usage

```javascript
import jss from 'jss';
import astro from 'astro-jss';

jss.createStyleSheet(astro).attach();
```

## Important Note

This port was made with **[webpack](https://webpack.js.org/) in mind**.

If you are using webpack you will need to install [file-loader](https://github.com/webpack-contrib/file-loader):

```bash
npm install file-loader --save-dev
```

Add your configuration the following rules:

```javascript
module.exports = {
  //...
    module: {
        rules: [
            {
                test: /\.svg$/i,
                loader: 'file-loader',
            }
        ]
    },
    //...
};
```

If you are using `file-loader` with images and you want to keep your files organized you can use the `outputPath` function in options:

```javascript

{
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: 'file-loader',
  options: {
    outputPath: (url, resourcePath, context) => {
      // `resourcePath` is original absolute path to asset
      if (/.svg$/i.test(resourcePath)) {
        return `icons/${url}`;
      }
      return `img/${url}`;
    },
  }
}

```


### Utils: (ignore)

Regex to convert CSS --vars in object prop: 

`^--(.*):.+?(.*)(;)$`

Regex to replace:

`'${1}':${2},`

## License

Apache License 2.0 ~ [magnetis](https://github.com/magnetis)

Ported by [Tobias Ulrich](https://github.com/tobiasbu)