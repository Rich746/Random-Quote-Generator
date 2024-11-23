const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

let quotes = [
    '“Be yourself; everyone else is already taken.”', 
	'“In three words I can sum up everything I’ve learned about life: it goes on.”', 
	'“To live is the rarest thing in the world. Most people exist, that is all.”',
	'“Success is not final, failure is not fatal: It is the courage to continue that counts.”', 
	'“The only limit to our realization of tomorrow is our doubts of today.”',
	'“Do not go where the path may lead, go instead where there is no path and leave a trail.”', 
	'“The future belongs to those who believe in the beauty of their dreams.”',
	'“You must be the change you wish to see in the world.”',
	'“It is never too late to be what you might have been.”',
	'“Happiness is not something ready-made. It comes from your own actions.”',
	'“Believe you can and you’re halfway there.”',
	'“The only way to do great work is to love what you do.”', 
	'“What lies behind us and what lies before us are tiny matters compared to what lies within us.”', 
	'“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”',
	'“The best way to predict the future is to invent it.”',
	'“Success usually comes to those who are too busy to be looking for it.”',
	'“I have not failed. I’ve just found 10,000 ways that won’t work.”',
	'“Life is what happens when you’re busy making other plans.”', 
	'“Do what you can, with what you have, where you are.”', 
	'“The purpose of our lives is to be happy.”' 
]

let authors = [
    "Oscar Wilde",
    "Robert Frost",
    "Oscar Wilde",
    "Winston Churchill",
    "Franklin D. Roosevelt",
    "Ralph Waldo Emerson",
    "Eleaner Roosevelt",
    "Mahatma Gandhi",
    "George Eliot",
    "Dalai Lama",
    "Theodore Roosevelt",
    "Steve Jobs",
    "Ralph Waldo Emerson",
    "Aristotle",
    "Alan Kay",
    "Henry David Thoreau",
    "Thomas Edison",
    "John Lennon",
    "Theodore Roosevelt",
    "Dalai Lama"
]

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = randomQuote;
    var randomName = authors[Math.floor(Math.random() * authors.length)]
    author.innerHTML = randomName;
})