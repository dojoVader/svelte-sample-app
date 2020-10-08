import { runsArray } from './_runs.js';


export function get(req, res, next) {
    // the `slug` parameter is available because
    // this file is called [slug].json.js
    const slug  = parseInt(req.params.slug);
    const currentSlug = runsArray.filter((e) => e.id === slug);   
    
    if (currentSlug.length) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        
        res.end(JSON.stringify(currentSlug[0]));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}
