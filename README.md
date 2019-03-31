<p align="center">
  <a href="https://github.com/Kibibit/announce-it" target="blank"><img src="http://kibibit.io/kibibit-assets/announce-it.svg" width="150" ></a>
  <h2 align="center">
    @kibibit/announce-it
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/announce-it"><img src="https://img.shields.io/npm/v/@kibibit/announce-it/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/announce-it"><img src="https://img.shields.io/npm/v/@kibibit/announce-it/next.svg?style=flat-square&logo=npm&color=CB3837"></a>
  <a href="https://travis-ci.org/Kibibit/announce-it">
  <img src="https://travis-ci.org/Kibibit/announce-it.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/Kibibit/announce-itbranch=master">
  <img src="https://coveralls.io/repos/github/Kibibit/announce-it/badge.svg?branch=master">
  </a>
  <a href="https://salt.bountysource.com/teams/kibibit"><img src="https://img.shields.io/endpoint.svg?url=https://monthly-salt.now.sh/kibibit&style=flat-square"></a>
</p>
<p align="center">
  Announcing your application releases on social media
</p>
<hr>

<!-- GENERAL DESCRIPTION IF NEEDED -->

## How to install
Install this package as a dev dependency:
```shell
npm install --save-dev @kibibit/announce-it
```

We also recommend adding a dedicated script in your `package.json` file:
```js
// ...
"scripts": {
  // ...
  "announce": "announce-it"
}
// ...
```

## How to use
Intended to run after a new release in your continues integration

### Twitter Setup
You have to create a [Developer Account on Twitter](https://developer.twitter.com/).

* Create an App
* From your apps list go to your app Details
* Select the `Keys and tokens` tab
* Use these Token as environment variables in this fashion:
  * `CONSUMER_KEY` = API key
  * `CONSUMER_SECRET` = API secret key
  * `ACCESS_TOKEN_KEY` = Access token
  * `ACCESS_TOKEN_SECRET` = Access token secret


### Using Templates
Inside your `package.json` file, add an `announcements` object with `tweet` property.

You can then create your own tweet message template (using [`_.template`](https://lodash.com/docs/4.17.11#template)) that will be posted to twitter.

You can use these variables:
  * Package name: `<%= package %>`
  * Version number: `<%= version %>`
  * Package description: `<%= description %>`
  * Package author: `<%= author %>`
  * Homepage link: `<%= homepage%>`

#### Example:
`Version <%= version %> of <%= package %> is live! check it out <%=homepage %>`

## Contributing

If you have suggestions for how announce-it could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## Contributors

Thanks goes to our contributors! ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/ZimGil"><img src="https://avatars3.githubusercontent.com/u/39461857?v=4" width="100px;" alt="Gil Tichon"/><br /><sub><b>Gil Tichon</b></sub></a><br /><a href="#infra-ZimGil" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kibibit/announce-it/commits?author=ZimGil" title="Code">💻</a> <a href="#projectManagement-ZimGil" title="Project Management">📆</a></td><td align="center"><a href="http://thatkookooguy.kibibit.io"><img src="https://avatars3.githubusercontent.com/u/10427304?v=4" width="100px;" alt="Neil Kalman"/><br /><sub><b>Neil Kalman</b></sub></a><br /><a href="#infra-Thatkookooguy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#ideas-Thatkookooguy" title="Ideas, Planning, & Feedback">🤔</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

Library logo is made by
<a href="https://www.freepik.com/" title="Freepik">Freepik</a>
from
<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
and licensed by
<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

## License

[MIT](LICENSE) © 2019 Gil Tichon <ZimGil@kibibit.io>
