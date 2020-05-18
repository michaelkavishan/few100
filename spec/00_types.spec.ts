describe('types in typescript', () => {
    describe('declaring variables and constants', () => {

        it('implicity any', () => {
            //No Typescript in this example.
            let x;
            x = 'Tacos';
            expect(typeof x).toBe('string');
            x = 3.19;
            expect(typeof x).toBe('number');
            x = function () { }
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
            //const does not allow reassignment
            const x = 3.14 // you must initialize it!

            const favoriteNumbers = [9, 20, 108];
            //cannot do favoriteNumbers = [1,2,3]
            //but can do:
            favoriteNumbers[0] = 10;

            expect(favoriteNumbers).toEqual([10, 20, 108]);

            const movie = { title: 'Jaws', yearReleased: 1978 };

            movie.yearReleased = 1977;

            //let art: { title: string; yearReleased: number; director: string;} | { title: string;, yearOfProduction: number;, singer: string;};
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
    });

});