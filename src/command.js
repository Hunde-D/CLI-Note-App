import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        describe: "the content of the note created",
      });
    },
    (argv) => {
      console.log(argv.note);
    }
  )
  .option("tag", {
    alias: "t",
    type: "string",
    describe: " tag for the note",
  })
  .demandCommand(1)
  .parse();
