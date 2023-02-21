/*

################################################## 

Source: https://movabletype.net/support/form/customscript01.html

*/

function changeDefaultValueManually(){

  window.MTNetFormDataLayer = window.MTNetFormDataLayer || [];

  function MTNetForm(){MTNetFormDataLayer.push(arguments)};

  MTNetForm("updateValues", {
    'eb4108cc-be49-40e6-80f3-5e9bd00da0d1':'オペレーター職'
  });

}

/*

################################################## 

Change value of the form using URL parameter
Example of a URL with a parameter: http://example.movabletype.io/contact.html?HtmlTagID=Value

*/


(function() {
  "use strict";

  var names = ['eb4108cc-be49-40e6-80f3-5e9bd00da0d1'];
  var params = {};

  console.log(names);
  
  function getSearchParam(name) {
    if ("URLSearchParams" in window) {
      return new URL(location.href).searchParams.get(name);
    }
    else {
      var searchParams = {};
      decodeURIComponent(location.search.substr(1).replace(/\+/g, ' '))
        .split("&")
        .forEach(function(v) {
          var pair = v.split("=");
          searchParams[pair[0]] = pair[1];
        });
      return searchParams[name];
    }
  }

  names.forEach(function(name) {
    var value = getSearchParam(name);

    if (value === null || value === undefined) {
      return;
    }

    params[name] = value;
  });

  window.MTNetFormDataLayer = window.MTNetFormDataLayer || [];
  function MTNetForm(){MTNetFormDataLayer.push(arguments)};

  MTNetForm("updateValues", params);
})();