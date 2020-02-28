/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {CLIError, Command, flags, utils} from '@microsoft/bf-cli-command'

export default class OrchestratorEvaluate extends Command {
  static description = 'Create orchestrator evaluation report from .lu/.qna files'

  static flags: flags.Input<any> = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(OrchestratorEvaluate)

    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\src\\botframework-cli\\packages\\orchestrator\\src\\commands\\evaluate.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}