`window` is a global object attached to every document.
`documentElement` gives all the elements inside the documents.
`document.body.children` gives all the children inside the body in an array.
`an array is a collection of data displayed in square brackets separated with commas`

`document.body.firstChild` gives #text as a result
`document.body.firstElementChild` gives first child of the body

to get innerHTML = `document.getElementById("js").innerHTML`;
SAME AS
`document.getElementById("js").innerText` gives only the text inside the element not tag inside the element

to target list items

```Javascript
      let val = document.getElementsByClassName("text");
      console.log(val);
```

to target first index of the list

```Javascript
      let val = document.getElementsByClassName("text")[0].innerHTML;
      console.log(val);
```

# QuerySelector

```Javascript
let value = document.querySelector("p");
console.log(value.innerText);
```
