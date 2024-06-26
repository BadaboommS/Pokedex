const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["Grass","Poison"],
      hp: 45,
      atk: 49,
      def: 49,
      s_atk: 65,
      s_def: 65,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["Grass","Poison"],
      hp: 60,
      atk: 62,
      def: 63,
      s_atk: 80,
      s_def: 80,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 1
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["Grass","Poison"],
      hp: 80,
      atk: 82,
      def: 83,
      s_atk: 100,
      s_def: 100,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 2
    },
    {
      id: 4,
      name: "Charmander",
      types: ["Fire"],
      hp: 39,
      atk: 52,
      def: 43,
      s_atk: 60,
      s_def: 50,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 5,
      name: "Charmeleon",
      types: ["Fire"],
      hp: 58,
      atk: 64,
      def: 58,
      s_atk: 80,
      s_def: 65,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 4
    },
    {
      id: 6,
      name: "Charizard",
      types: ["Fire","Flying"],
      hp: 78,
      atk: 84,
      def: 78,
      s_atk: 109,
      s_def: 85,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 5
    },
    {
      id: 7,
      name: "Squirtle",
      types: ["Water"],
      hp: 44,
      atk: 48,
      def: 65,
      s_atk: 50,
      s_def: 64,
      spd: 43,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 8,
      name: "Wartortle",
      types: ["Water"],
      hp: 59,
      atk: 63,
      def: 80,
      s_atk: 65,
      s_def: 80,
      spd: 58,
      gen: 1,
      legendary: false,
      evolves_from_id: 7
    },
    {
      id: 9,
      name: "Blastoise",
      types: ["Water"],
      hp: 79,
      atk: 83,
      def: 100,
      s_atk: 85,
      s_def: 105,
      spd: 78,
      gen: 1,
      legendary: false,
      evolves_from_id: 8
    },
    {
      id: 10,
      name: "Caterpie",
      types: ["Bug"],
      hp: 45,
      atk: 30,
      def: 35,
      s_atk: 20,
      s_def: 20,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 11,
      name: "Metapod",
      types: ["Bug"],
      hp: 50,
      atk: 20,
      def: 55,
      s_atk: 25,
      s_def: 25,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 10
    },
    {
      id: 12,
      name: "Butterfree",
      types: ["Bug","Flying"],
      hp: 60,
      atk: 45,
      def: 50,
      s_atk: 90,
      s_def: 80,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 11
    },
    {
      id: 13,
      name: "Weedle",
      types: ["Bug","Poison"],
      hp: 40,
      atk: 35,
      def: 30,
      s_atk: 20,
      s_def: 20,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 14,
      name: "Kakuna",
      types: ["Bug","Poison"],
      hp: 45,
      atk: 25,
      def: 50,
      s_atk: 25,
      s_def: 25,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 13
    },
    {
      id: 15,
      name: "Beedrill",
      types: ["Bug","Poison"],
      hp: 65,
      atk: 90,
      def: 40,
      s_atk: 45,
      s_def: 80,
      spd: 75,
      gen: 1,
      legendary: false,
      evolves_from_id: 14
    },
    {
      id: 16,
      name: "Pidgey",
      types: ["Normal","Flying"],
      hp: 40,
      atk: 45,
      def: 40,
      s_atk: 35,
      s_def: 35,
      spd: 56,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 17,
      name: "Pidgeotto",
      types: ["Normal","Flying"],
      hp: 63,
      atk: 60,
      def: 55,
      s_atk: 50,
      s_def: 50,
      spd: 71,
      gen: 1,
      legendary: false,
      evolves_from_id: 16
    },
    {
      id: 18,
      name: "Pidgeot",
      types: ["Normal","Flying"],
      hp: 83,
      atk: 80,
      def: 75,
      s_atk: 70,
      s_def: 70,
      spd: 101,
      gen: 1,
      legendary: false,
      evolves_from_id: 17
    },
    {
      id: 19,
      name: "Rattata",
      types: ["Normal"],
      hp: 30,
      atk: 56,
      def: 35,
      s_atk: 25,
      s_def: 35,
      spd: 72,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 20,
      name: "Raticate",
      types: ["Normal"],
      hp: 55,
      atk: 81,
      def: 60,
      s_atk: 50,
      s_def: 70,
      spd: 97,
      gen: 1,
      legendary: false,
      evolves_from_id: 19
    },
    {
      id: 21,
      name: "Spearow",
      types: ["Normal","Flying"],
      hp: 40,
      atk: 60,
      def: 30,
      s_atk: 31,
      s_def: 31,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 22,
      name: "Fearow",
      types: ["Normal","Flying"],
      hp: 65,
      atk: 90,
      def: 65,
      s_atk: 61,
      s_def: 61,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 21
    },
    {
      id: 23,
      name: "Ekans",
      types: ["Poison"],
      hp: 35,
      atk: 60,
      def: 44,
      s_atk: 40,
      s_def: 54,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 24,
      name: "Arbok",
      types: ["Poison"],
      hp: 60,
      atk: 85,
      def: 69,
      s_atk: 65,
      s_def: 79,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 23
    },
    {
      id: 25,
      name: "Pikachu",
      types: ["Electric"],
      hp: 35,
      atk: 55,
      def: 40,
      s_atk: 50,
      s_def: 50,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 26,
      name: "Raichu",
      types: ["Electric"],
      hp: 60,
      atk: 90,
      def: 55,
      s_atk: 90,
      s_def: 80,
      spd: 110,
      gen: 1,
      legendary: false,
      evolves_from_id: 25
    },
    {
      id: 27,
      name: "Sandshrew",
      types: ["Ground"],
      hp: 50,
      atk: 75,
      def: 85,
      s_atk: 20,
      s_def: 30,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 28,
      name: "Sandslash",
      types: ["Ground"],
      hp: 75,
      atk: 100,
      def: 110,
      s_atk: 45,
      s_def: 55,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 27
    },
    {
      id: 29,
      name: "Nidoran♀",
      types: ["Poison"],
      hp: 55,
      atk: 47,
      def: 52,
      s_atk: 40,
      s_def: 40,
      spd: 41,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 30,
      name: "Nidorina",
      types: ["Poison"],
      hp: 70,
      atk: 62,
      def: 67,
      s_atk: 55,
      s_def: 55,
      spd: 56,
      gen: 1,
      legendary: false,
      evolves_from_id: 29
    },
    {
      id: 31,
      name: "Nidoqueen",
      types: ["Poison","Ground"],
      hp: 90,
      atk: 92,
      def: 87,
      s_atk: 75,
      s_def: 85,
      spd: 76,
      gen: 1,
      legendary: false,
      evolves_from_id: 30
    },
    {
      id: 32,
      name: "Nidoran♂",
      types: ["Poison"],
      hp: 46,
      atk: 57,
      def: 40,
      s_atk: 40,
      s_def: 40,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 33,
      name: "Nidorino",
      types: ["Poison"],
      hp: 61,
      atk: 72,
      def: 57,
      s_atk: 55,
      s_def: 55,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 32
    },
    {
      id: 34,
      name: "Nidoking",
      types: ["Poison","Ground"],
      hp: 81,
      atk: 102,
      def: 77,
      s_atk: 85,
      s_def: 75,
      spd: 85,
      gen: 1,
      legendary: false,
      evolves_from_id: 33
    },
    {
      id: 35,
      name: "Clefairy",
      types: ["Fairy"],
      hp: 70,
      atk: 45,
      def: 48,
      s_atk: 60,
      s_def: 65,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 36,
      name: "Clefable",
      types: ["Fairy"],
      hp: 95,
      atk: 70,
      def: 73,
      s_atk: 95,
      s_def: 90,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 35
    },
    {
      id: 37,
      name: "Vulpix",
      types: ["Fire"],
      hp: 38,
      atk: 41,
      def: 40,
      s_atk: 50,
      s_def: 65,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 38,
      name: "Ninetales",
      types: ["Fire"],
      hp: 73,
      atk: 76,
      def: 75,
      s_atk: 81,
      s_def: 100,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 37
    },
    {
      id: 39,
      name: "Jigglypuff",
      types: ["Normal","Fairy"],
      hp: 115,
      atk: 45,
      def: 20,
      s_atk: 45,
      s_def: 25,
      spd: 20,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 40,
      name: "Wigglytuff",
      types: ["Normal","Fairy"],
      hp: 140,
      atk: 70,
      def: 45,
      s_atk: 85,
      s_def: 50,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 39
    },
    {
      id: 41,
      name: "Zubat",
      types: ["Poison","Flying"],
      hp: 40,
      atk: 45,
      def: 35,
      s_atk: 30,
      s_def: 40,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 42,
      name: "Golbat",
      types: ["Poison","Flying"],
      hp: 75,
      atk: 80,
      def: 70,
      s_atk: 65,
      s_def: 75,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 41
    },
    {
      id: 43,
      name: "Oddish",
      types: ["Grass","Poison"],
      hp: 45,
      atk: 50,
      def: 55,
      s_atk: 75,
      s_def: 65,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 44,
      name: "Gloom",
      types: ["Grass","Poison"],
      hp: 60,
      atk: 65,
      def: 70,
      s_atk: 85,
      s_def: 75,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 43
    },
    {
      id: 45,
      name: "Vileplume",
      types: ["Grass","Poison"],
      hp: 75,
      atk: 80,
      def: 85,
      s_atk: 110,
      s_def: 90,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 44
    },
    {
      id: 46,
      name: "Paras",
      types: ["Bug","Grass"],
      hp: 35,
      atk: 70,
      def: 55,
      s_atk: 45,
      s_def: 55,
      spd: 25,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 47,
      name: "Parasect",
      types: ["Bug","Grass"],
      hp: 60,
      atk: 95,
      def: 80,
      s_atk: 60,
      s_def: 80,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 46
    },
    {
      id: 48,
      name: "Venonat",
      types: ["Bug","Poison"],
      hp: 60,
      atk: 55,
      def: 50,
      s_atk: 40,
      s_def: 55,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 49,
      name: "Venomoth",
      types: ["Bug","Poison"],
      hp: 70,
      atk: 65,
      def: 60,
      s_atk: 90,
      s_def: 75,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 48
    },
    {
      id: 50,
      name: "Diglett",
      types: ["Ground"],
      hp: 10,
      atk: 55,
      def: 25,
      s_atk: 35,
      s_def: 45,
      spd: 95,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 51,
      name: "Dugtrio",
      types: ["Ground"],
      hp: 35,
      atk: 80,
      def: 50,
      s_atk: 50,
      s_def: 70,
      spd: 120,
      gen: 1,
      legendary: false,
      evolves_from_id: 50
    },
    {
      id: 52,
      name: "Meowth",
      types: ["Normal"],
      hp: 40,
      atk: 45,
      def: 35,
      s_atk: 40,
      s_def: 40,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 53,
      name: "Persian",
      types: ["Normal"],
      hp: 65,
      atk: 70,
      def: 60,
      s_atk: 65,
      s_def: 65,
      spd: 115,
      gen: 1,
      legendary: false,
      evolves_from_id: 52
    },
    {
      id: 54,
      name: "Psyduck",
      types: ["Water"],
      hp: 50,
      atk: 52,
      def: 48,
      s_atk: 65,
      s_def: 50,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 55,
      name: "Golduck",
      types: ["Water"],
      hp: 80,
      atk: 82,
      def: 78,
      s_atk: 95,
      s_def: 80,
      spd: 85,
      gen: 1,
      legendary: false,
      evolves_from_id: 54
    },
    {
      id: 56,
      name: "Mankey",
      types: ["Fighting"],
      hp: 40,
      atk: 80,
      def: 35,
      s_atk: 35,
      s_def: 45,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 57,
      name: "Primeape",
      types: ["Fighting"],
      hp: 65,
      atk: 105,
      def: 60,
      s_atk: 60,
      s_def: 70,
      spd: 95,
      gen: 1,
      legendary: false,
      evolves_from_id: 56
    },
    {
      id: 58,
      name: "Growlithe",
      types: ["Fire"],
      hp: 55,
      atk: 70,
      def: 45,
      s_atk: 70,
      s_def: 50,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 59,
      name: "Arcanine",
      types: ["Fire"],
      hp: 90,
      atk: 110,
      def: 80,
      s_atk: 100,
      s_def: 80,
      spd: 95,
      gen: 1,
      legendary: false,
      evolves_from_id: 58
    },
    {
      id: 60,
      name: "Poliwag",
      types: ["Water"],
      hp: 40,
      atk: 50,
      def: 40,
      s_atk: 40,
      s_def: 40,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 61,
      name: "Poliwhirl",
      types: ["Water"],
      hp: 65,
      atk: 65,
      def: 65,
      s_atk: 50,
      s_def: 50,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 60
    },
    {
      id: 62,
      name: "Poliwrath",
      types: ["Water","Fighting"],
      hp: 90,
      atk: 95,
      def: 95,
      s_atk: 70,
      s_def: 90,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 61
    },
    {
      id: 63,
      name: "Abra",
      types: ["Psychic"],
      hp: 25,
      atk: 20,
      def: 15,
      s_atk: 105,
      s_def: 55,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 64,
      name: "Kadabra",
      types: ["Psychic"],
      hp: 40,
      atk: 35,
      def: 30,
      s_atk: 120,
      s_def: 70,
      spd: 105,
      gen: 1,
      legendary: false,
      evolves_from_id: 63
    },
    {
      id: 65,
      name: "Alakazam",
      types: ["Psychic"],
      hp: 55,
      atk: 50,
      def: 45,
      s_atk: 135,
      s_def: 95,
      spd: 120,
      gen: 1,
      legendary: false,
      evolves_from_id: 64
    },
    {
      id: 66,
      name: "Machop",
      types: ["Fighting"],
      hp: 70,
      atk: 80,
      def: 50,
      s_atk: 35,
      s_def: 35,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 67,
      name: "Machoke",
      types: ["Fighting"],
      hp: 80,
      atk: 100,
      def: 70,
      s_atk: 50,
      s_def: 60,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 66
    },
    {
      id: 68,
      name: "Machamp",
      types: ["Fighting"],
      hp: 90,
      atk: 130,
      def: 80,
      s_atk: 65,
      s_def: 85,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 67
    },
    {
      id: 69,
      name: "Bellsprout",
      types: ["Grass","Poison"],
      hp: 50,
      atk: 75,
      def: 35,
      s_atk: 70,
      s_def: 30,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 70,
      name: "Weepinbell",
      types: ["Grass","Poison"],
      hp: 65,
      atk: 90,
      def: 50,
      s_atk: 85,
      s_def: 45,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 69
    },
    {
      id: 71,
      name: "Victreebel",
      types: ["Grass","Poison"],
      hp: 80,
      atk: 105,
      def: 65,
      s_atk: 100,
      s_def: 70,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 70
    },
    {
      id: 72,
      name: "Tentacool",
      types: ["Water","Poison"],
      hp: 40,
      atk: 40,
      def: 35,
      s_atk: 50,
      s_def: 100,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 73,
      name: "Tentacruel",
      types: ["Water","Poison"],
      hp: 80,
      atk: 70,
      def: 65,
      s_atk: 80,
      s_def: 120,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 72
    },
    {
      id: 74,
      name: "Geodude",
      types: ["Rock","Ground"],
      hp: 40,
      atk: 80,
      def: 100,
      s_atk: 30,
      s_def: 30,
      spd: 20,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 75,
      name: "Graveler",
      types: ["Rock","Ground"],
      hp: 55,
      atk: 95,
      def: 115,
      s_atk: 45,
      s_def: 45,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 74
    },
    {
      id: 76,
      name: "Golem",
      types: ["Rock","Ground"],
      hp: 80,
      atk: 120,
      def: 130,
      s_atk: 55,
      s_def: 65,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 75
    },
    {
      id: 77,
      name: "Ponyta",
      types: ["Fire"],
      hp: 50,
      atk: 85,
      def: 55,
      s_atk: 65,
      s_def: 65,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 78,
      name: "Rapidash",
      types: ["Fire"],
      hp: 65,
      atk: 100,
      def: 70,
      s_atk: 80,
      s_def: 80,
      spd: 105,
      gen: 1,
      legendary: false,
      evolves_from_id: 77
    },
    {
      id: 79,
      name: "Slowpoke",
      types: ["Water","Psychic"],
      hp: 90,
      atk: 65,
      def: 65,
      s_atk: 40,
      s_def: 40,
      spd: 15,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 80,
      name: "Slowbro",
      types: ["Water","Psychic"],
      hp: 95,
      atk: 75,
      def: 110,
      s_atk: 100,
      s_def: 80,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 79
    },
    {
      id: 81,
      name: "Magnemite",
      types: ["Electric","Steel"],
      hp: 25,
      atk: 35,
      def: 70,
      s_atk: 95,
      s_def: 55,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 82,
      name: "Magneton",
      types: ["Electric","Steel"],
      hp: 50,
      atk: 60,
      def: 95,
      s_atk: 120,
      s_def: 70,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 81
    },
    {
      id: 83,
      name: "Farfetch'd",
      types: ["Normal","Flying"],
      hp: 52,
      atk: 65,
      def: 55,
      s_atk: 58,
      s_def: 62,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 84,
      name: "Doduo",
      types: ["Normal","Flying"],
      hp: 35,
      atk: 85,
      def: 45,
      s_atk: 35,
      s_def: 35,
      spd: 75,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 85,
      name: "Dodrio",
      types: ["Normal","Flying"],
      hp: 60,
      atk: 110,
      def: 70,
      s_atk: 60,
      s_def: 60,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 84
    },
    {
      id: 86,
      name: "Seel",
      types: ["Water"],
      hp: 65,
      atk: 45,
      def: 55,
      s_atk: 45,
      s_def: 70,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 87,
      name: "Dewgong",
      types: ["Water","Ice"],
      hp: 90,
      atk: 70,
      def: 80,
      s_atk: 70,
      s_def: 95,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 86
    },
    {
      id: 88,
      name: "Grimer",
      types: ["Poison"],
      hp: 80,
      atk: 80,
      def: 50,
      s_atk: 40,
      s_def: 50,
      spd: 25,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 89,
      name: "Muk",
      types: ["Poison"],
      hp: 105,
      atk: 105,
      def: 75,
      s_atk: 65,
      s_def: 100,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 88
    },
    {
      id: 90,
      name: "Shellder",
      types: ["Water"],
      hp: 30,
      atk: 65,
      def: 100,
      s_atk: 45,
      s_def: 25,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 91,
      name: "Cloyster",
      types: ["Water","Ice"],
      hp: 50,
      atk: 95,
      def: 180,
      s_atk: 85,
      s_def: 45,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 90
    },
    {
      id: 92,
      name: "Gastly",
      types: ["Ghost","Poison"],
      hp: 30,
      atk: 35,
      def: 30,
      s_atk: 100,
      s_def: 35,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 93,
      name: "Haunter",
      types: ["Ghost","Poison"],
      hp: 45,
      atk: 50,
      def: 45,
      s_atk: 115,
      s_def: 55,
      spd: 95,
      gen: 1,
      legendary: false,
      evolves_from_id: 92
    },
    {
      id: 94,
      name: "Gengar",
      types: ["Ghost","Poison"],
      hp: 60,
      atk: 65,
      def: 60,
      s_atk: 130,
      s_def: 75,
      spd: 110,
      gen: 1,
      legendary: false,
      evolves_from_id: 93
    },
    {
      id: 95,
      name: "Onix",
      types: ["Rock","Ground"],
      hp: 35,
      atk: 45,
      def: 160,
      s_atk: 30,
      s_def: 45,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 96,
      name: "Drowzee",
      types: ["Psychic"],
      hp: 60,
      atk: 48,
      def: 45,
      s_atk: 43,
      s_def: 90,
      spd: 42,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 97,
      name: "Hypno",
      types: ["Psychic"],
      hp: 85,
      atk: 73,
      def: 70,
      s_atk: 73,
      s_def: 115,
      spd: 67,
      gen: 1,
      legendary: false,
      evolves_from_id: 96
    },
    {
      id: 98,
      name: "Krabby",
      types: ["Water"],
      hp: 30,
      atk: 105,
      def: 90,
      s_atk: 25,
      s_def: 25,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 99,
      name: "Kingler",
      types: ["Water"],
      hp: 55,
      atk: 130,
      def: 115,
      s_atk: 50,
      s_def: 50,
      spd: 75,
      gen: 1,
      legendary: false,
      evolves_from_id: 98
    },
    {
      id: 100,
      name: "Voltorb",
      types: ["Electric"],
      hp: 40,
      atk: 30,
      def: 50,
      s_atk: 55,
      s_def: 55,
      spd: 100,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 101,
      name: "Electrode",
      types: ["Electric"],
      hp: 60,
      atk: 50,
      def: 70,
      s_atk: 80,
      s_def: 80,
      spd: 140,
      gen: 1,
      legendary: false,
      evolves_from_id: 100
    },
    {
      id: 102,
      name: "Exeggcute",
      types: ["Grass","Psychic"],
      hp: 60,
      atk: 40,
      def: 80,
      s_atk: 60,
      s_def: 45,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 103,
      name: "Exeggutor",
      types: ["Grass","Psychic"],
      hp: 95,
      atk: 95,
      def: 85,
      s_atk: 125,
      s_def: 65,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 102
    },
    {
      id: 104,
      name: "Cubone",
      types: ["Ground"],
      hp: 50,
      atk: 50,
      def: 95,
      s_atk: 40,
      s_def: 50,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 105,
      name: "Marowak",
      types: ["Ground"],
      hp: 60,
      atk: 80,
      def: 110,
      s_atk: 50,
      s_def: 80,
      spd: 45,
      gen: 1,
      legendary: false,
      evolves_from_id: 104
    },
    {
      id: 106,
      name: "Hitmonlee",
      types: ["Fighting"],
      hp: 50,
      atk: 120,
      def: 53,
      s_atk: 35,
      s_def: 110,
      spd: 87,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 107,
      name: "Hitmonchan",
      types: ["Fighting"],
      hp: 50,
      atk: 105,
      def: 79,
      s_atk: 35,
      s_def: 110,
      spd: 76,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 108,
      name: "Lickitung",
      types: ["Normal"],
      hp: 90,
      atk: 55,
      def: 75,
      s_atk: 60,
      s_def: 75,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 109,
      name: "Koffing",
      types: ["Poison"],
      hp: 40,
      atk: 65,
      def: 95,
      s_atk: 60,
      s_def: 45,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 110,
      name: "Weezing",
      types: ["Poison"],
      hp: 65,
      atk: 90,
      def: 120,
      s_atk: 85,
      s_def: 70,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 109
    },
    {
      id: 111,
      name: "Rhyhorn",
      types: ["Ground","Rock"],
      hp: 80,
      atk: 85,
      def: 95,
      s_atk: 30,
      s_def: 30,
      spd: 25,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 112,
      name: "Rhydon",
      types: ["Ground","Rock"],
      hp: 105,
      atk: 130,
      def: 120,
      s_atk: 45,
      s_def: 45,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 111
    },
    {
      id: 113,
      name: "Chansey",
      types: ["Normal"],
      hp: 250,
      atk: 5,
      def: 5,
      s_atk: 35,
      s_def: 105,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 114,
      name: "Tangela",
      types: ["Grass"],
      hp: 65,
      atk: 55,
      def: 115,
      s_atk: 100,
      s_def: 40,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 115,
      name: "Kangaskhan",
      types: ["Normal"],
      hp: 105,
      atk: 95,
      def: 80,
      s_atk: 40,
      s_def: 80,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 116,
      name: "Horsea",
      types: ["Water"],
      hp: 30,
      atk: 40,
      def: 70,
      s_atk: 70,
      s_def: 25,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 117,
      name: "Seadra",
      types: ["Water"],
      hp: 55,
      atk: 65,
      def: 95,
      s_atk: 95,
      s_def: 45,
      spd: 85,
      gen: 1,
      legendary: false,
      evolves_from_id: 116
    },
    {
      id: 118,
      name: "Goldeen",
      types: ["Water"],
      hp: 45,
      atk: 67,
      def: 60,
      s_atk: 35,
      s_def: 50,
      spd: 63,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 119,
      name: "Seaking",
      types: ["Water"],
      hp: 80,
      atk: 92,
      def: 65,
      s_atk: 65,
      s_def: 80,
      spd: 68,
      gen: 1,
      legendary: false,
      evolves_from_id: 118
    },
    {
      id: 120,
      name: "Staryu",
      types: ["Water"],
      hp: 30,
      atk: 45,
      def: 55,
      s_atk: 70,
      s_def: 55,
      spd: 85,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 121,
      name: "Starmie",
      types: ["Water","Psychic"],
      hp: 60,
      atk: 75,
      def: 85,
      s_atk: 100,
      s_def: 85,
      spd: 115,
      gen: 1,
      legendary: false,
      evolves_from_id: 120
    },
    {
      id: 122,
      name: "Mr. Mime",
      types: ["Psychic","Fairy"],
      hp: 40,
      atk: 45,
      def: 65,
      s_atk: 100,
      s_def: 120,
      spd: 90,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 123,
      name: "Scyther",
      types: ["Bug","Flying"],
      hp: 70,
      atk: 110,
      def: 80,
      s_atk: 55,
      s_def: 80,
      spd: 105,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 124,
      name: "Jynx",
      types: ["Ice","Psychic"],
      hp: 65,
      atk: 50,
      def: 35,
      s_atk: 115,
      s_def: 95,
      spd: 95,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 125,
      name: "Electabuzz",
      types: ["Electric"],
      hp: 65,
      atk: 83,
      def: 57,
      s_atk: 95,
      s_def: 85,
      spd: 105,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 126,
      name: "Magmar",
      types: ["Fire"],
      hp: 65,
      atk: 95,
      def: 57,
      s_atk: 100,
      s_def: 85,
      spd: 93,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 127,
      name: "Pinsir",
      types: ["Bug"],
      hp: 65,
      atk: 125,
      def: 100,
      s_atk: 55,
      s_def: 70,
      spd: 85,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 128,
      name: "Tauros",
      types: ["Normal"],
      hp: 75,
      atk: 100,
      def: 95,
      s_atk: 40,
      s_def: 70,
      spd: 110,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 129,
      name: "Magikarp",
      types: ["Water"],
      hp: 20,
      atk: 10,
      def: 55,
      s_atk: 15,
      s_def: 20,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 130,
      name: "Gyarados",
      types: ["Water","Flying"],
      hp: 95,
      atk: 125,
      def: 79,
      s_atk: 60,
      s_def: 100,
      spd: 81,
      gen: 1,
      legendary: false,
      evolves_from_id: 129
    },
    {
      id: 131,
      name: "Lapras",
      types: ["Water","Ice"],
      hp: 130,
      atk: 85,
      def: 80,
      s_atk: 85,
      s_def: 95,
      spd: 60,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 132,
      name: "Ditto",
      types: ["Normal"],
      hp: 48,
      atk: 48,
      def: 48,
      s_atk: 48,
      s_def: 48,
      spd: 48,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 133,
      name: "Eevee",
      types: ["Normal"],
      hp: 55,
      atk: 55,
      def: 50,
      s_atk: 45,
      s_def: 65,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 134,
      name: "Vaporeon",
      types: ["Water"],
      hp: 130,
      atk: 65,
      def: 60,
      s_atk: 110,
      s_def: 95,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 133
    },
    {
      id: 135,
      name: "Jolteon",
      types: ["Electric"],
      hp: 65,
      atk: 65,
      def: 60,
      s_atk: 110,
      s_def: 95,
      spd: 130,
      gen: 1,
      legendary: false,
      evolves_from_id: 133
    },
    {
      id: 136,
      name: "Flareon",
      types: ["Fire"],
      hp: 65,
      atk: 130,
      def: 60,
      s_atk: 95,
      s_def: 110,
      spd: 65,
      gen: 1,
      legendary: false,
      evolves_from_id: 133
    },
    {
      id: 137,
      name: "Porygon",
      types: ["Normal"],
      hp: 65,
      atk: 60,
      def: 70,
      s_atk: 85,
      s_def: 75,
      spd: 40,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 138,
      name: "Omanyte",
      types: ["Rock","Water"],
      hp: 35,
      atk: 40,
      def: 100,
      s_atk: 90,
      s_def: 55,
      spd: 35,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 139,
      name: "Omastar",
      types: ["Rock","Water"],
      hp: 70,
      atk: 60,
      def: 125,
      s_atk: 115,
      s_def: 70,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 138
    },
    {
      id: 140,
      name: "Kabuto",
      types: ["Rock","Water"],
      hp: 30,
      atk: 80,
      def: 90,
      s_atk: 55,
      s_def: 45,
      spd: 55,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 141,
      name: "Kabutops",
      types: ["Rock","Water"],
      hp: 60,
      atk: 115,
      def: 105,
      s_atk: 65,
      s_def: 70,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 140
    },
    {
      id: 142,
      name: "Aerodactyl",
      types: ["Rock","Flying"],
      hp: 80,
      atk: 105,
      def: 65,
      s_atk: 60,
      s_def: 75,
      spd: 130,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 143,
      name: "Snorlax",
      types: ["Normal"],
      hp: 160,
      atk: 110,
      def: 65,
      s_atk: 65,
      s_def: 110,
      spd: 30,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 144,
      name: "Articuno",
      types: ["Ice","Flying"],
      hp: 90,
      atk: 85,
      def: 100,
      s_atk: 95,
      s_def: 125,
      spd: 85,
      gen: 1,
      legendary: true,
      evolves_from_id: 0
    },
    {
      id: 145,
      name: "Zapdos",
      types: ["Electric","Flying"],
      hp: 90,
      atk: 90,
      def: 85,
      s_atk: 125,
      s_def: 90,
      spd: 100,
      gen: 1,
      legendary: true,
      evolves_from_id: 0
    },
    {
      id: 146,
      name: "Moltres",
      types: ["Fire","Flying"],
      hp: 90,
      atk: 100,
      def: 90,
      s_atk: 125,
      s_def: 85,
      spd: 90,
      gen: 1,
      legendary: true,
      evolves_from_id: 0
    },
    {
      id: 147,
      name: "Dratini",
      types: ["Dragon"],
      hp: 41,
      atk: 64,
      def: 45,
      s_atk: 50,
      s_def: 50,
      spd: 50,
      gen: 1,
      legendary: false,
      evolves_from_id: 0
    },
    {
      id: 148,
      name: "Dragonair",
      types: ["Dragon"],
      hp: 61,
      atk: 84,
      def: 65,
      s_atk: 70,
      s_def: 70,
      spd: 70,
      gen: 1,
      legendary: false,
      evolves_from_id: 147
    },
    {
      id: 149,
      name: "Dragonite",
      types: ["Dragon","Flying"],
      hp: 91,
      atk: 134,
      def: 95,
      s_atk: 100,
      s_def: 100,
      spd: 80,
      gen: 1,
      legendary: false,
      evolves_from_id: 148
    },
    {
      id: 150,
      name: "Mewtwo",
      types: ["Psychic"],
      hp: 106,
      atk: 110,
      def: 90,
      s_atk: 154,
      s_def: 90,
      spd: 130,
      gen: 1,
      legendary: true,
      evolves_from_id: 0
    },
    {
      id: 151,
      name: "Mew",
      types: ["Psychic"],
      hp: 100,
      atk: 100,
      def: 100,
      s_atk: 100,
      s_def: 100,
      spd: 100,
      gen: 1,
      legendary: true,
      evolves_from_id: 0
    }
  ]

  export { pokemons };