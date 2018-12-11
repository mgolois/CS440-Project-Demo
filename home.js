$(document).ready(function(){

    $("#submitBtn").click(function(){

      var ml_prediction_url = 'http://40.85.149.250:80/score';
      clearConfirmationLabel();

      var requestData = {'request': $('#comments').val()};

      $.ajax({
        url:ml_prediction_url,
        type:"POST",
        data:requestData,
        contentType:"application/json; charset=utf-8",
        dataType:"text",
        success: function(data){
            console.log(data);
            var msg = '';
            if(data && data.department && data.probability) {
              msg = 'After analysis, the machine learning has determine to forward your email to ' + 
                    data.department + ' because of a ' + data.probability + ' probability!';
            }
            else {
             msg =   JSON.stringify(data);
            }
            $(".confirmationDiv").text(msg);
        },
        error: function(j,t,e) {
            console.error(e);
        }
      });

      function clearConfirmationLabel(){
        $(".confirmationDiv").text('');
      }

    })
});