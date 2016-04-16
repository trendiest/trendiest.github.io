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
      for (var i = 0; i < result.length; i++)
      {
        var position = i + 1;
        var url = result[i].repo_name;
        var array = url.split('/');
        var title = array[array.length-1];
        var image_name = data.results[i].repo_avatars;
        var image_list = data.results[i].repo_avatars.length;
        var stars = result[i].repo_meta.replace(/[^0-9]/g, '')
        var tag = [];
        var firstWords = result[i].repo_meta.split(" ");
        tag.push(firstWords[0]);
        var avatar_wrapper = $(".avatar-wrapper");
          list.append(
            '<li class="list-item">' +
              '<a href="' + result[i].repo_name   + '">' +
                '<h1 class="position">' + position +'</h1>' +
                '<p class="repo-title">' + title + '</p>' +
                '<p class="repo-desc">' + result[i].repo_description + '</p>' +
                '<span class="meta-wrapper">' +
                  '<p class="stars">★ ' + stars + '</p>' +
                  // '<p class="tag">' + tag + '</p>' + // Not specific: will show stars counter again if there's no category present
                  // '<span class="avatar-wrapper">' + // Not needed by now
                  //   '<img class="avatar" src="' + result[i].repo_avatars[0] + '"/>' +
                  // '</span>' +
                '</span>' +
              '</a>' +
            '</li>'
          );
          console.log(image_list);
      }
    }
  });

});
