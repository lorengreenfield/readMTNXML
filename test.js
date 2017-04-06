import chai, {expect} from 'chai';
import dirtyChai from 'dirty-chai';
import readMTNXML from './readMTNXML';
chai.use(dirtyChai);

describe('readMTNXML', function(){

    before(function(){

        return new Promise(function(resolve){

            //setup code in here

            resolve();
        });
    });

    afterEach(function(){

    });

    it('Has a top level report object', function(done){

        readMTNXML('http://reportpal-cdn.resorts-interactive.com/mtnxml/63', function(err, response){

            expect(response).to.have.property('report').that.is.an('object');
            done();
        });

    });


});