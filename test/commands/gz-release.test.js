const {expect, test} = require('@oclif/test')

describe('gz-release', () => {
  test
  .stdout()
  .command(['gz-release'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['gz-release', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
