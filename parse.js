// mail.js for email client functionality
// last updated: 0713 2014

// declarations and setup
var fs = require("fs"),
	inbox = require("inbox"),
	buffer = '';


var rstream = fs.createReadStream('test.eml');

rstream.on('data', function (chunk) {
	buffer += chunk;
})

rstream.on('end', function () {  // done
	// console.log(buffer);
	// send the email source to the parser
	mailparser.write(buffer);
	mailparser.end();
});
	        
var mailparser = new (require("mailparser").MailParser)({debug: true});

mailparser.on("end", function(mail_object){

    console.log("From:", mail_object.from); 		//	[{address:'sender@example.com',name:'Sender Name'}]
    console.log("Subject:", mail_object.subject); 	//	Hello world!
    console.log("Text body:", mail_object.text); 	//	How are you today?



    /*	MAIL OBJECT ATTRIBUTES
		headers - unprocessed headers in the form of - {key: value} - if there were multiple fields with the same key then the value is an array
		from - an array of parsed From addresses - [{address:'sender@example.com',name:'Sender Name'}] (should be only one though)
		to - an array of parsed To addresses
		cc - an array of parsed Cc addresses
		bcc - an array of parsed 'Bcc' addresses
		subject - the subject line
		references - an array of reference message id values (not set if no reference values present)
		inReplyTo - an array of In-Reply-To message id values (not set if no in-reply-to values present)
		priority - priority of the e-mail, always one of the following: normal (default), high, low
		text - text body
		html - html body
		date - date field as a Date() object. If date could not be resolved or is not found this field is not set. Check the original date string from headers.date
		attachments - an array of attachments
    */

	var sqlite3 = require('sqlite3').verbose(),
		db = new sqlite3.Database('email.db'),
		escape = require('escape-html');

	var query = "INSERT INTO email (sender, email , subject, body) VALUES ('"+ escape(mail_object.from[0].name)+"', '"+escape(mail_object.from[0].address)+"', '"+escape(mail_object.subject)+"', '"+escape(mail_object.text)+"');";

	db.run(query);

	db.close();

});
















/////
//////

/////


/////


/////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


//////////
//////

/////


/////