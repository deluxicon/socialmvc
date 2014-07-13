// public/js/home.js

$(document).ready(function() {

	$('div.nava.load').load('html/nava.html', function() {
		$('a.navbar-brand').html(title)
	})

	$('div.home.load').load('html/home.html', function () {
		$('div.profile.img').css('backgroundImage', 'url(\'http://localhost/img/me.jpg\')')
	    					.css('backgroundSize', 'cover')
	})

	var itemCount = 1,
		names = ['James Doe', 'Judy Punk', 'Wilma Faker', 'Mark Upp', 'Charles None', 'Henry Rolls', 'Bo Knuckles', 'Wesley Slack', 'Michael Davis'],
		handles = ['jdoe', 'jpunk', 'wfaker', 'mupp', 'cnone', 'hrolls', 'bknuckles', 'wslack', 'mdavis'],
		datetime = ['May 28th @ 11:45pm', 'June 5th @ 1:15am', 'June 14th @ 10:30am', 'June 15th @ 6:35pm', 'July 4th @ 9:15am', 'July 1st @ 2:00pm', 'June 9th @ 5:10pm', 'May 25th @ 5:00am', 'May 15th @ 7:20pm'],
		messages = [
			'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel faucibus lorem. In hac habitasse.',
			'Etiam orci libero, interdum a erat vel, feugiat commodo libero. Nulla eget lorem et lacus euismod consectetur.',
			'Placerat, sagittis augue vel, gravida odio. Cras at felis ultrices dolor facilisis accumsan. Pellentesque adipiscing.',
			'Pellentesque arcu nec mattis. Nam at tortor quis turpis vulputate pharetra blandit et tellus.',
			'Ipsum dui venenatis purus, vitae sodales justo nisi eget mi. Duis feugiat aliquet sem.',
			'Hendrerit ut dictum a, commodo at lectus. Donec posuere magna sit amet odio eleifend, vel volutpat risus tempus.',
			'Cras ut tellus eu dui adipiscing vestibulum at et nisi. Nam mattis in nunc vel facilisis. Vestibulum euismod sit amet urna quis mollis.',
			'Platea dictumst curabitur eget nibh. Sed rhoncus, erat et bibendum lobortis. In aliquam turpis proin eros dui.'
		],

		avatar = ['one.jpg','two.jpg','three.jpg','four.jpg','five.jpg','six.jpg','seven.jpg','eight.jpg','nine.jpg']




	function addSocial() {

		var random = Math.random()
		var round = function (x, y) {
				return Math.round(x, y)
			},
			dice1 = round(Math.random() * 8, 0),
			dice2 = round(Math.random() * 8, 0),
			dice3 = round(Math.random() * 8, 0)

	    $('.hide.load').load('html/posts.html');

	    var newPost = $('.hide.load a.list-group-item.social'),
	    	panelHeading = $('div.list-group.panel.panel-info.social div.panel-heading'),
	    	postname = $('.hide.load a.list-group-item.social span.user.full-name').html(names[dice1]),
	    	postdate = $('.hide.load a.list-group-item.social li.small.date').html(datetime[dice2]),
	    	postmsg = $('.hide.load a.list-group-item.social p.list-group-item-text').html(messages[dice3]),
	    	userphoto = $('.hide.load a.list-group-item.social div.user.img')
	    					.css('backgroundImage', 'url(\'http://localhost/img/' + avatar[dice1] + '\')')
	    					.css('backgroundSize', 'cover')



	    	
	    newPost.attr('href', '/users/' + handles[dice1])
	           .attr('count', itemCount).hide();

	    panelHeading.after(newPost);

	    if (itemCount > 4) { 
	        var oldestItem = $('a.list-group-item.social[count=' + (itemCount - 4) + ']')
	        oldestItem.fadeOut().remove()
	    }
	    
	    newPost.fadeIn();

	    if (itemCount != 31) { 
	    	itemCount++;
	    	setTimeout(addSocial, 3000)
	    }
	}

	setTimeout(addSocial, 3000);
	
	
})





	














