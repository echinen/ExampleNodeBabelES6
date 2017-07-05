'use strict';

describe('Routes Books', () => {
    const Books = app.datasource.models.Books,
    defaultBooks = {
        id: 1,
        name: 'Book1'
    };

    beforeEach(done => {
        Books
            .destroy({where: {}})
            .then(() => Books.create(defaultBooks))
            .then(() => {
                done();
            });
    });

    describe('1) Route GET /book', () => {
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

    describe('2) Route GET /book/{id}', () => {
        it('Should return a book', done => {
            request
                .get('/books/1')
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(defaultBooks.id);
                    expect(res.body.name).to.be.eql(defaultBooks.name);

                    done(err);
                });
        });
    });

    describe('3) Route POST /books', () => {
        it('Should create a books', done => {
            const newBooks = {
                id: 2,
                name: 'newBook'
            };

            request
                .post('/books')
                .send(newBooks)
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(newBooks.id);
                    expect(res.body.name).to.be.eql(newBooks.name);

                    done(err);
                });
        });
    });

    describe('4) Route PUT /book{id}', () => {
        it('Should create a book', done => {
            const updatedBook = {
                id: 1,
                name: 'updated book'
            };

            request
                .put('/books/1')
                .send(updatedBook)
                .end((err, res) => {
                    expect(res.body).to.be.eql([1]);

                    done(err);
                });
        });
    });

    describe('5) Route DELETE /book{id}', () => {
        it('Should delete a book', done => {
            request
                .delete('/books/1')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);

                    done(err);
                });
        });
    });
});