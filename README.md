# magnetos
Magnetos is a transaction bank simulator.

## Table of contents

- Introduction
- Quick Start
- Contributing
  - Project Structure
  - Workflow
  - Coding Guide
- Roadmap
- Credits
- License

## Introduction

TODO

## Quick start

1. Install dependencies

```bash
npm install
```

```bash
npm run start
```

## Contributing

### Project Structure

TODO

### Workflow

We are using the branch model based in [Short-Lived Feature Branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/). If you just getting start to contribute, you should:

- Fork the project to your GitHub account. 
- From your fork, clone the repository to your machine

Make sure to stay tuned for releases of the project and don't forget to update your fork. Also please read our contribution guide and development guide to maintain our standards.

In summary our workflow is: 

1. Pick a issue or select a feature which you're assigned
2. Create a branch from master
3. Develop in your new branch
4. Create a Pull Request
5. Wait for CI qualify your contribution
6. After that, one of our QA team member will test your branch and approve or not (don't worry they are very gentle).

For more details how we work we branches and Pull Request check the next sections.

### Creating a Branch

1. Pick a Issue or select a new feature you want to implement (see our Development Plan).
2. Create a new branch and the branch name should be follow the rules below:

 - `fix` for bug fixing (eg: `fix/1234`);

 - `feature` implementation of new feature. 
    If the feature is from our Issues page you should use `feature/issue_id` (eg: `feature/5678`) otherwise, is totally new one use `feature/name_of_feature` (eg: `feature/toast_notification`).

 - `break` for changes that will break previous version of the Magnetos.
    For `break` branches follow the same rules as `feature`.

3. Start to develop! 

### Pull Requests

  - [FIX]
  - [FEATURE]
  - [BREAK]

## Development Guide

TODO

ES6, TDD, LINT

### Style Guide

[Astro](https://github.com/magnetis/astro)

TODO

We're using TDD to develop....

## Roadmap

TODO

## Credits

TODO

## License

TODO
