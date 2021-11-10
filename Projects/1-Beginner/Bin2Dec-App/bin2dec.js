function getValue() {
    var binaryNumber = document.getElementById('binaryNumber').value;
    submitOK = "true";


    if (binaryNumber == "") {
        document.getElementById('error').innerHTML = "Must fill with a number";
        setTimeout(function () {

            document.getElementById('error').innerHTML = "";
            document.getElementById('binaryNumber').value = "";
            document.getElementById('disabledTextInput').value = "";

        }, 5000);
        submitOK = "false";

    }

    if (isNaN(binaryNumber) || binaryNumber.length > 8) {
        document.getElementById('error').innerHTML = "The field must be a number and less than 8 characters long";
        setTimeout(function () {

            document.getElementById('error').innerHTML = "";
            document.getElementById('binaryNumber').value = "";
            document.getElementById('disabledTextInput').value = "";

        }, 5000);

        submitOK = "false";

    }

    binaryNumber.split('').map((char) => {
        if (char !== '0' && char !== '1'){
            document.getElementById('error').innerHTML = "Only 0 or 1 is allowed!";
            setTimeout(function () {

                document.getElementById('error').innerHTML = "";
                document.getElementById('binaryNumber').value = "";
                document.getElementById('disabledTextInput').value = "";
    
            }, 5000);
            submitOK = "false";

        }
    })

    // if (
    //     binaryNumber != '0' && binaryNumber != '1'
    // ) {
    //     document.getElementById('error').innerHTML = "Only 0 or 1 is allowed!";
    //     setTimeout(function () {

    //         document.getElementById('error').innerHTML = "";
    //         document.getElementById('binaryNumber').value = "";
    //         document.getElementById('disabledTextInput').value = "";

    //     }, 5000);
    //     submitOK = "false";
    // }

    // if(binaryNumber.length > 8){
    //     document.getElementById('error').innerHTML = "Maximum numbers allowed for binary numbers are 8";
    //     setTimeout(function () {

    //         document.getElementById('error').innerHTML = "";

    //     }, 5000);

    // submitOK = "false";
    // }
    
    if (submitOK == "false"){
        document.getElementById('binaryNumber').innerHTML = "";
        document.getElementById('disabledTextInput').disabled = true;
        return false;
    }

    if (submitOK == "true"){
        document.getElementById('disabledTextInput').disabled = false;
        convertedNumber = parseInt(binaryNumber, 2)
        document.getElementById('disabledTextInput').value = convertedNumber;

    }



}




// 1 - Verificar se esta nulo - OK
// 2 - Somente um ou zero no primeiro - OK
// 3 - Usuario somente pode digitar até 8 binarios - OK
// 4 - Usuario verificar no campo o valor do binario convertido - OK