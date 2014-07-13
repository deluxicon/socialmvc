// mail.js for email client functionality
// last updated: 0713 2014

// declarations and setup
var fs = require("fs"),
	inbox = require("inbox"),
	buffer = '';
	
var client = inbox.createConnection(false, "imap.gmail.com", {
    secureConnection: true,
    auth:{
        user: "brydavis.mpa@gmail.com",
        pass: "ih82reset!"
    }
});

// var mongoose = require('mongoose');
// 	mongoose.connect('mongodb://127.0.0.1/email'),
// 	Schema = mongoose.Schema, 
//     emailSchema = new Schema({
//         to: Array,
//         from: Array,
//         date: Date,
//         subject: String,
//         text: String		}),
//     Email = mongoose.model('Email', emailSchema);

var mailparser = new (require("mailparser").MailParser)();

mailparser.on("end", function(mail_object){
    console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
    console.log("Subject:", mail_object.subject); // Hello world!
    console.log("Text body:", mail_object.text); // How are you today?
    	
	// var msg = new Email({
 //        to: mail_object.to,
 //        from: mail_object.from,
 //        date: mail_object.date,
 //        subject: mail_object.subject,
 //        text: mail_object.text
 //    })

 //    msg.save(function (err, msg) { 
 //        if (err) return console.error(err); 
 //        console.log('saved to db') 
 //    });

});

// send the email source to the parser
// mailparser.write(eml);





client.connect();

client.on("connect", function(){
    console.log("Successfully connected to server");

	// client.listMailboxes(function(error, mailboxes){
	//     for(var i=0, len = mailboxes.length; i<len; i++){
	//         if(mailboxes[i].hasChildren){
	//             mailboxes[i].listChildren(function(error, children){
	//                 console.log(children);
	//             });
	//         }
	//     }
	// });

	client.openMailbox("INBOX", function(error, info){
        if(error) throw error;
        console.log("Message count in INBOX: " + info.count);
        // client.close();
        client.listMessages(-1, function(err, messages){
		    messages.forEach(function(message){
		        console.log(message.UID + ": " + message.title);
		        var wstream = fs.createWriteStream('test.eml');
		        
		        // fetch message content
		        
		        // console.log(
		        	client.createMessageStream(message.UID).pipe(wstream, {end: false})
		        // )

		        








		        // client.createMessageStream(message.UID).pipe(process.stdout, {end: false});
		        // mailparser.write()
		        // mailparser.end();
		        // parseMail(message);
		    });
		});
    });
	
});


client.on('close', function (){
    console.log('DISCONNECTED!');
});








// // inbound email
// smtp.on("startData", function(connection){
//     console.log("Message from:", connection.from);
//     console.log("Message to:", connection.to);

//     var buffer
//     	// ws = fs.createWriteStream("../tmp/message.txt");

//     smtp.on("data", function(connection, chunk){
// 	    buffer += chunk;
// 	    // ws.write(chunk)
// 	});

// 	smtp.on("dataReady", function(connection, callback){
// 	 	// parseMail(buffer);

// 	 	var mailparser = new (require("mailparser").MailParser)();

// 		mailparser.on("end", function(mail_object){
// 		    console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
// 		    console.log("Subject:", mail_object.subject); // Hello world!
// 		    console.log("Text body:", mail_object.text); // How are you today?
		    	
// 	    	var msg = new Email({
// 	            to: mail_object.to,
// 	            from: mail_object.from,
// 	            date: mail_object.date,
// 	            subject: mail_object.subject,
// 	            text: mail_object.text
// 	        })

// 	        msg.save(function (err, msg) { 
// 	            if (err) return console.error(err); 
// 	            console.log('saved to db')
// 	            buffer = '';
// 	            mailparser = {};
// 	            msg = {}
// 	        });

// 		});

// 		// send the email source to the parser
// 		mailparser.write(buffer);
// 		mailparser.end();

// 	    callback(null, "ABC1"); // ABC1 is the queue id to be advertised to the client
// 	    // callback(new Error("Rejected as spam!")); // reported back to the client
// 	});

// });



function parseMail (eml) {
	
	var mailparser = new (require("mailparser").MailParser)({debug: true});

	mailparser.on("end", function(mail_object){
	    console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
	    console.log("Subject:", mail_object.subject); // Hello world!
	    console.log("Text body:", mail_object.text); // How are you today?
	    	
    	// var msg = new Email({
     //        to: mail_object.to,
     //        from: mail_object.from,
     //        date: mail_object.date,
     //        subject: mail_object.subject,
     //        text: mail_object.text
     //    })

     //    msg.save(function (err, msg) { 
     //        if (err) return console.error(err); 
     //        console.log('saved to db') 
     //    });

	});

	// send the email source to the parser
	mailparser.write(eml);
	mailparser.end();

}












// // /// every 30 seconds, check emails
// // setInterval(function (){
// //     // find and display emails
// //     Email.find(function (err, emails) {
// //         if (err) return console.error(err);
// //         console.log(emails)
// //     })


// // }, 15000);




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