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
        }
    });
})