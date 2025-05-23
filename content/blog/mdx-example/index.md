---
title: Markdown Template Example
date: '2023-02-14T00:00:00Z'
description: 마크다운 문법 사용 템플릿
thumbnail: ./markdown.jpeg
categories: test
---

# h1 Heading

## h2 Heading

### h3 Heading

### **h3 Bold Heading**

#### h4 Heading

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

line break with '&nbsp;&nbsp;&nbsp;'  
line break with `<br />` <br />

---

## Emphasis

**This is bold text**

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `-` or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Block code

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

Syntax highlighting with file name, highlight line

```
export const cn = (classNames: ...any) => {
    return classNames.filter(Boolean).join(' ');
}
```

## Tables

| Option | Description                                                               |
| ------ | :------------------------------------------------------------------------ |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](https://github.com/scotttko)

[**bold link text**](https://github.com/scotttko)

[`code link text`](https://github.com/scotttko)

Autoconverted link https://github.com/scotttko

## Images

![Minion](https://octodex.github.com/images/minion.png)

HTML `<Img />` tag

<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" width={300} />
