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
<script src="components/jquery-3.4.1.min.js"></script>
<script src="components/consumptions.js"></script>
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
			<table>
				<caption>Consumption History</caption>
				<tr>
					<td>
						<label for="accNo">Account No:</label>
						<input type="text" name="accNo" value="623558">
					</td>
					<td>
						<label for="year">Year:</label>
						<input type="text" name="year" value="2022">
					</td>
					<td>
						<label for="month">Month:</label>
						<input type="text" name="month">
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<table border="1" style="width: 100%;">
							<tr>
								<th>Account No</th>
								<th>Year</th>
								<th>Month</th>
								<th>Units</th>
								<th>Balance</th>
							</tr>
							
						</table>
					</td>
				</tr>
			</table>
	</div>

</body>
</html>