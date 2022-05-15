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
			<form>
				<table>
					<caption>Consumption Rates</caption>
					<tr>
						<td>Valid From:</td>
						<td>03/24/2021</td>
					</tr>
					<tr>
						<td>Type:</td>
						<td>Domestic</td>
					</tr>
					<tr>
						<td>0 - 30 units:</td>
						<td>Rs 5.21</td>
					</tr>
					<tr>
						<td>30 - 60 units:</td>
						<td>Rs 14.52</td>
					</tr>
					<tr>
						<td>60 - 90 units:</td>
						<td>Rs 21.33</td>
					</tr>
					<tr>
						<td>90 - 120 units:</td>
						<td>Rs 34.12</td>
					</tr>
					<tr>
						<td>Above 120 units:</td>
						<td>Rs 42.21</td>
					</tr>
				</table>
	</div>

</body>
</html>