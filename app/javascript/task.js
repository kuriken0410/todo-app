$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault();
    var text = $('#task_title').val()

    $.ajax({
      // ①HTTPメソッドを指定。
      type: 'POST',
      // ②パスを指定.
      url: '/tasks',
      // ③HTTPリクエストのボディを指定。Railsではここで指定した値がparamsに入る。
      data: {
        task: {
          title: text,
        }
      },
      // ④HTTPリクエストで要求するdataのタイプを指定。
      dataType: 'json'
    // ⑤リクエストに成功した場合 .done以下の関数が実行される。
    }).done(function(data){
      console.log(data)
    })
  })
})