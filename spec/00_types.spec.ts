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
                var message = 'Old enough';
            } else {
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
    });
});
