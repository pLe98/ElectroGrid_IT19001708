
$(document).on("click", ".btnFilter", function(event) {
			$("#startdate").val( $(this).closest("tr").find('#filter').val());
			$("#accNo").val($(this).closest("tr").find('td:eq(0)').text());
			$("#year").val($(this).closest("tr").find('td:eq(2)').text());
			$("#month").val($(this).closest("tr").find('td:eq(3)').text());
		});


function filterResults(response, status) {
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

function validateFilter()
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