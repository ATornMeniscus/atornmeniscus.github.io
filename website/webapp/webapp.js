// JavaScript Document	

//VARIABLES
	//grandmas
		var grandma = 0;
		var grandmaL1 = 0;
		var grandmaL2 = 0;
		var grandmaL3 = 0;
		var grandmaL4 = 0;
	//bakers
		var baker = 0;
		var bakerL1 = 0;
		var bakerL2 = 0;
		var bakerL3 = 0;
	//food
		var cookie_ = 0;
		var baguette = 0;
		var bread = 0;
		var brownie = 0;
		var croissant = 0;
//mothership grandmabake 
setInterval(grandmaBake, 5000);
		function grandmaBake() {
			if (grandma >= 1) {
				cookie_ += grandma;		
			}
			if (grandmaL1 >=1) {
				cookie_ += grandmaL1;
				baguette += grandmaL1;	
			}
			if (grandmaL2 >=1) {
				cookie_ += grandmaL2*2;
				baguette+= grandmaL2;
				bread += grandmaL2;	
			}
			if (grandmaL3 >=1) {
				cookie_ += grandmaL3*2;
				baguette += grandmaL3*2;
				bread += grandmaL3;
				brownie += grandmaL3;	
			}
			if (grandmaL4 >=1) {
				cookie_ += grandmaL4*3;
				baguette += grandmaL4* 2;
				bread += grandmaL4*2;
				brownie += grandmaL4;
				croissant += grandmaL4;	
			}
			document.getElementById("cookie_").innerHTML = cookie_;
			document.getElementById("baguette").innerHTML = baguette;
			document.getElementById("bread").innerHTML = bread;
			document.getElementById("brownie").innerHTML = brownie;
			document.getElementById("croissant").innerHTML = croissant;
		}
		//Get Grandmas
				//Normal Grandma; Cookie
						function getGrandma() {
							if (cookie_ >= 10) {
								cookie_ -= 10;
								grandma += 1;
									document.getElementById("cookie_").innerHTML = cookie_;
									document.getElementById("grandma").innerHTML = grandma;
							}
							else if (cookie <10) {
								alert("not enough cookies to bribe a grandma to bake for you! get at least 10 cookies!");	
							}
						}
				
				//Grandma Lvl1; Baguette
					function getGrandmaL1() {
						if (baguette >= 15) {
							baguette -= 15; 
							grandmaL1 += 1;
								document.getElementById("baguette").innerHTML=baguette;
								document.getElementById("grandmaL1").innerHTML=grandmaL1;
						} 
						else if (baguette < 15) {
							alert("not enough baguettes to buy a grandma! get at least 15 baguettes to bribe a good grandma.");
							}
						}
	
				//Grandma Lvl2; Bread
					function getGrandmaL2() {
					if (bread >= 20) {
						bread -= 20; 
						grandmaL2 += 1;
							document.getElementById("bread").innerHTML=bread;
							document.getElementById("grandmaL2").innerHTML=grandmaL2;
					}
					else if (bread < 20) {
						alert("not enough bread to bribe! get at least 20 to buy a level 2 grandma.");	
					}
					}
				//Grandma Lvl3; Brownie
					function getGrandmaL3() {
						if (brownie >= 25) {
							brownie -= 25; 
							grandmaL3 += 1;
								document.getElementById("brownie").innerHTML=brownie;
								document.getElementById("grandmaL3").innerHTML=grandmaL3;
						}
					else if (brownie < 25) {
						alert("not enough brownies! get at least 25 brownies to bribe a grandma to bake for you!");	
					}
					}
		// Grandma Lvl4; Croissant
			function getGrandmaL4() {
				if (croissant >= 30) {
					croissant -= 30; 
					grandmaL4 += 1;
						document.getElementById("croissant").innerHTML=croissant;
						document.getElementById("grandmaL4").innerHTML=grandmaL4;	
				}
				else if (croissant < 30) {
					alert("not enough croissants!!! get 30 to bribe the grandma to bake for you!");	
				}
			}
	//FOOD COUNTERS
		// Cookie
			function cookieClick() {
				cookie_ += 1;
				document.getElementById("cookie_").innerHTML = cookie_;
			}			
		//Baguette
			function baguetteClick() {
				baguette += 1;
				document.getElementById("baguette").innerHTML = baguette;
			}
		//Bread
			function breadClick() {
				bread += 1;
				document.getElementById("bread").innerHTML = bread;
			}	
		// Brownie
			function brownieClick() {
				brownie += 1;
				document.getElementById("brownie").innerHTML = brownie;
			}
		//Croissant
				function croissantClick() {
						croissant += 1;
						document.getElementById("croissant").innerHTML = croissant;
				}
				
				
