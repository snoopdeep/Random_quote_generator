document.querySelector(".btn").addEventListener("click",fun1);
function fun1(){
    // first create a disctonary which contain author name as key and quote as value(must be inclosed in '');
    // then we create a array of keys by passing values to them
    // then we generalte random no btw range;

    var dict={
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
        "The people you will always remember are the ones who made you feel loved when you were at your lowest.":'"-Brigitte Nicole"'
    }
    var author_array= Object.keys(dict);
    // console.log(author);
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

    var author_no=author_array[ Math.floor(Math.random()*author_array.length)];
    // console.log(author_no);

    // now we have the the random author(key) so grab quote(value) correspond to that author

    var quote= dict[author_no];
     document.querySelector("#quote").innerHTML=author_no;
     document.querySelector("#author").innerHTML=quote;
}