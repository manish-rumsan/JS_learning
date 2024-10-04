//Write a JavaScript program to count the number of vowels in a given string.
let sentense="Learning JavaScript to use for automation Testing"        //Defining the sentense

const vowel="aeiouAEIOU"                                                      //definig the vowel
let count=0;                                                            //initializing the count

//using for loop
for(let char of sentense){
    if(vowel.includes(char)){                                           //check vowel from the sentense
    count++;                                                            //count increment
    }
    console.log(char)
}

console.log("Number of vowels:", count);