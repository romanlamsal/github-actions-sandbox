import * as core from "@actions/core"
import * as github from "@actions/github"

core.exportVariable("IS_SUCCESS", "I GOT SO FAR, TO LOSE IT ALL")
core.setOutput("anotheroutput", "amazing output")
core.info("I am main!! I got some input: " + core.getInput("someinput"))
core.info("Payload? " + JSON.stringify(github.context.payload))
