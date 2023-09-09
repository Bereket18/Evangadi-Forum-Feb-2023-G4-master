import { connection } from "./db.js";
import query from "../query/query.js";

// //------- table create--------//

connection.query(query.registrationTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("registrationTableCreated!");
});

connection.query(query.profileTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("profileTableCreated!");
});

connection.query(query.addressTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("addressTableCreated!");
});

connection.query(query.questionTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("questionTableCreated!");
});

connection.query(query.answerTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("answerTableCreated!");
});

connection.query(query.replayTableCreate, (error, results, fields) => {
	if (error) console.log(error);
	console.log("replayTableCreated!");
});
