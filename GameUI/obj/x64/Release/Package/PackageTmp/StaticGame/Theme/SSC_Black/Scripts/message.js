var msgList = new Array();
var nowindex = 0;
$(function()
{
	window.setInterval("getMsg()", 60000);
	if (typeof (window.top.frames.leftframe) == "object")
	{
		var a = $("#addmoney", window.top.frames.leftframe.document);
		if (a.css("top") != "-110px")
		{
			a.css("top", "-110px")
		}
	}
});
function nextnotice()
{
	if (nowindex >= 0 && nowindex < msgList.total)
	{
		nowindex++;
		$("#msgtitle").html(msgList[nowindex].title);
		$("#msgcontent").html(msgList[nowindex].content);
		msgIsRead(msgList[nowindex].entry)
	}
}
function prenotice()
{
	if (nowindex > 0 && nowindex <= msgList.total)
	{
		nowindex--;
		$("#msgtitle").html(msgList[nowindex].title);
		$("#msgcontent").html(msgList[nowindex].content)
	}
}
function msgclose()
{
	$("#msgbox").hide("slow")
}
function getMsg()
{
    return;
	$.ajax({
		type:"POST",
		dataType:"json",
		url:"./users_getmsg.shtml",
		success:function(a)
		{
			if (a != "")
			{
				msgList = a;
				if (parseInt(msgList.total) > 0)
				{
					$("#msgtitle").html(msgList[0].title);
					$("#msgcontent").html(msgList[0].content);
					$("#msgbox").show("slow");
					msgIsRead(msgList[0].entry)
				}
			}
		} })
}
function msgIsRead(a)
{
    return;
	if (a > 0)
	{
		$.ajax({
			type:"POST",
			data:"mid=" + a,
			url:"./users_msgisread.shtml",
			success:function(b)
			{} })
	}
};
