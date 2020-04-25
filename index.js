			document.getElementById("Everything").style.zoom = window.innerWidth * 0.001;
			
			var fs = require('fs');
			var file = fs.readFileSync("read.txt", "utf8");
			console.log(file);
			
			
			function RandomFunction()
			{
			
			//the function begins when the button is pressed
			alert("The button works and there are no initial errors");
			//the varible sentence is whatever is in the input box
			var sentence = document.getElementById("texty").value + " ";	
			//alert( sentence );
			
			//finding the positing of the spaces in Sentence
			var Spaces = [];
			var LastSpace = 0;
			var ThisSpace = 0;
			
			if(sentence.indexOf(" ", 0) == 0)
			{
			 Spaces.push(sentence.indexOf(" ", 0));
			 LastSpace = sentence.indexOf(" ", 0);
			}
			
			
			while(LastSpace > -1)
			{
			 Spaces.push(sentence.indexOf(" ", LastSpace + 1));
			 LastSpace = sentence.indexOf(" ", LastSpace + 1);
			}
			
			//alert("Spaces are at" + Spaces + "");
			
			//Turing the Spaces into words
			
			var Word = []
			var UFWord = []
			var a = 0;
			var validWord = 0;
			
			UFWord.push(sentence.substring(0, Spaces[a]));
			
			while(validWord > -1)
			{
				UFWord.push(sentence.substring(Spaces[a] + 1, Spaces[(a+1)]));
				a = (a+1);
				validWord = Spaces[a+1];
			}
			
			//filtering for words double spaces 
			
			UFWord.forEach(function(element)
			{
			if(element != "")
			{
			Word.push(element);
			}
			}
			)
			
			//clearing the table from any previous runs
			
			var j = 1;
			while(j <= 21)
			{
				document.getElementById("word" + j + "").innerHTML = Word[Nword] + "";
				j = j+1
			}
			
			var j = 1;
			while(j <= 21)
			{
				document.getElementById("cell" + j + "").style.visibility = "hidden";
				j=j+1
			}
			
			//re-writing the new words into table
			
			var Nword = 0
			
			while(typeof Word[Nword] !== "undefined")
			{	
				document.getElementById("cell" + (Nword + 1) + "").style.visibility = "visible";
				document.getElementById("word" + (Nword + 1) + "").innerHTML = Word[Nword] + "";
				
				let NewImage = document.getElementById("image" +(Nword + 1) + "");
				NewImage.src = "Images/" + Word[Nword].toLowerCase() + ".PNG";
				NewImage.onerror = function()
				{
						NewImage.src = "Images/Undefined.png" ;
				}
				Nword = Nword + 1
			}
			
			//alert("The first word is " + Word[0]);
			//alert("The second word is " + Word[1]);
			//alert("The third word is " + Word[2]);
			
			//re-placing images
			
			}