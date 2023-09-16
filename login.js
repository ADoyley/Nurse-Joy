$(document).ready(function() {
    $('.form-control label').each(function() {
      var label = $(this);
      var labelText = label.text();
      var labeledText = '';
  
      for (var i = 0; i < labelText.length; i++) {
        labeledText += '<span style="transition-delay: ' + (i * 50) + 'ms">' + labelText[i] + '</span>';
      }
  
      label.html(labeledText);
    });
  });
  