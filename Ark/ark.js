var page_width = $('#page').width();
	
console.log(page_width);

if(page_width > 661){
	$(function(){
		 $('.navcontainer li').hover(function(){
			$('>ul.child',this).fadeToggle(300); //links fade in 700ms and are toggled.
		 });
	});
}
else{
	$(function(){
		$('.navcontainer li').click(function(){
			$('>ul.child',this).fadeToggle(300); //links fade in 700ms and are toggled.
		 });
	 });
}

$(function(){
  $('.pics').slick({//carousel using slick.
    autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	dots: true
  });
});

var usernamecounter = 0;
var emailnamecounter = 0;
var commentnamecounter = 0;


$("#name").on('input',function(){
	var name = $(this).val();//take input
		
	if(name.length < 1 || name.length > 20){
		$('.name_error').text('The field above is required, Max 20 characters Min 1 character').show();//show error.
		usernamecounter = 0;
		console.log('subtract');
		}
	else{
		$('.name_error').hide();
		usernamecounter = 1;
		console.log('add');
		var testExp = new RegExp(/^([a-zA-Z0-9])+$/);//grab only characters and numbers
		if(!testExp.test(name)){
			$('.name_error').text('Must be no special characters e.g*&^%@').show();//show error.
			usernamecounter = 0;
			console.log('subtract');
		}
		else{
			$('.name_error').hide();
			usernamecounter = 1;
			console.log('add');
		}
	}
});

$("#myemail").on('input',function(){
	var myemail = $(this).val();//take input
		
	if(myemail.length < 1 || myemail.length > 30){
		$('.email_error').text('The field above is required, Max 20 characters Min 1 character before the special character @').show();//show error.
		emailcounter = 0;
		console.log('subtract');
	}
	else{
		$('.email_error').hide();
		var testExp = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);//grab only characters and numbers
		emailcounter = 1;
		console.log('add');
		if(!testExp.test(myemail)){
			$('.email_error').text('Must be a valid email e.g James@gmail.com').show();//show error.
			emailcounter = 0;
			console.log('subtract');
		}
		else{
			$('.email_error').hide();
			emailcounter = 1;
			console.log('add');
		}
	}
});
	
if(usernamecounter >= 1 && emailcounter >= 1){
	console.log('subtract');
	$('#button').removeAttr('disabled');
}
else{
	$('#button').attr('disabled', true);
}