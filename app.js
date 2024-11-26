const quote = document.querySelector('.Quote');
const person = document.querySelector('.person');
const newQuote = document.querySelector('#new-quote');

const quotes = [
                
                {quote: `"The future belongs to those who believe in the beauty of their dreams."`,
                 person:`-Eleanor Roosevelt`},

                {quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
                 person:`"-Oprah Winfrey"`},

                 {quote:`"Your time is limited, so don't waste it living someone else's life"`,
                 person:`"-Steve Jobs"`},

                
                {quote: `"The way to get started is to quit talking and begin doing. "`,
                 person:`-Walt Disney`},
                
                 {quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
                 person:`– Winston S. Churchill`},
                
                 {quote: `"The road to success and the road to failure are almost exactly the same."`,
                 person:`- Colin R. Davis`},
                
                 {quote: `"Success usually comes to those who are too busy to be looking for it."`,
                 person:`- Henry David Thoreau`},
                
                 {quote: `"Don’t be afraid to give up the good to go for the great."`,
                 person:`- John D. Rockefeller`},
                
                 {quote: `"I find that the harder I work, the more luck I seem to have."`,
                 person:`- Thomas Jefferson`},
                
                 {quote: `"There are two types of people who will tell you that you cannot make a difference in this world: those who are 
                 afraid to try and those who are afraid you will succeed."`,
                 person:`- Ray Goforth`},
                
                 {quote: `"Never give in except to convictions of honor and good sense."`,
                 person:`Winston Churchill`},];

                


                 newQuote.addEventListener("click", function() {
                    let random = Math.floor(Math.random() * quotes.length);

                    quote.innerText = quotes[random].quote;
                    person.innerText = quotes[random].person;
                 })