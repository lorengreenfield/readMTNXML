import chai, {expect} from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import request from 'request';
import readMTNXML from './readMTNXML';

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
        }, request);

    });


});