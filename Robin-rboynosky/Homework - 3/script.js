// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

/*module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
  robot.hear(/javascript/i, function(msg) {
      return msg.send("I love writing code!");
    });
}*/

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

//const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

//module.exports = function(robot) {
   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
 //      return robot.respond(/hi|hello/i, function(msg) {
 //    return msg.send("Howdy!");
 //  });
 // }

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//  return robot.hear(/ship it/i, function(msg) {
//    return msg.send(msg.random(squirrels));
//   });
// };

//PepTalkBot:

const pep = ["https://i.imgur.com/Dem7FgOs.png"];

module.exports = function(robot) {
  robot.hear(/sad panda/i, function(msg) {
    return msg.send("Hello there! I am here to give you a pep talk if you need one. If you're feeling down, say 'Pep talk'. If you're good, say 'I'm good'");
  });
  robot.respond(/Pep talk/, function(res) {
    return res.send("Listen, you're amazing and smart. We all struggle, even bots. Go make yourself a cup of tea and think about it. If you need even more positive energy, say, 'More'");
  });
  robot.respond(/I'm good/, function(res) {
    return res.send("You're more than good. You're great.");
  });
  robot.respond(/More/, function(res){
    return res.send(pep + "\nHow are you feeling now? You can say, 'I feel happier' or 'I feel ___.' Go ahead and tell me how you're doing!");

  });
  robot.respond(/I feel (.*)/i, function(msg) {
    var feeling;
    feeling = msg.match[1];
    if (feeling == "happier") {
      return msg.send("Awesome! My work here is done.");
    } else {
      return msg.reply("Well, don't get too attached to that feeling. All things are temporal.");
    }
  })
  };
