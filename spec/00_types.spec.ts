describe('types in typescript', () => {
    describe('declaring variables and constants', () => {

        it('implicity any', () => {
            // No Typescript in this example.
            let x;
            x = 'Tacos';
            expect(typeof x).toBe('string');
            x = 3.19;
            expect(typeof x).toBe('number');
            x = function () { };
            expect(typeof x).toBe('function');
            x = ['dog', 'cat', 'mouse', 99, 'tacos'];
            expect(typeof x).toBe('object');
        });
        it('implicity typing', () => {
            let x: string | number = 'Tacos'; // Union Type

            x = 3.19;

            let y: number | number[];

            y = 99;
            y = [123, 345];
            expect(typeof y).toBe('object');

        });
        it('has const', () => {
            // const does not allow reassignment
            const x = 3.14 // you must initialize it!

            const favoriteNumbers = [9, 20, 108];
            // cannot do favoriteNumbers = [1,2,3]
            // but can do:
            favoriteNumbers[0] = 10;

            expect(favoriteNumbers).toEqual([10, 20, 108]);

            const movie = { title: 'Jaws', yearReleased: 1978 };

            movie.yearReleased = 1977;

            // let art: { title: string; yearReleased: number; director: string;} | { title: string;, yearOfProduction: number;, singer: string;};
            interface Movie { title: string; yearReleased: number, director: string };
            interface Song { title: string; yearOfProduction: number; singer: string };
            let art: Movie | Song;

            art = {
                title: 'Jaws',
                yearReleased: 1977,
                director: 'Spielberg'
            };

            art = {
                title: 'cass',
                yearOfProduction: 1993,
                singer: 'Fugazi'
            };

        });

        it('has var but it is bad and you shouldnt use it', () => {
            const age = 19

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message = 'Old enough';
            } else {
                // tslint:disable-next-line: no-var-keyword
                var message = 'Too Young';
            }

            // message is declared in function. Should not be available outside but is.
            expect(message).toBe('Too Young');
            const x = 99;

            const title = 'King of Scotland';
        });



    });
    describe('literal in TypeScript', () => {

        it('has string literals', () => {
            const n1 = 'Bob';
            // tslint:disable-next-line: quotemark
            const n2 = "Bob";
            expect(n1).toEqual(n2);
            // tslint:disable-next-line: quotemark
            const someHtml = "<h1 class=\"pretty\">Hello</h1>";

        });

        it('has template strings', () => {
            const n1 = `Bob`
            const n2 = `Bob`
            expect(n1).toEqual(n2);

            const story = `Chapter 1

            Test this long string

            test even longer`;

            console.log(story);

            const name = 'Joe';
            const age = 51;
            const job = 'Dev';

            const description1 = 'The name is ' + name + ' and ' + name + ' is ' + age + ' and works as a ' + job;
            expect(description1).toBe('The name is Joe and Joe is 51 and works as a Dev');

            const description2 = `The name is ${name} and ${name} is ${age} and works as a ${job}`;
            expect(description2).toBe('The name is Joe and Joe is 51 and works as a Dev');
        });
        it('has various ways to express numeric literals', () => {
            let age: number;
            age = 51;

            const n2 = 1.2;
            const n3 = 0xff; // Base 16 (Hex)
            const n4 = 0b010101; // base 2 (binary)
            const n5 = 0o23; // Base 8
            const reallyBigNumber = 1_000_382;

            expect(reallyBigNumber).toBe(1000382);

        });
    });
    describe('arrays and array literals', () => {
        it('has two ways to declare an array', () => {
            type ThingWithLettersAndStuff = string;
            let stuff: (number | ThingWithLettersAndStuff)[];
            stuff = ['dog', 'cat', 'mouse', 99];
            expect(stuff[999]).toBeUndefined();
            // stuff = 99;

            let otherStuff: Array<number | string>;
            otherStuff = [1, 'bird', 99];
        });

        it('has array destructuring and a reset operator', () => {
            const friends = ['sean', 'amy', 'david', 'henry'];
            // const friend1 = friends[0];
            // const friend3 = friends[2];

            const [friend1, , friend3] = friends;
            expect(friend1).toBe('sean');
            expect(friend3).toBe('david');

            const [first, ...allTheOthers] = friends;

            // the rest operator
            expect(first).toBe('sean');
            expect(allTheOthers).toEqual(['amy', 'david', 'henry']);

            const newFriends = ['billy', ...friends, 'violet'];
            expect(newFriends).toEqual(['billy', 'sean', 'amy', 'david', 'henry', 'violet'])


            function addThemAll(...numbers: number[]) {
                return numbers.reduce((s, n) => s + n);
            }
            expect(addThemAll(1)).toBe(1);
            expect(addThemAll(2, 2)).toBe(4);
            expect(addThemAll(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
        it('tuples', () => {
            // typed arrays
            const stuff: [string, number, string] = ['cat', 13, 'dog'];

            const first = stuff[0]; // data type = string
            const second = stuff[1]; // data type = number

            type QuoteMarkRule = [boolean, string];
            const myQuoteRule: QuoteMarkRule = [true, 'single'];
            if (myQuoteRule[0]) {
                console.log(`Youe are enforcing quote marks and using ${myQuoteRule[1]} quotes`)
            }
        });
    });

    describe('a practical example of what you might use a tuple for (but probably would not)', () => {
        it('an oop approach', () => {
            // string FormatName(string first, string last)
            interface FormattedName { formattedName: string; numberOfLettersInName: number; }
            function formatName(first: string, last: string): FormattedName {
                const formattedName = `${last}, ${first}`
                return {
                    formattedName,
                    numberOfLettersInName: formattedName.length
                }
            }
            function formatNameCasually(first: string, last: string): FormattedName {
                const formattedName = `${first} ${last}`;
                return {
                    formattedName,
                    numberOfLettersInName: formattedName.length
                }
            }
            const result = formatName('Han', 'Solo');
            expect(result.formattedName).toBe('Solo, Han');
            expect(result.numberOfLettersInName).toBe(9);
            // const result2 = formatNameCasually('Luke', 'Skywalker');
            // expect(result2.formattedName).toBe('Luke Skywalker');
            const { formattedName: n } = formatNameCasually('Luke', 'Skywalker');
            expect(n).toBe('Luke Skywalker');
        });
        it('if that wasn\'t confusing enough, here is tuples', () => {
            function formatName(first: string, last: string): [string, number] {
                const formattedName = `${last}, ${first}`;
                return [formattedName, formattedName.length]
            }
            const results = formatName('Han', 'Solo');
            expect(results[0]).toBe('Solo, Han');
            expect(results[1]).toBe(9);
            // but wait! We have destructuring
            const [fullName] = formatName('Luke', 'Skywalker');
            expect(fullName).toBe('Skywalker, Luke');
            const [, lengthAnyName] = formatName('Han', 'Solo')
            expect(lengthAnyName).toBe(9);
        });
    });
    describe('object literals and interface', () => {
        it('destructuring an object', () => {
            const movie = { title: 'A New Hope', director: 'Lucas', yearReleased: 1977 };
            // Old Skool
            const t1 = movie.title;
            const y1 = movie.yearReleased;
            expect(t1).toBe('A New Hope');
            expect(y1).toBe(1977);
            // new Skool
            const { title: t2, yearReleased: y2 } = movie;
            expect(t2).toBe('A New Hope');
            expect(y2).toBe(1977);
        });
        it('anonymous types are implicitly defines by an interface', () => {
            const thor = {
                title: 'Thor: Ragnarok',
                director: 'Taika Waititi',
                yearReleased: 2017
            };

            thor.title = 'Thor Ragnarok';
            expect(thor.title).toBe('Thor Ragnarok');
            // tslint:disable-next-line: no-string-literal
            expect(thor.title).toBe('Thor Ragnarok');
            // thor.test = 'blah'   //till throw an error

        });
        it('you can make extensible objects', () => {
            interface Book {
                title: string;
                author: { firstName: string, lastName: string };
                numberOfPages: number;
            }

            const highWeirdness: Book = {
                title: 'High Weirdness',
                author: {
                    firstName: 'Erik',
                    lastName: 'Davis'
                },
                numberOfPages: 545
            }
            expect(highWeirdness.author.lastName).toBe('Davis');
        })

        it('you can make extensible objects', () => {
            interface Book {
                title: string;
                author: { firstName: string, lastName: string };
                numberOfPages: number;
                publisher?: string;
            }
            const highWeirdness: Book = {
                title: 'High Weirdness',
                author: {
                    firstName: 'Erik',
                    lastName: 'Davis'
                },
                numberOfPages: 545
            };
            expect(highWeirdness.author.lastName).toBe('Davis');
            const theBrokeHorses: Book = {
                title: 'The Broke Horses',
                author: { firstName: 'Jannette', lastName: 'Walls' },
                numberOfPages: 265,
                publisher: 'Penguin'
            }
            function doSomethingWithABook(book: Book): string {
                let result = `Book ${book.title} by ${book.author.lastName} has ${book.numberOfPages}`;
                if (book.publisher) {
                    result += ` and was published by ${book.publisher}`;
                }
                return result;
            }
        });

        it('truth table', () => {
            expect('').toBeFalsy(); // empty strings are false
            expect('tacos').toBeTruthy(); // any other strings are true
            expect(0).toBeFalsy(); // any string other than zero is truthy
            expect(1).toBeTruthy();
            expect(-1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(NaN).toBeFalsy(); // Not a number. like if you try to subtract a 'cat' from 10.
        });


        it('has duck typing (aka structural typing)', () => {
            interface MessageHaver { message: string }
            function logMessage(item: MessageHaver) {
                console.log(`At ${new Date().toLocaleTimeString()} you got the message ${item.message}`);
            }
            logMessage({ message: 'Call your mom' });
            const phoneCall = {
                from: 'Jenny',
                number: '867-5309',
                message: 'For a good time...'
            };
            logMessage(phoneCall);
        });
        it('what', () => {
            interface AtLeastHasAMessage {
                message: string;
                [key: string]: any; // can have any other properties.
            }
            const phoneCall: AtLeastHasAMessage = {
                message: 'Call your mom',
                from: 'Your Mom',
                time: 'Noon',
                number: '999-999-9999'
            }
            // expect(phoneCall['number']).toBe('999-999-9999');
            // 'Dictionary'
            // Csharp example:
            // Dictionary<string, int> bowlingScores;
            // bowlingScores['craig'] = 127;
            // bowlingScores['joe'] = 288;
            interface BowlingScores {
                [key: string]: number;
            }
            interface Dictionary<T> {
                [key: string]: T
            }
            // Can use either above interface below

            const scores: Dictionary<number> = {
                craig: 127,
                joe: 288,
                'mary ann': 300
            }
            expect(scores.craig).toBe(127);
            expect(scores['mary ann']).toBe(300);
            scores['jimmy jo bob'] = 145;
            const nickNames: Dictionary<string> = {
                bill: 'Billarama!',
                kevin: 'kev'
            }
            expect(nickNames.kevin).toBe('kev');
            // tslint:disable-next-line: no-string-literal
            expect(nickNames['kevin']).toBe('kev');
        });
    });
});
