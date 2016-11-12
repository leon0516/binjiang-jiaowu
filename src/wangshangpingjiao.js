btn = '<input  type="button" id="oneClickPingJiao" value="一键好评"/>';
$('#Button2').before(btn);
$('#Button2').hide();
$('#oneClickPingJiao').click(function() {
  $("input[type='radio'][value='RadioButton1']").attr("checked", "checked");
  $('textarea#TextBox4').val("这个老师棒棒哒!👍😉");
  $('#Button2').click();
});