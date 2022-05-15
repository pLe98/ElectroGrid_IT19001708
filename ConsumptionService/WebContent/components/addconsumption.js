$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

$(document).on("click", "#savebtn", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
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

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {
			$("#consumpId").val( $(this).closest("tr").find('#hidIDUpdate').val());
			$("#accNo").val($(this).closest("tr").find('td:eq(0)').text());
			$("#year").val($(this).closest("tr").find('td:eq(2)').text());
			$("#month").val($(this).closest("tr").find('td:eq(3)').text());
			$("#units").val($(this).closest("tr").find('td:eq(4)').text());
		});

// Delete============================================
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
//units-------------------------------
if ($("#units").val().trim() == "")
 {
 return "Insert no of Units";
 }

// is numerical value
var tmpCNo = $("#accNo").val().trim();
if (!$.isNumeric(tmpCNo))
 {
 return "Invalid Account Number.";
 }
var tmpCvv = $("#units").val().trim();
if (!$.isNumeric(tmpCvv))
 {
 return "invalid no of units.";
 }
var tmpPNo = $("#paymentNo").val().trim();
if (!$.isNumeric(tmpPNo))
 {
 return "Invalid ";
 }
// convert to integer ID
 $("#units").val(parseInt(tmpCvv).toFixed(0));


return true;
}
