# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/screenshot.png)

### Links

- Live Site URL: [Link](https://emiacerbi.github.io/intro-comp-with-signup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/)

### What I learned

I found out a way to validate emails with this code. I tried it a lot and it seems to always work. If there's a better way to do it please let me know.

```JS
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    if (!regex.test(email.value)) {then the error occurs}
```

## Author

`Emiliano Acerbi`

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/home) for the project ideas! It helps a lot to practice and study.
