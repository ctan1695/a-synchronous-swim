(function() {
  console.log('is this function even envoked?');

  const serverUrl = 'http://127.0.0.1:3000';
  //'https://localhost:3000

  //
  // TODO: build the swim command fetcher here
  //
  const swimFetcher = (successCB, errorCB = null) => {
    console.log('we are sending a GET command');
        $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('aSync Swim: Failed to fetch messages', error);
      }
    });
  }


  // readAll: function(successCB, errorCB = null) {
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'GET',
  //     data: { order: '-createdAt' },
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to fetch messages', error);
  //     }
  //   });
  // }

  //set timeout here to become a sync / not hold anything else up



  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    console.log('we are sending a post command')
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();

// export default swimFetcher;