//	D	E	S	S	E	R	T	S		
		//BakerBake functions
			//Normal Baker
				function bakerBake() {	
					cheesecake += baker;
						document.getElementById("cheesecake").innerHTML = cheesecake;
					}
			//L1 Baker
				function bakerBakeL1() {
					cheesecake += bakerL1;
					taiyaki += bakerL1;
						document.getElementById("cheesecake").innerHTML = cheesecake;
						document.getElementById("taiyaki").innerHTML = taiyaki;
				}
			//L2 Baker
					function bakerBakeL2() {
						cheesecake += bakerL2*2;
						taiyaki += bakerL2;
						gelato += bakerL2;
							document.getElementById("cheesecake").innerHTML = cheesecake;
							document.getElementById("taiyaki").innerHTML = taiyaki;
							document.getElementById("gelato").innerHTML = gelato;
					}
			//L3 Baker
				function bakerBakeL3() {
					cheesecake += bakerL3*2;
					taiyaki += bakerL3*2;
					gelato += bakerL3;
					churro	+= bakerL3;
				}
			//L4 Baker
		//Normal Baker; Cheesecake
			function getBaker() {
				if (cheesecake >= 10) {
					cheesecake -= 10;
						document.getElementById("cheesecake").innerHTML = cheesecake;
					baker += 1;
						document.getElementById("baker").innerHTML = baker;
				}
				else if (cheesecake < 10) {
					alert("not enough cheesecake to bribe a pastry chef to bake for you! get at least 10 cheesecakes.");
				}
			}
			
			
		//Baker Lvl1; Taiyaki
		function getbakerL1() {
			if (taiyaki >= 15) {
				taiyaki -= 15;
					document.getElementById("taiyaki").innerHTML = taiyaki;
				bakerL1 += 1;
					document.getElementById("bakerL1").innerHTML = bakerL1;
			}
			else if (taiyaki < 15) {
				alert("not enough taiyaki to bribe a baker to bake for you! get at least 15 taiyaki.");
			}
		}
		//Baker Lvl2; gelato			
		function getbakerL2() {
				if (gelato >= 20) {
					gelato -= 20;
						document.getElementById("gelato").innerHTML = gelato;
					bakerL2 += 1;
						document.getElementById("bakerL2").innerHTML = bakerL2;
				}
				else if (gelato < 15) {
					alert("not enough gelato to bribe a baker to bake for you! get at least 20 gelato.");
				}
			}
		//Baker Lvl3; churro
		function getBakerL3() {
			if (churro >= 25) {
				churro -= 25;
				bakerL3 += 1;
					document.getElementById("churro").innerHTML = churro;
					document.getElementById("bakerL3").innerHTML = bakerL3;
			}
			else if (churro <25) {
				alert("not enough churros to bribe a baker to bake for you! get at least 25 churros.");	
			}
		}
	//FOOD COUNTERS
		//Cheesecake
						var cheesecake = 0;
				function cheesecakeClick() {
						cheesecake += 1;
						document.getElementById("cheesecake").innerHTML = cheesecake;
				}
						
		//Taiyaki
						var taiyaki = 0;
				function taiyakiClick() {
						taiyaki += 1;
						document.getElementById("taiyaki").innerHTML = taiyaki;
				}
				
		//Gelato
						var gelato = 0;
				function gelatoClick() {
						gelato += 1;
						document.getElementById("gelato").innerHTML = gelato;
				}
				
		//Churros
		var churros = 0;
				function churrosClick() {
						churros += 1;
						document.getElementById("churros").innerHTML = churros;
				}
				
		//Chocolate mousse
		var mousse=0;
		function mousseClick() {
			mousse +=1;
			document.getElementById("mousse").innerHTML=mousse;
		}

//Coffee
var coffee=0;
function coffeeClick() {
	coffee +=1;
	document.getElementById("coffee").innerHTML=coffee;
}

