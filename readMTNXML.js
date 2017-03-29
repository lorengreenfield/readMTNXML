import xml2js from 'xml2js';
import request from 'browser-request';
const xmlParser = xml2js.Parser({mergeAttrs: true, explicitArray: false});

export default function readMTNXML(feed, callback){

    request.get(feed, function(err, response, data){

        if(err || response.statusCode >= 400 || response.body.length === 0){
            return callback(new Error({message: err.toString || 'ERROR', statusCode: response.statusCode}))
        }

        xmlParser.parseString(res.body, function (err, result){

            if(err){
                return callback(err.toString());
            }
            callback(null, result);
        });

    });
}

global.readMTNXML = readMTNXML;