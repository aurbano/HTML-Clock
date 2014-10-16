/**
 * HTML Clock
 * An HTML5+CSS3+JS functioning clock developed mainly for fun.
 *
 * @author Alejandro U. Alvarez (http://urbanoalvarez.es)
 */
var HTMLClock = function () {
	var viewport = {
			h: 0,
			w: 0
		},
		block = {
			w: 200
		},
		moveInterval = null,
		// Default settings
		settings = {
			container: null
		}

	var clock = {};

	clock.init = function (options) {
		console.info("HTML-Clock started");
		// Merge settings
		settings = $.extend(settings, options);

		// Adjust size
		clock.adjust();

		// Setup the HTML for the clock
		clock.stripe.create('hour', 'next');
		clock.stripe.create('minute', 'next');
		clock.stripe.create('second', 'next');

		clock.stripe.create('hour', 'current');
		clock.stripe.create('minute', 'current');
		clock.stripe.create('second', 'current');

		moveInterval = setInterval(function () {
			clock.stripe.move();
		}, 1000 / 60);
	};

	clock.adjust = function () {
		// Adjust all sizes
		viewport.h = settings.container.height();
		viewport.w = settings.container.width();

		// Center visors
		var center = viewport.w / 2,
			hourLeft = center - block.w / 2 - block.w;

		settings.container.find('.hourView').css({
			left: hourLeft,
			width: block.w
		});

		settings.container.find('.minuteView').css({
			left: hourLeft + block.w,
			width: block.w
		});

		settings.container.find('.secondView').css({
			left: hourLeft + block.w * 2,
			width: block.w
		});

		settings.container.css({
			height: viewport.h + 'px',
			width: viewport.w + 'px'
		});

		settings.container.find('.htmlClock-visor').css({
			top: viewport.h / 2 - block.w / 2,
			height: block.w
		});
	};

	clock.stripe = {

		hour: 4801,

		minute: 12001,

		create: function (type, which) {
			// Creates a new number stripe up to num
			var draw = '<div class="htmlClock-stripe ' + type + '_' + which + '">';
			var num = 60;
			if (type == 'hour') num = 24;
			for (var i = 0; i < num; i++) {
				if (i < 10) i = '0' + i;
				draw += '<div class="htmlClock-numBlock">' + i + '</div>';
			}
			draw += '</div>';
			settings.container.find('.' + type + 'View').append(draw);
		},

		move: function () {
			// Calculates each position and apply
			// I want it continuous, so I'll use all digits
			var d = new Date();
			var ms = d.getMilliseconds();
			var s = d.getSeconds() + ms / 1000;
			var m = d.getMinutes() + s / 60;
			var h = d.getHours();

			// Current offset
			var curOffset = viewport.h / 2 - block.w / 2;

			// Calculate offset
			var hourOffset = -h * block.w + curOffset;
			var minuteOffset = -m * block.w + curOffset;
			var secondOffset = -s * block.w + curOffset;

			// Apply to current and next
			settings.container.find('.hour_current').css({
				top: hourOffset
			});
			settings.container.find('.hour_next').css({
				top: this.hour + hourOffset
			});

			settings.container.find('.minute_current').css({
				top: minuteOffset
			});
			settings.container.find('.minute_next').css({
				top: this.minute + minuteOffset
			});

			settings.container.find('.second_current').css({
				top: secondOffset
			});
			settings.container.find('.second_next').css({
				top: this.minute + secondOffset
			});
		}
	};

	return clock;
};