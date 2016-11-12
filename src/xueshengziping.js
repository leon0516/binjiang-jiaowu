// alert("你好，我是一个警告框!!!!!!!!!!!");
btn = '<input type="button" value="一键好评" id="oneClickPingJiao">';
$('#btnSave').before(btn);
$('#btnSave').hide();
$('#oneClickPingJiao').click(function() {
  $('select').val('10');
  $('#btnSave').click();
});
