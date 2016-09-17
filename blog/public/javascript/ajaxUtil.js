var ajaxUtils = {
	post:function(url,data,success,failure){
    this.sendRequest("post",url,data,success,failure);
	},
     put:function(url,data,success,failure){
    this.sendRequest("put",url,data,success,failure);
    },
    get:function(url,success,failure){
    this.sendRequest("get",url,'',success,failure);
    },
    sendRequest: function(requestType, url, data, success, failure) {
        $.ajax({
            url: url,
            dataType: 'json',
            type: requestType,
            contentType: 'application/json',
            data: JSON.stringify(data),
            processData: false,
            success: function(data, textStatus, jQxhr) {
                console.log('sucessfull response received', data, textStatus);
                if (success) {
                    success(data);
                    
                }
            },
            error: function(jqXhr, textStatus, errorThrown) {
                console.log('unsuccessful', errorThrown);
                if (failure) {
                    failure(data);
                }
            }
        });


    }
};
