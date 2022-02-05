<?php /* Template Name: AirportTool */ ?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Manipulation des formulaires</title>
    <link rel="stylesheet" type="text/css" href="experiments.css">
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
</head>

<body>

	<h1>Don't be dummies : plant trees </h1>

<div class="conteneur">
	<div class="speech">

	<p>The environmental impact of aviation occurs because aircraft engines emit heat, noise, particulates and gases which contribute to climate change and global dimming. Airplanes emit particles and gases such as carbon dioxide (CO2), water vapor, hydrocarbons, carbon monoxide, nitrogen oxides, sulfur oxides, lead, and black carbon which interact among themselves and with the atmosphere.</p><p>
	
	Despite emission reductions from automobiles and more fuel-efficient and less polluting turbofan and turboprop engines, the rapid growth of air travel in the past years contributes to an increase in total pollution attributable to aviation. From 1992 to 2005, passenger kilometers increased 5.2 percent per year. In the European Union, greenhouse gas emissions from aviation increased by 87 percent between 1990 and 2006.</p><p>

	Comprehensive research shows that despite anticipated efficiency innovations to airframes, engines, aerodynamics and flight operations, there is no end in sight, even many decades out, to rapid growth in CO2 emissions from air travel and air freight, due to projected continual growth in air travel. This is because international aviation emissions have escaped international regulation up to the ICAO triennial conference in October 2016 agreed on the CORSIA offset scheme. In addition, due to low or non-existent taxes on aviation fuel, air travel enjoys a competitive advantage over other transportation modes due to lower fares. In the absence of effective regulation and without any market constraint, air travel could have a devastating impact on environment. It is then the moral responsibility of each individual to take concrete action in order to compensate the CO2 emitted during their travels. </p><p>

	Lucky for you, this little tool gives you the opportunity to do just that ! Enter below the name of the airport of departure and arrival. It will then calculate the CO2 emitted by your travel, and the number of trees you need to plant in order to compensate it. You may then pay by Paypal the corresponding amount.  </p>
</div>

<div class="tool">

<br>
<br>

	<div class="fields">
    <form autocomplete="off" id="test">


    	<div class="autocomplete">
            <label for="airport1">Premier aéroport</label> :
            <input type="text" name="airport1" id="airport1" required>
    	</div>

    	<div>
    	<img src="airplane.png" id="airplane">
    	</div>
    	
    	<div class="autocomplete2">
            <label for="airport2">Second aéroport</label> :
            <input type="text" name="airport2" id="airport2" required>
    	</div>

    	<br/>

    	<div>
    	<input type="submit" value="Calculer" id="calculer">
    	</div>
 
    </div>
</form>


<div id="testing">
   <div id="icons">
   	<img src="airplaneIcon.png" id="airplaneIcon">
	<img src="CO2.png" id="co2">
	<img src="tree.png" id="tree">
	<img src="moneyTree.png" id="moneyTree">
	</div>
    	
 <div id="names">
    	<p>Distance traveled</p>
    	<p>CO2 emitted (tonnes)</p>
    	<p>Trees to plant</p>
    	<p>Equivalent in euros</p>
    </div>

    <div id="results">
    	<p id="distance"> - </p>
    	<p id="emittedCO2"> - </p>
    	<p id="treesToPlant"> - </p>
    	<p id="moneyToCompensate"> - </p>
    </div>
</div>
    
<div id="detailsAndDonate">

<div id="detailsDiv">
    <p id="detailsTitle">Données du calcul</p>
    <p id="details"> - </p>
</div>

<div id="donate">
	<div id="subDonate">
	<p style="text-decoration: underline; text-align: center;">Offset your carbon footprint !</p><p>Click below to compensate the carbon footprint of your flight. All the money recolted is used by <a href="https://www.yagasu.or.id/" style="color: green;">Yagasu</a> to replant the mangrove forests and restore a healthy ecosystem for biodiversity, for communities and for climate.

	The payment is fully secured through SSL encryption and a Paypal account is <u>not</u> required. </p>
	</div>
	<div id="subDonate2">
	<img src="paypalPlaceholder.png" id="paypalButton">
	</div>
</div>

</div>

</div>
</div>

<div class="styled-select green rounded">
	<p id="exchangeRateTitle"> Equivalent in </p>
	<select id="exchangeRateDropDown">
		<option selected value="USD">dollars (USD)</option>
		<option value="EUR">euros (EUR)</option>
  		<option value="GBP">pound (GBP)</option>
  		<option value="AED">dirham (AED)</option>
	</select>
</div>
	<p id="exchangeRateTest">1000$</p>


    <img src="treeline3.png" class="treeline"/>

    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="cours.js"></script>
    <script src="money.js"></script>



</body>

</html>