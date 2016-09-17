var check = {
    result:function(holdIdX){
        if(holdIdX.indexOf("1") != -1 && holdIdX.indexOf("4") != -1 && holdIdX.indexOf("7") != -1 ||
                holdIdX.indexOf("1") != -1 && holdIdX.indexOf("2") != -1 && holdIdX.indexOf("3") != -1 ||
                holdIdX.indexOf("1") != -1 && holdIdX.indexOf("5") != -1 && holdIdX.indexOf("9") != -1 ||
                holdIdX.indexOf("2") != -1 && holdIdX.indexOf("5") != -1 && holdIdX.indexOf("8") != -1 ||
                holdIdX.indexOf("3") != -1 && holdIdX.indexOf("6") != -1 && holdIdX.indexOf("9") != -1 ||
                holdIdX.indexOf("3") != -1 && holdIdX.indexOf("5") != -1 && holdIdX.indexOf("7") != -1 ||
                holdIdX.indexOf("4") != -1 && holdIdX.indexOf("5") != -1 && holdIdX.indexOf("6") != -1 ||
                holdIdX.indexOf("7") != -1 && holdIdX.indexOf("8") != -1 && holdIdX.indexOf("9") != -1)
        {
            return true;
                
            }
    }
    };
