'use strict';

describe('Routes Books', () => {
    const defaultBooks = {
        id: 1,
        name: 'Book1'
    };

    describe('Route GET /book', () => {
        it('Should return a list of books', done => {
            request
                .get('/books')
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultBooks.id);
                    expect(res.body[0].name).to.be.eql(defaultBooks.name);

                    done(err);
                });
        });
    });
});