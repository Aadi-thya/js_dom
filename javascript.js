
const btn=document.querySelector('#new-quote');
const quote=document.querySelector('.quote');
const person=document.querySelector('.person');

const quotes=[
    {
        quote:`"To live is the rarest thing in the world. Most people exist, that is all."`,
        person:`Oscar Wilde`
    },
    {
        quote:`"That it will never come again is what makes life so sweet."`,
        person:`Emily Dickinson`
    },
    {
        quote:`"'It is never too late to be what you might have been."`,
        person:`George Eliot`
    },
    
    {
        quote:`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." `,
        person:`Ralph Waldo Emerson`
    },
    
    {
        quote:`"Pain is inevitable. Suffering is optional."`,
        person:`Haruki Murakami`
    },
    
    {
        quote:`"ometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."`,
        person:`John Green`
    },
    
    {
        quote:`"Tears are words that need to be written."`,
        person:`Paulo Coelho`
    },
    
    {
        quote:`"We have to continually be jumping off cliffs and developing our wings on the way down." `,
        person:`Kurt Vonnegut`
    },
    
    {
        quote:`"I hope that in this year to come, you make mistakes. Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're doing something." `,
        person:`Neil Gaiman`
    },
];


btn.addEventListener('click',function(){

    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
    console.log(quote);
    console.log(person);
})