<%@page import="com.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@include file="/Header.jsp" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Payment Service</title>
<link rel="stylesheet" href="views/bootstrap.min.css.css">
<script src="Components/jquery-3.4.1.min.js"></script>
<script src="Components/consumptions.js"></script>
<script>
$(document).ready(function(){
  $("#divItemsGrid").click(function(){
    confirm("Payment record will be deleted.");
  });
});
</script>
</head>
<body >
	<div style="text-align: center;position:relative;left:250px;top:50px;" class="container">
		<div class="form">
			<form>
				<table>
					<caption>New Bill</caption>
					<tr>
						<td>Month: April</td>
						<td>Year: 2022</td>
					</tr>
					<tr>
						<td colspan="2">
							<label for="accNo">Account No:</label>
							<input type="text" name="accNo">
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<label for="noOfUnits">No of Units:</label>
							<input type="text" name="noOfUnits">
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" value="Submit">
						</td>
					</tr>
				</table>
			</form>
			
		</div>
	<div>
		<p>Summary</p>
	</div>
	</div>

</body>
</html>