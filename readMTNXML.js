import xml2js from 'xml2js';
const xmlParser = xml2js.Parser({mergeAttrs: true, explicitArray: false});
import {get} from 'axios';

export default function readMTNXML(feed, callback){

    //Feed could be a string, or a URL, we should try to detect that here. If it starts with http then it can be considered a URL
    if(feed.indexOf('http') !== 0){
        return parseXML(feed, function(err, response){
            callback(err, response);
        });
    }

    get(feed)
        .then(function (response) {
            parseXML(response.data, function(err, xmlResponse){
                callback(err, xmlResponse);
            });
        })
        .catch(function (err) {
            callback(new Error({message: err.message || err.toString || 'ERROR', statusCode: response.statusCode}))
        });

}


function parseXML(xml, callback){

    xmlParser.parseString(xml, function (err, result){

        if(err){
            return callback(err.message || err.toString());
        }
        callback(null, result);
    });
}