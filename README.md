# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build & Deployment

- Pull-requests to `main` branch hook build (dry-run).
- Commits to `main` hook automatic deployment to `gh-pages` branch.

### Versioning

- You should write docs for the next version in `docs/**`.
  - URL: `/next/`
- After releasing the SpringQL `v0.15.0`, for example, run the following command and make a pull-request to `main` branch:

    ```console
    yarn run docusaurus docs:version 0.15
    ```

  - Note that you must not include the patch version because patch versions should not change the documents.
- If you find any document mistakes in older versions, you can directly edit the old version in `versioned_docs/version-*/**`. Then create a pull-request to `main` branch.
