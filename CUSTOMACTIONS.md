# Running Custom Actions
First you need to (obviously) define your action, second you have to use it (again: obviously).

## Defining your action
* create a file named `action.yml` in any directory in the project, e.g. ``/.github/customaction``
    * Attention: the file MUST be named ``action.yml``
* Define your action according to [the doc](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)

### Hints
* IDEA will recognize ``action.yml`` files as github action files and offer content assist. YAY.
* each ``run`` declaration will need the additional info, in which type of shell the command
should run.
* Valid file names for github actions are:
    * action.yml
    * action.yaml
    * Dockerfile
* Actions can also be created using javascript with node, see [the doc](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action#creating-an-action-metadata-file)

## Using your action
Supposed you've completed the above steps, do the following in your actual workflow file:

* Run ``actions/checkout@v1``
    * if you don't, your action will not be available under a relative path
* Add a ``uses`` step with the relative path to the **directory** containing your action file.

## Example
An example for a custom action can be seen [here](.github/customaction/action.yml) which is used 
[in this workflow](.github/workflows/running_custom_action.yml).