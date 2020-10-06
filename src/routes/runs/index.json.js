import { runsArray, runsHeader } from './_runs.js';

const jsonData = JSON.stringify({
   header: runsHeader,
   rows: runsArray
});


export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(jsonData);
}