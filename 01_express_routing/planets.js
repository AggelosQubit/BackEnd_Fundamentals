const planetsNames = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
function isAPlanet(name) {
    return planetsNames.includes(name);
}

module.exports =
{
    isAPlanet,
    planetsData: {
        "Sun": {
            "type": "Star",
            "mass": "1.989 × 10^30 kg",
            "diameter": "1,391,000 km",
            "surface_temperature": "5,500 °C",
            "age": "4.6 billion years"
        },
        "Mercury": {
            "type": "Terrestrial",
            "mass": "3.301 × 10^23 kg",
            "diameter": "4,880 km",
            "gravity": "3.7 m/s²",
            "orbital_period": "88 days",
            "surface_temperature": "-173 to 427 °C",
            "moons": 0
        },
        "Venus": {
            "type": "Terrestrial",
            "mass": "4.867 × 10^24 kg",
            "diameter": "12,104 km",
            "gravity": "8.87 m/s²",
            "orbital_period": "225 days",
            "surface_temperature": "462 °C",
            "moons": 0
        },
        "Earth": {
            "type": "Terrestrial",
            "mass": "5.972 × 10^24 kg",
            "diameter": "12,742 km",
            "gravity": "9.81 m/s²",
            "orbital_period": "365.25 days",
            "surface_temperature": "-88 to 58 °C",
            "moons": 1
        },
        "Mars": {
            "type": "Terrestrial",
            "mass": "6.417 × 10^23 kg",
            "diameter": "6,779 km",
            "gravity": "3.71 m/s²",
            "orbital_period": "687 days",
            "surface_temperature": "-140 to 30 °C",
            "moons": 2
        },
        "Jupiter": {
            "type": "Gas Giant",
            "mass": "1.898 × 10^27 kg",
            "diameter": "139,820 km",
            "gravity": "24.79 m/s²",
            "orbital_period": "11.86 years",
            "surface_temperature": "-145 °C",
            "moons": 95
        },
        "Saturn": {
            "type": "Gas Giant",
            "mass": "5.683 × 10^26 kg",
            "diameter": "116,460 km",
            "gravity": "10.44 m/s²",
            "orbital_period": "29.46 years",
            "surface_temperature": "-178 °C",
            "moons": 146
        },
        "Uranus": {
            "type": "Ice Giant",
            "mass": "8.681 × 10^25 kg",
            "diameter": "50,724 km",
            "gravity": "8.69 m/s²",
            "orbital_period": "84 years",
            "surface_temperature": "-224 °C",
            "moons": 27
        },
        "Neptune": {
            "type": "Ice Giant",
            "mass": "1.024 × 10^26 kg",
            "diameter": "49,244 km",
            "gravity": "11.15 m/s²",
            "orbital_period": "165 years",
            "surface_temperature": "-218 °C",
            "moons": 14
        }
    }
}