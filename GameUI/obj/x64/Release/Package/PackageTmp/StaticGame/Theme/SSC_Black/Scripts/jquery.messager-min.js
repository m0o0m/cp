(function() {
	var b = navigator.userAgent.toLowerCase();
	var d = (b.match(/\b(chrome|opera|safari|msie|firefox)\b/) || [ "",
			"mozilla" ])[1];
	var c = "(?:" + d + "|version)[\/: ]([\d.]+)";
	var a = (b.match(new RegExp(c)) || [])[1];
	jQuery.browser.is = d;
	jQuery.browser.ver = a;
	jQuery.browser[d] = true
})();
(function(a) {
	this.version = "@1.3";
	this.layer = {
		width : 200,
		height : 100
	};
	this.title = "信息提示";
	this.time = 4000;
	this.anims = {
		type : "slide",
		speed : 600
	};
	this.timer1 = null;
	this.inits = function(c, b) {
		if ($("#message").is("div")) {
			return
		}
		$(document.body)
				.prepend(
						'<div id="message" style="border:#b9c9ef 1px solid;z-index:100;width:'
								+ this.layer.width
								+ "px;height:"
								+ this.layer.height
								+ 'px;position:absolute; display:none;background:#cfdef4; bottom:0; right:0; overflow:hidden;"><div style="border:1px solid #fff;border-bottom:none;width:100%;height:25px;font-size:12px;overflow:hidden;color:#1f336b;"><span id="message_close" style="float:right;padding:5px 0 5px 0;width:16px;line-height:auto;color:red;font-size:12px;font-weight:bold;text-align:center;cursor:pointer;overflow:hidden;">×</span><div style="padding:5px 0 5px 5px;width:100px;line-height:18px;text-align:left;overflow:hidden;" id="msgtitle">'
								+ c
								+ '</div><div style="clear:both;"></div></div> <div style="padding-bottom:5px;border:1px solid #fff;border-top:none;width:100%;height:auto;font-size:12px;"><div id="message_content" style="margin:0 5px 0 5px;border:#b9c9ef 1px solid;padding:10px 0 10px 5px;font-size:12px;width:'
								+ (this.layer.width - 17)
								+ "px;height:"
								+ (this.layer.height - 50)
								+ 'px;color:#1f336b;text-align:left;overflow:hidden;">'
								+ b + "</div></div></div>");
		$("#message_close").click(function() {
			setTimeout("this.close()", 1)
		})
	};
	this.show = function(d, c, b) {
		if ($("#message").is("div")) {
			return
		}
		if (d == 0 || !d) {
			d = this.title
		}
		this.inits(d, c);
		if (b >= 0) {
			this.time = b
		}
		switch (this.anims.type) {
		case "slide":
			$("#message").slideDown(this.anims.speed);
			break;
		case "fade":
			$("#message").fadeIn(this.anims.speed);
			break;
		case "show":
			$("#message").show(this.anims.speed);
			break;
		default:
			$("#message").slideDown(this.anims.speed);
			break
		}
		if ($.browser.is == "chrome") {
			setTimeout(function() {
				$("#message").remove();
				this.inits(d, c);
				$("#message").css("display", "block")
			}, this.anims.speed - (this.anims.speed / 5))
		}
		this.rmmessage(this.time)
	};
	this.lays = function(c, b) {
		if ($("#message").is("div")) {
			return
		}
		if (c != 0 && c) {
			this.layer.width = c
		}
		if (b != 0 && b) {
			this.layer.height = b
		}
	};
	this.anim = function(b, c) {
		if ($("#message").is("div")) {
			return
		}
		if (b != 0 && b) {
			this.anims.type = b
		}
		if (c != 0 && c) {
			switch (c) {
			case "slow":
				break;
			case "fast":
				this.anims.speed = 200;
				break;
			case "normal":
				this.anims.speed = 400;
				break;
			default:
				this.anims.speed = c
			}
		}
	};
	this.rmmessage = function(b) {
		if (b > 0) {
			timer1 = setTimeout("this.close()", b)
		}
	};
	this.close = function() {
		switch (this.anims.type) {
		case "slide":
			$("#message").slideUp(this.anims.speed);
			break;
		case "fade":
			$("#message").fadeOut(this.anims.speed);
			break;
		case "show":
			$("#message").hide(this.anims.speed);
			break;
		default:
			$("#message").slideUp(this.anims.speed);
			break
		}
		setTimeout('$("#message").remove();', this.anims.speed);
		this.original()
	};
	this.original = function() {
		this.layer = {
			width : 200,
			height : 100
		};
		this.title = "信息提示";
		this.time = 4000;
		this.anims = {
			type : "slide",
			speed : 600
		}
	};
	a.messager = this;
	return a
})(jQuery);
