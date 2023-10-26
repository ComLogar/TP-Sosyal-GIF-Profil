window.addEventListener('load', function() {
  var imgElements = document.getElementsByTagName('img');
  for (var i = 0; i < imgElements.length; i++) {
    var imgElement = imgElements[i];
    var src = imgElement.src;
    var regex = /^https:\/\/www\.technopat\.net\/sosyal\/data\/avatars\/[lms]\/\d+\/\d+\.jpg\?\d+$/;
    if (regex.test(src)) {
      var updatedSrc = src.replace(/^https:\/\/www\.technopat\.net\/sosyal\/data\/avatars\/[lms]/, 'https://www.technopat.net/sosyal/data/avatars/o');
      imgElement.srcset = updatedSrc;
      imgElement.src = updatedSrc;
    }
  }
});
