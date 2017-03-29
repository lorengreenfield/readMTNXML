import chai, {expect} from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

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

    it('Should return a fake positive result', function(){
        expect(true).to.equal(true);
    });


    //TODO - should probably use proxyquire to stub browser-require and feed in an actual MTN.XML feed from a local file to test
});