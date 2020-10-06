import { runsArray } from './_runs.js';

const map = new Map();

runsArray.forEach(row => {
    map.set(row.id, JSON.stringify(row));
});

export function get(req, res, next) {
    // the `slug` parameter is available because
    // this file is called [slug].json.js
    const slug  = parseInt(req.params.slug);




    if (map.has(slug)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(map.get(slug));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}
