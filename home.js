$(document).ready(function(){
    $("#submitBtn").click(function(){
      var ml_prediction_url = 'http://40.85.149.250:80/score';
      clearConfirmationLabel();
      var requestData = {'request': $('#comments').val()};
      $.post(ml_prediction_url, requestData, function(data){
        var msg = '';
        if(data && data.department && data.probability) {
          msg = 'After analysis, the machine learning has determine to forward your email to ' + 
                data.department + ' because of a ' + data.probability + ' probability!';
        }
        else {
         msg =   JSON.stringify(data);
        }
        $(".confirmationDiv").text(msg);
      }).fail(function(data){

      });

      function clearConfirmationLabel(){
        $(".confirmationDiv").text('');
      }

    })
});