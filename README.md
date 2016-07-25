# tricking-npm
## An experiment of using npm link to facilitate different lib for dev and prod environments

In this experiment, knex is used as the target that we want to stub out.
In *production*, we want to use Knex properly, and in *development* we want to replace it with our own functions.

There are three scripts in the structure:

- `run-real` runs it as production
- `run-stub` runs it as development
- `cleanup` is a cleanup script

`run-real` will produce a real sqlite3 db file in the test-npm directory.

`run-stub` will produce the output `RUNNING STUB`
