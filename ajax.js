const endpoint = "https://script.google.com/macros/s/AKfycbwxBi696KAlZwspbsp4rs_hn43SZjmTornsWC7O6ptp1pT5vmc/exec"

$('#submit-button').on('click',function(){
    var selected = $('#select').val();
    var text = $('#chat').val();

    $.ajax({
        type: 'get',
        url: endpoint,
        dataType: 'jsonp',
        data:{
            param: selected,
            text: text
        },
        success: out => {
            alert(out.answer);
            var ary = out.message.split(",");
            console.log(ary);
            $('#chat-text').html("");
            ary.forEach(element => {
                $('#chat-text').append("<p>" + element + "</p>");    
            });
        }
    });
});

//クリアボタンが押されたらチャット内容をクリアする処理。
$('#clear-button').on('click',function(){
    $('#chat-text').html("");

    $.ajax({
        type: 'get',
        url: endpoint,
        dataType: 'jsonp',
        data:{
            status: 999
        },
        success: out => {
            alert("チャット内容を消去しました。");
        }
    });
});