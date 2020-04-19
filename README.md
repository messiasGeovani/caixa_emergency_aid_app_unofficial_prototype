# Caixa emergency aid unofficial app
> Prototype made in react native of the official emergency aid app.

This app was made to test the performance of the react native ecosystem on the platform, with no intention of harming or deceiving anyone.

## Installation

To install and config the project dependencies, is recommended the [yarn](https://yarnpkg.com/lang/en/) package manager.

```sh
yarn
```

## Project estructure

This project was created using the [react native framework](https://reactnative.dev/) in conjunction with the [styled components](https://styled-components.com/) library:

```
├── App.js
├── app.json
├── assets
│   ├── bg.png
│   ├── headerLogo.png
│   ├── icon.png
│   ├── logos.png
│   └── splash.png
├── babel.config.js
├── package.json
├── src
│   ├── components
│   │   ├── Alert
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Button
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Header
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Loading
│   │       ├── index.js
│   │       └── styles.js
│   ├── config
│   │   ├── contexts.js
│   │   └── metrics.js
│   ├── routes
│   │   ├── MainRoutes.js
│   │   └── RegisterRoutes.js
│   ├── screens
│   │   ├── Home
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Info
│   │   │   ├── content.js
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Register
│   │       ├── content.js
│   │       ├── index.js
│   │       └── styles.js
│   └── services
│       └── api.js
└── yarn.lock


```

## Usage manual

- ### Routes guide

The project contains the current routes:

| Name    | Functionality                                               |
|--------|------------------------------------------------|
| Home   | redirect the user to home screen               |
| RegisterRoutesConfig | renders the redirect routes navigator |
| InfoScreen | redirect the user to Info Screen |
| RegisterScreen | redirect the user to register screen |

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) 

Email – messias.geovani.lima@gmail.com

Github profile – [messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://github.com/messiasGeovani/caixa_emergency_aid_unofficial_app/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
