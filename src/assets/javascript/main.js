// A $( document ).ready() block.
$( document ).ready(function() {

  $.ajax({
    type: 'GET',
    url: 'https://api.import.io/store/connector/fa727f20-1913-46bd-b6cd-f3fc3fc5d86d/_query?input=webpage/url:https%3A%2F%2Fgithub.com%2Ftrending&&_apikey=b6886d682c7547e3afed19aaf6fceb8adf73f280c93b8804cb3863bcaf83a464bb6f65fe7c33801a7d4df5f9085d1427895488f5700ecef5f688e15e6584462ab31308a6ccb0cc1489ca0971e942c78e',
    dataType: 'json',
    crossDomain: true,
    success: function(data) {
      var result = data.results;
      var list = $('#results');
      for (var i = 0; i < result.length; i++) {
        var position = i + 1;
          list.append(
            '<li><h1>' + position +'</h1>' +
            '<a href="' + result[i].repo_name   + '">' + result[i].repo_name + '</a>' +
            '<p>' + result[i].repo_description + '</p>' +
            '<p>' + result[i].repo_meta + '</p>' +
            '</li>'
          );
      }
      console.log( "yo" );

    }
  });

});
