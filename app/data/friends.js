//Your survey should have 10 questions of your choosing. 
//Each answer should be on a scale of 1 to 5 based on 
//how much the user agrees or disagrees with a question.






=======

//create table
// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//         ]
// }

//create "POST" array for table object above
//possibly use what is below to stringify the objects and their values from the table.
//const myJSON = JSON.stringify(obj);

window.JSON = [{object.array}];

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. 
//Add up the differences to calculate the totalDifference.

// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.

// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

{
    "name": "Barry Good",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "1",
    "2",
    "1",
    "2",
    "2",
    "5",
    "5",
    "1",
    "5"
    ]
    },
{
    "name": "Howdewu Likemenow",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
    ]
    },
{
    "name": "Thizzgurl Issonfire",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
    ]
    },
{
    "name": "Honey Daniels",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "2",
    "2",
    "1",
    "1",
    "1",
    "1",
    "2",
    "1",
    "2"
    ]
    },