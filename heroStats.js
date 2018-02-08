
	
var heroes = [
  {
    "name": "",
    "type": "",
    "health": "",
    "damage": "",
    "healing": "",
    "ultimate_ability": ""
  },
  {
    "name": "Ana",
    "type": "Support",
    "health": 200,
    "damage": 70,
    "healing": 75,
    "ultimate_ability": "Sleep Dart"
  },
  {
    "name": "Bastion",
    "type": "Defense",
    "health": 200,
    "damage": 20,
    "healing": null,
    "ultimate_ability": "Tank"
  },
  {
    "name": "D.Va",
    "type": "Tank",
    "health": 400,
    "damage": 11,
    "healing": null,
    "ultimate_ability": "Self-Destruct"
  },
  {
    "name": "Doomfist",
    "type": "Offense",
    "health": 250,
    "damage": 66,
    "healing": null,
    "ultimate_ability": "Meteor Strike"
  },
  {
    "name": "Genji",
    "type": "Offense",
    "health": 250,
    "damage": 28,
    "healing": null,
    "ultimate_ability": "Dragonblade"
  },
  {
    "name": "Hanzo",
    "type": "Defense",
    "health": 200,
    "damage": 125,
    "healing": null,
    "ultimate_ability": "Dragonstrike"
  },
  {
    "name": "Junkrat",
    "type": "Defense",
    "health": 200,
    "damage": 50,
    "healing": null,
    "ultimate_ability": "Rip-Tire"
  },
  {
    "name": "Lucio",
    "type": "Support",
    "health": 200,
    "damage": 20,
    "healing": 46,
    "ultimate_ability": "Sound Barrier"
  },
  {
    "name": "McCree",
    "type": "Offense",
    "health": 200,
    "damage": 70,
    "healing": null,
    "ultimate_ability": "Deadeye"
  },
  {
    "name": "Mei",
    "type": "Defense",
    "health": 250,
    "damage": 45,
    "healing": null,
    "ultimate_ability": "Blizzard"
  },
  {
    "name": "Mercy",
    "type": "Support",
    "health": 200,
    "damage": 20,
    "healing": 60,
    "ultimate_ability": "Valkyrie"
  },
  {
    "name": "Moira",
    "type": "Support",
    "health": 200,
    "damage": 50,
    "healing": 80,
    "ultimate_ability": "Coalescence"
  },
  {
    "name": "Orisa",
    "type": "Tank",
    "health": 400,
    "damage": 11,
    "healing": null,
    "ultimate_ability": "Supercharger"
  },
  {
    "name": "Pharah",
    "type": "Offense",
    "health": 200,
    "damage": 120,
    "healing": null,
    "ultimate_ability": "Barrage"
  },
  {
    "name": "Reaper",
    "type": "Offense",
    "health": 250,
    "damage": 140,
    "healing": null,
    "ultimate_ability": "Death Blossom"
  },
  {
    "name": "Reinhardt",
    "type": "Tank",
    "health": 500,
    "damage": 75,
    "healing": null,
    "ultimate_ability": "Earthshatter"
  },
  {
    "name": "Roadhog",
    "type": "Tank",
    "health": 600,
    "damage": 50,
    "healing": 300,
    "ultimate_ability": "Whole Hog"
  },
  {
    "name": "Soldier 76",
    "type": "Offense",
    "health": 200,
    "damage": 19,
    "healing": 40,
    "ultimate_ability": "Tactical Visor"
  },
  {
    "name": "Sombra",
    "type": "Offense",
    "health": 200,
    "damage": 8,
    "healing": null,
    "ultimate_ability": "EMP"
  },
  {
    "name": "Symmetra",
    "type": "Support",
    "health": 200,
    "damage": 15,
    "healing": null,
    "ultimate_ability": "Teleporter/Shield Generator"
  },
  {
    "name": "Torbjorn",
    "type": "Defense",
    "health": 200,
    "damage": 70,
    "healing": null,
    "ultimate_ability": "Molten Core"
  },
  {
    "name": "Tracer",
    "type": "Offense",
    "health": 150,
    "damage": 12,
    "healing": null,
    "ultimate_ability": "Pulse Bomb"
  },
  {
    "name": "Widowmaker",
    "type": "Defense",
    "health": 200,
    "damage": 120,
    "healing": null,
    "ultimate_ability": "Infra-Sight"
  },
  {
    "name": "Winston",
    "type": "Tank",
    "health": 500,
    "damage": 60,
    "healing": null,
    "ultimate_ability": "Primal Rage"
  },
  {
    "name": "Zarya",
    "type": "Tank",
    "health": 400,
    "damage": 95,
    "healing": null,
    "ultimate_ability": "Graviton Surge"
  },
  {
    "name": "Zenyatta",
    "type": "Support",
    "health": 200,
    "damage": 46,
    "healing": 30,
    "ultimate_ability": "Transcendence"
  }
]

