var should = require('should'),
    sinon = require('sinon');

describe('Book Controller Test', function() {
    describe('Post',function() {
        it('Should not allow an empty title', function(){
            var Book = function(book) {
                this.save = function() {};
            };
            var req = {
                body: {
                    author: 'Gábor'
                }
            };
            var res =  {
                status:sinon.spy(),
                send:sinon.spy()
            };
            var bookController = require('../controllers/bookController')(Book);

            bookController.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);

            res.send.calledWith('Title is required').should.equal(true)
        });
    });
});