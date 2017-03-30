import xml2js from 'xml2js';
import _request from 'browser-request';
const xmlParser = xml2js.Parser({mergeAttrs: true, explicitArray: false});

export default function readMTNXML(feed, callback, request = _request){

    //Feed could be a string, or a URL, we should try to detect that here. If it starts with http then it can be considered a URL
    if(feed.indexOf('http') !== 0){
        return parseXML(feed, function(err, response){
            callback(err, response);
        });
    }

    request(feed, function(err, response, data){

        if(err || response.statusCode >= 400 || response.body.length === 0){
            return callback(new Error({message: err.message || err.toString || 'ERROR', statusCode: response.statusCode}))
        }

        parseXML(data, function(err, response){
            callback(err, response);
        });

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


window.readMTNXML = readMTNXML;