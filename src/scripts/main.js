// **Random insult generator in response to profanity**

// // create an array with all the cuss words all caps or all lowercase
// const cussWords = 

const profanity = ["damn", "shit", "piss", "fuck", "cunt", "cocksucker", "motherfucker", "fucker", "bitch", "asshole", "asshole", "ass", "dickhead", "pussy", "bastard"]
// // create an array with all the insults
const insults = ["Your mom!", "Get bent.", "Suck me sideways.", "You're a dipshit", "You're a lyin' dog-faced pony soldier.", "Eat a bag of dicks.", "Surprise, you're adopted. Nobody loves you!", "Take your head out of your ass. Its not a hat.", "You probably wipe back to front.", "You're as useful as a poopy-flavored lollypop." ]

// // create a function that returns True if there is a cussword in the string
//  # FOR each cussWord
//         # IF the cussWord is included in the str.toUpperCase
//                # return true
//    # return false;
// }

function isThereProfanity(str) {
    profanity.forEach(cussWord) {
        if(cussWord.includes(str.toUpperCase()) {
            return true;
        }
            return false;
    }
}
// onClick("click", event) => {
    
// }

// onClick(event) => {
//    // grab the string (from the DOM... figure out the selector and get it's value)
//    const inputString = 
//    // IF (isThereACussWord(inputString) === true)
//        // display insult back to them
//        const insult =   // get a random element from the insults array
//        // display insult
// }