//Getting DataTable
var dataTable = document.getElementById("DataTable");

//Reversing heroes array to keep alphabetical
heroes.reverse();

//Adding rows and cells to the table and assigning their values
for (i = 0; i < heroes.length; i++){
		
		//Creating new row
		var row = dataTable.insertRow(1);
		
		//Creating cells
		var cell_1 = row.insertCell(0); 
		var cell_2 = row.insertCell(1);
		var cell_3 = row.insertCell(2);
		var cell_4 = row.insertCell(3);
		var cell_5 = row.insertCell(4);
		var cell_6 = row.insertCell(5);
		
		//Assigning values to new cells
		cell_1.innerHTML = heroes[i].name;
		cell_2.innerHTML = heroes[i].type;
		cell_3.innerHTML = heroes[i].health;
		cell_4.innerHTML = heroes[i].damage;
		cell_5.innerHTML = heroes[i].healing;
		cell_6.innerHTML = heroes[i].ultimate_ability;
	}

//Getting 'heroChart'	
var ctx = document.getElementById('heroChart').getContext('2d');

//'Health' dataset
var healthData = {
	label:"Health",
	data:[heroes[25].health,heroes[24].health,heroes[23].health,heroes[22].health,
		  heroes[21].health,heroes[20].health,heroes[19].health,heroes[18].health,
		  heroes[17].health,heroes[16].health,heroes[15].health,heroes[14].health,
		  heroes[13].health,heroes[12].health,heroes[11].health,heroes[10].health,
		  heroes[9].health,heroes[8].health,heroes[7].health,heroes[6].health,
		  heroes[5].health,heroes[4].health,heroes[3].health,heroes[2].health,
		  heroes[1].health,heroes[0].health
		 ],
	backgroundColor: '#218ffe',
	borderColor: 'white',
}
//'Damage' dataset
var damageData = {
	label:"Damage",
	data:[heroes[25].damage,heroes[24].damage,heroes[23].damage,heroes[22].damage,
		  heroes[21].damage,heroes[20].damage,heroes[19].damage,heroes[18].damage,
		  heroes[17].damage,heroes[16].damage,heroes[15].damage,heroes[14].damage,
		  heroes[13].damage,heroes[12].damage,heroes[11].damage,heroes[10].damage,
		  heroes[9].damage,heroes[8].damage,heroes[7].damage,heroes[6].damage,
		  heroes[5].damage,heroes[4].damage,heroes[3].damage,heroes[2].damage,
		  heroes[1].damage,heroes[0].damage
		 ],
	backgroundColor: '#FF4500',
	borderColor: 'white',
}
//'Healing' dataset
var healingData = {
	label:"Healing",
	data:[heroes[25].healing,heroes[24].healing,heroes[23].healing,heroes[22].healing,
		  heroes[21].healing,heroes[20].healing,heroes[19].healing,heroes[18].healing,
		  heroes[17].healing,heroes[16].healing,heroes[15].healing,heroes[14].healing,
		  heroes[13].healing,heroes[12].healing,heroes[11].healing,heroes[10].healing,
		  heroes[9].healing,heroes[8].healing,heroes[7].healing,heroes[6].healing,
		  heroes[5].healing,heroes[4].healing,heroes[3].healing,heroes[2].healing,
		  heroes[1].healing,heroes[0].healing
		 ],
	backgroundColor: '#ffc654',
	borderColor: 'white',
}

//Creating bar chart from 'Chart.js'
var chart = new Chart(ctx, {
	
	type: 'bar',
	
	//Labeling each entry
	data: {
		labels:[heroes[25].name,heroes[24].name,heroes[23].name,heroes[22].name,
				heroes[21].name,heroes[20].name,heroes[19].name,heroes[18].name,
				heroes[17].name,heroes[16].name,heroes[15].name,heroes[14].name,
				heroes[13].name,heroes[12].name,heroes[11].name,heroes[10].name,
				heroes[9].name,heroes[8].name,heroes[7].name,heroes[6].name,
				heroes[5].name,heroes[4].name,heroes[3].name,heroes[2].name,
				heroes[1].name,heroes[0].name
				],
		//Calling datasets		
		datasets: [healthData,damageData, healingData]
		
	},
	
	options:{}
	
});