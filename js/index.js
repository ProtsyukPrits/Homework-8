function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : 'protsiukprits95@gmail.com',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "wdwdwd",
	}).then(
		message => alert("mail sent successfully")
	);
}