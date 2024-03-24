// Define an array of objects containing president information
const presidents = [
    {
        name: "Nnamdi Azikiwe",
        birthdate: "November 16, 1904"
    },
    {
        name: "General Johnson Aguiyi-Ironsi",
        birthdate: "March 3, 1924"
    },
    {
        name: "General Yakubu Gowon",
        birthdate: "October 19, 1934"
    },
    {
        name: "General Murtala Mohammed",
        birthdate: "November 8, 1938"
    },
    {
        name: "Olusegun Obasanjo",
        birthdate: "March 5, 1937"

    },
    {
        name: "Abubakar Tafawa Balewa",
        birthdate: "December, 1912"

    },
    {
        name: "Shehu Shagari",
        birthdate: "February 25, 1925"

    },
    {
        name: "Muhammadu Buhari",
        birthdate: "December 17, 1942"

    },
    {
        name: "Ibrahim Babangida",
        birthdate: "August 17, 1941"

    },
    {
        name: "Ernest Adegunle Oladeinde Shonekan",
        birthdate: "May 9, 1936"

    },
    {
        name: "Sani Abacha",
        birthdate: "September 20, 1943"

    },
    {
        name: "Abdulsalami Abubakar",
        birthdate: "June 13, 1942"

    },
    {
        name: "Umaru Musa Yar'Adua",
        birthdate: "August 16, 1951"

    },
    {
        name: "Goodluck Ebele Jonathan",
        birthdate: "November 20, 1957"

    },
];


function askQuestionsSerially() {
    let score = 0; // Initialize the score

    // Loop through each president
    for (const currentPresident of presidents) {
        const userAnswer = prompt(`When was ${currentPresident.name} born?`);

        if (userAnswer === currentPresident.birthdate) {

            document.write (`Correct! ${currentPresident.name} was born on ${currentPresident.birthdate}.<br>`);
            // console.log(`Correct! ${currentPresident.name} was born on ${currentPresident.birthdate}.`);
            score++;
        } else {
            document.write (`Incorrect. ${currentPresident.name}'s birthdate is ${currentPresident.birthdate}.<br>`);
            // console.log(`Incorrect. ${currentPresident.name}'s birthdate is ${currentPresident.birthdate}.`);
        }
    }

    document.getElementById("demo1").innerHTML= (`Your final score: ${score} out of ${presidents.length}`);   
    // console.log(`Your final score: ${score} out of ${presidents.length}`);
}

// Call the function to start asking questions
 askQuestionsSerially();











// // Initialize score
// let score = 0;

// // Function to ask a random question
// function askQuestion() {
//     const randomIndex = Math.floor(Math.random() * presidents.length);
//     const currentPresident = presidents[randomIndex];
//     const userAnswer = prompt(`When was ${currentPresident.name} born?`);

//     if (userAnswer === currentPresident.birthdate) {
//         console.log("Correct!");
//         score++;
//     } else {
//         console.log(`Incorrect. The correct answer is ${currentPresident.birthdate}.`);
//     }
// }

// // Function to start the quiz
// function startQuiz() {
//     console.log("Welcome to the Nigerian Presidents Quiz!");
//     console.log("Answer the following questions about their birthdates:");

//     for (let i = 0; i < presidents.length; i++) {
//         askQuestion();
//     }

//     console.log(`Your final score: ${score}/${presidents.length}`);
// }

// // Start the quiz
// startQuiz();
