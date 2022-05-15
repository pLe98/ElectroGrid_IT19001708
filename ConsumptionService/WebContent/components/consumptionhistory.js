
$(document).on("click", "#savebtn", function(event) {

	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	var type = ($("#consumpId").val() == "") ? "POST" : "PUT";
	$.ajax({
		url : "addconsumption",
		type : type,
		data : $("#formItem").serialize(),
		dataType : "text",
		complete : function(response, status) {
			saveDetails(response.responseText, status);
		}
	});

});

function saveDetails(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#consumpId").val("");
	$("#formItem")[0].reset();
}

$(document).on("click", ".btnUpdate", function(event) {
			$("#consumpId").val( $(this).closest("tr").find('#hidIDUpdate').val());
			$("#accNo").val($(this).closest("tr").find('td:eq(0)').text());
			$("#year").val($(this).closest("tr").find('td:eq(2)').text());
			$("#month").val($(this).closest("tr").find('td:eq(3)').text());
			$("#units").val($(this).closest("tr").find('td:eq(4)').text());
		});


$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "AddConsumptionAPI",
		type : "DELETE",
		data : "id=" + $(this).data("consumpId"),
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
		}
	});
});

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


function validateItemForm()
{

if ($("#accNo").val().trim() == "")
 {
 return "Insert Account No.";
 }

if ($("#year").val().trim() == "")
 {
 return "Insert Year";
 } 

if ($("#month").val().trim() == "")
 {
 return "Insert Month";
 }


return true;
}
