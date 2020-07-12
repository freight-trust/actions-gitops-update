const {Command, flags} = require('@oclif/command')

class GzReleaseCommand extends Command {
  async run() {
    const {flags} = this.parse(GzReleaseCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/sbacha/gh/actions-update-gitops/src/commands/gz-release.js`)
  }
}

GzReleaseCommand.description = `run's release script
...
Extra documentation goes here
`

GzReleaseCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = GzReleaseCommand
