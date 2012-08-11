// Generated by LispyScript v0.1.9
require("./node");
var readline = require("readline");
var ls = require("../lib/ls");
var prefix = "lispy> ";
exports.runrepl = function() {
    var rl = readline.createInterface(process.stdin,process.stdout);
    rl.on('line',function(line) {
        (function () {
                try {
                    var l = ls._compile(line);
            return console.log(eval(l));

                } catch (e) {
                        return (function(err) {
            return console.log(err);
        })(e);
                }
        })();
        rl.setPrompt(prefix,prefix.length);
        return rl.prompt();
    });
    rl.on('close',function() {
        console.log("Bye!");
        return process.exit(0);
    });
    console.log([prefix,'LispyScript REPL v',ls.version].join(''));
    rl.setPrompt(prefix,prefix.length);
    return rl.prompt();
};
