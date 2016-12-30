btn = '<input  type="button" id="oneClickManFen" value="一键满分"/>';
$('#databc').before(btn);
$('#databc').hide();
$('#oneClickManFen').click(function () {
    var timushu = 19;//班主任题目数量
    if ($('#xfl').text() === '辅导员评测')
        timushu = 17;//辅导员题目数量
    for (var i = 1; i < timushu; i++) {
        var shuoMingId = '#cp' + i + '_xs2 > td:nth-child(2)';
        var fenShuValueZhengZe = /\d{1,2}/;
        var fenShu = $(shuoMingId).text().match(fenShuValueZhengZe);
        $('#cp' + i).val(fenShu[0]);
    }
    $('#databc').click();
});