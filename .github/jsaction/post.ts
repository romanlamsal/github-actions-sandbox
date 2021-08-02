import * as core from "@actions/core"
import * as github from "@actions/github"

try {
    core.info("Name of the job: " + github.context.job)
} finally {
    core.info("I am post!!! 'success' is set to: " + process.env.IS_SUCCESS)
}