//Coke
var coke=0;
function cokeClick() {
	coke +=1;
	document.getElementById("coke").innerHTML=coke;
}

//Dr. Pepper
var drpepper=0;
function drpepperClick() {
	drpepper +=1;
	document.getElementById("drpepper").innerHTML=drpepper;
}
//Jarritos
var jarritos=0;
function jarritosClick() {
	jarritos +=1;
	document.getElementById("jarritos").innerHTML=jarritos;
}

//Tea
var tea=0;
function teaClick() {
	tea +=1;
	document.getElementById("tea").innerHTML=tea;
}

// F	A	S	T		F	O	O	D
//Fries
var fries=0;
function friesClick() {
	fries +=1;
	document.getElementById("fries").innerHTML=fries;
}

//Hotdog
var hotdog=0;
function hotdogClick() {
	hotdog +=1;
	document.getElementById("hotdog").innerHTML=hotdog;
}

//Pizza
var pizza=0;
function pizzaClick() {
	pizza +=1;	
	document.getElementById("pizza").innerHTML=pizza;
}
//Nacho
var nacho=0;
function nachoClick() {
	nacho +=1;
	document.getElementById("nacho").innerHTML=nacho;
}

//Pringles
var pringles=0;
function pringlesClick() {
	pringles +=1;
	document.getElementById("pringles").innerHTML=pringles;
}

//M	E	A	T
//Cooked Chicken
var chicken=0;
function chickenClick() {
	chicken +=1;
	document.getElementById("chicken").innerHTML=chicken;
}

//Escargot
var escargot=0;
function escargotClick() {
	escargot +=1;
	document.getElementById("escargot").innerHTML=escargot;
}

//Lamb Chops
var lamb=0;
function lambClick() {
	lamb +=1;
	document.getElementById("lamb").innerHTML=lamb;
}

//Steak
var steak=0;
function steakClick() {
	steak +=1;
	document.getElementById("steak").innerHTML=steak;
}

//S	W	E	E	T	S
//Haribo
var haribo=0;
function hariboClick() {
	haribo +=1;
	document.getElementById("haribo").innerHTML=haribo;
}

//Kit Kat
var kitkat=0;
function kitkatClick() {
	kitkat +=1;
	document.getElementById("kitkat").innerHTML=kitkat;
}

//Milkshakes
var milkshakes=0;
function milkshakesClick() {
	milkshakes +=1;
	document.getElementById("milkshakes").innerHTML=milkshakes;
}

//Skittles
var skittles=0;
function skittlesClick() {
	skittles +=1;
	document.getElementById("skittles").innerHTML=skittles;
}

//Trolli
var trolli=0;
function trolliClick() {
	trolli +=1;
	document.getElementById("trolli").innerHTML=trolli;
}


//F	R	E	S	H		F	R	U	I	T
//Avocado
var avocado=0;
function avocadoClick() {
	avocado +=1;
	document.getElementById("avocado").innerHTML=avocado;
}

//Bell Pepper
var bellpepper=0;
function bellpepperClick() {
	bellpepper +=1;
	document.getElementById("bellpepper").innerHTML=bellpepper;
}

//Bok Choy
var bokchoy=0;
function bokchoyClick() {
	bokchoy +=1;
	document.getElementById("bokchoy").innerHTML=bokchoy;
}

//Broccoli
var broccoli=0;
function broccoliClick() {
	broccoli +=1;
	document.getElementById("broccoli").innerHTML=broccoli;
}

//Carrot
var clicks42=0;
function carrotClick() {
	carrot +=1;
	document.getElementById("carrot").innerHTML=carrot;
}

// Z u c c h i n i
	//Counter Clicker
	var zucchini=0;
	function zucchiniClick() {
		zucchini +=1;
		document.getElementById("zucchini").innerHTML=zucchini;
	}
//Cherry
var cherry=0;
function cherryClick() {
	cherry +=1;
	document.getElementById("cherry").innerHTML=cherry;
}

//Grape
var grape=0;
function grapeClick() {
	grape +=1;
	document.getElementById("grape").innerHTML=grape;
}

//Mango
var mango=0;
function mangoClick() {
	mango +=1;
	document.getElementById("mango").innerHTML=mango;
}

//Pineapple
var pineapple=0;
function pineappleClick() {
	pineapple +=1;
	document.getElementById("pineapple").innerHTML=pineapple;
}
