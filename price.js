function priceChecker(){
				var people=parseInt(prompt("How many People?"));
				var season=prompt("what season");
				if(season=="spring" && people<5 ||season=="summer" && people>=5){
					alert("price is 500pp");
				}
				if(season=="spring" && people>=5){
					alert("price is 400pp");
				}
				if(season=="summer" && people<5 || season=="winter" && people>=5){
					alert("price is 600pp");
				}
				if(season=="autumn" && people<5){
					alert("price is 550pp");
				}
				if(season=="autumn" && people>=5){
					alert("price is 450pp");
				}
				if(season=="winter" && people<5){
					alert("price is 700pp");
				}
				if(people<=0 ){
					alert("you think your fucking gas dont ya?")
				}
			}