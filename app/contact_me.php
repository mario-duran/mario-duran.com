<?php
  // Check for empty fields
  if(empty($_POST['dataContent']))
  {
  	echo "No arguments Provided!";
  	return false;
  }

  $dataContent = $_POST['dataContent'];

  $json_array = json_decode($dataContent);

  $name = $json_array->name->value;
  $email_address = $json_array->email->value;
  $message =  $json_array->message->value;

  // Create the email and send the message
  $to = 'mario@mario-duran.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
  $email_subject = "Website Contact Form:  $name";
  $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
  $headers = "From: noreply@mario-duran.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
  $headers .= "Reply-To: $email_address";
  mail($to,$email_subject,$email_body,$headers);

  $response = array('message' => 'sent OK');
  $jsonstring = json_encode($response);

  echo $jsonstring;

  die();

?>
