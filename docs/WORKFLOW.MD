
# Workflow

We are using the branch model based in [Short-Lived Feature Branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/). If you just getting start to contribute, you should:

- Fork the project to your GitHub account. 
- From your fork, clone the repository to your machine

Make sure to stay tuned for releases of the project and don't forget to update your fork. Also please read our [Contribution Guide](https://github.com/tobiasbu/magnetos/blob/master/docs/CONTRIBUTING.MD) to maintain our standards.

## Steps

In summary our workflow is: 

1. Pick a issue or select a feature which you're assigned
2. Create a branch from master
3. Develop in your new branch
4. Create a Pull Request
5. Wait for CI qualify your contribution
6. After that, one of our QA team member will test your branch and approve or not (don't worry they are very gentle).

For more details how we work we branches and Pull Request check the next sections.

## Creating a Branch

Our branch system is very simple:

1. After you picked a Issue or selected a new feature you want to implement (see our Development Plan) go to your project in your machine.

2. Open your favorite prompt, and create a branch with name that fills the following requisites: 

- `fix` - for bug fixing (eg: `fix/1234`);

- `feature` - implementation of new feature. 

    If the feature is from our Issues page you should use `feature/issue_id` (eg: `feature/5678`).

    Otherwise, is totally new one use `feature/name_of_feature` (eg: `feature/toast_notification`).

- `break` - for changes that will break previous version of the Magnetos.
    For `break` branches follow the same rules as `feature`.

3. Start to develop!

**Don't forget to read our [Contribution Guide](https://github.com/tobiasbu/magnetos/blob/master/docs/CONTRIBUTING.MD)**.

## Pull Requests

Once you have finished your code, the next step is to make a Pull Request. Go to our [Pull Request](https://github.com/tobiasbu/magnetos/pulls) page and create a new Pull Request from your fork.

To maintain readability describe the requested topics according to type of PR. You can check in our [templates](https://github.com/tobiasbu/magnetos/tree/master/.github/ISSUE_TEMPLATE) which topics you need to fill.

Each PR type must have at the beginning one of the following tags.

Tag | Description
--- | --- 
[FIX] | for bug fixing. 
[FEATURE]  | for new feature 
[BREAK] | for changes that will break Magnetos

At the end of the title, insert the issue ID in parentheses. (eg: `(9874)`).

### Examples:

- `[FIX] User's REST request (1223)`
- `[FEATURE] Adding new dashboard layout (45)`
- `[BREAK] Removing JSS and moving to styled-components.`