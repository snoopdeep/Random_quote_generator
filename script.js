document.querySelector(".btn").addEventListener("click",fun1);
function fun1(){
    // first create a disctonary which contain author name as key and quote as value(must be inclosed in '');
    // then we create a array of keys by passing values to them
    // then we generalte random no btw range;

    var dict={
        "":'',
        "":'',
        "":'',
        "If you don’t love yourself, you’ll always be looking for someone else to fill the void inside you, but no one will ever be able to do it.":'"-Lori Deschene"',
        "Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness.":' "-Iain Thomas" ',
        "I survived because the fire inside me burned brighter than the fire around me.": ' "-Joshua Graham"',
        "Some of the most generous people have no money. Some of the wisest people have no education. Some of the kindest people were hurt the most":'"-Steve Wentworth"',
        "When you learn to accept instead of expect, you’ll have fewer disappointments.":'"-Unknown"',
        "You can’t force anyone to value, respect, understand, or support you, but you can choose to spend your time around people who do.":'"-Lori Deschene"',
        "Don't lie to me. Don't deceive me. Give me the truth. Even if it breaks me. A painful truth is better than a pleasant lie.":'"-Yasmin Mogahed"',
        "To share your weakness is to make yourself vulnerable; to make yourself vulnerable is to show your strength.":'"-Criss Jami"',
        "Your circle should want to see you win. Your circle should clap the loudest when you have good news. If they don’t, get a new circle.":'"-Wesley Snipes"',
        "We all have two lives. The second one starts when we realize that we only have one.":'"-Confucius"',
        "The people you will always remember are the ones who made you feel loved when you were at your lowest.":'"-Brigitte Nicole"',
        "Just because you’re taking longer than others doesn’t mean you’re a failure. Keep going.":'"-Unknown"',
        "Don’t wait for your feelings to change to take the action. Take the action and your feelings will change.":'"-Barbara Baron"',
        "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.":'"-Proverb"',
        "In case no one told you today: You’re beautiful. You’re loved. You’re needed. You’re alive for a reason. You’re stronger than you think. You’re going to get through this. I’m glad you’re alive. Don’t give up!":'"-Unknown"',
        "Your circle should want to see you win. Your circle should clap the loudest when you have good news. If they don’t, get a new circle.":'"- Wesley Snipes"',
        "Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.":'"-Roy T. Bennett, The Light in the Heart"',
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.":'"-Marilyn Monroe"',
        "You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.":'"-William W. Purkey"',
        "Good friends, good books, and a sleepy conscience: this is the ideal life.":'"-Mark Twain"',
        "Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.":'"-Markus Zusak, I Am the Messenger"',
        "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.":'"-Ralph Waldo Emerson"',
        "Be yourself; everyone else is already taken.":'"-Oscar Wilde"',
        "Without music, life would be a mistake.":'"-Friedrich Nietzsche, Twilight of the Idols"',
        "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.":'"-Bill Keane"',
        "And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.":'"- Haruki Murakami, Kafka on the Shore"',
        "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.":'"-Roy T. Bennett, The Light in the Heart"',
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.":'"- Marilyn Monroe"',
        "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.":'"-Maurice Switzer"',
        "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.":'"-Shel Silverstein"',
        "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.":'"-Paulo Coelho, The Alchemist"',
        "So many books, so little time.":'"-Frank Zappa"',
        "Friends don't lie":'"-Unknown🤝"'
    }
    var author_array= Object.keys(dict);
    // console.log(Object.keys(dict)[29])
    
    // console.log(author_array.length);
    //Note about Object.keys()
    //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false
    //   };
      
    //   console.log(Object.keys(object1));
    //   // Expected output: Array ["a", "b", "c"]


    // selecting random author from author_array creating random no(key) in range of author.lenght 
    // key array
    var a=Math.ceil(Math.random()*10);
    var b=Math.ceil(Math.random()*10);
    var c=Math.ceil(Math.random()*10);
    console.log(a+b+c);
    

    var author_no=author_array[a+b+c];
    //var author_no=author_array[ Math.floor(Math.random()*author_array.length)];
    //console.log( Math.floor(Math.random()*author_array.length));

    // now we have the the random author(key) so grab quote(value) correspond to that author
    // value array
    var quote= dict[author_no];
    //console.log(quote)
     document.querySelector("#quote").innerHTML=author_no;
     document.querySelector("#author").innerHTML=quote;
}
