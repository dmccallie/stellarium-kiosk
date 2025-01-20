// js test

// data for constellation-driven tour
var constellation_tour = [
	{   obsDt: "2024-02-15:20:00:00", 
        display: "Winter", 
		constellations: [
            {
			name: "Orion", 
			targets: [
				{ objName: "M42", fov: 3.0, altName: "Orion Nebula" },
				{ objName: "NGC 1977", fov: 2.0, altName: "Running Man" },
				{ objName: "Flame Nebula", fov: 2.0, altName: "" },
				{ objName: "Horsehead Nebula", fov: 2.0, altName: "" }
			    ],
            },
            {
			name: "Tarus",
			targets: [
				{ objName: "M45", fov: 3.0, altName: "Pleiades" },
				{ objName: "M1", fov: 2.0, altName: "Crab Nebula" }
			    ]
            } // constellation 
        ] // constellations
    }, // end tour stop

    {   obsDt: "2024-05-15:20:00:00",
        display: "Spring",
        constellations: [
            {
            name: "Virgo",
            targets: [
                { objName: "M84", fov: 2.0, altName: "Markarian's Chain" },
                { objName: "M87", fov: 2.0, altName: "Virgo Galaxy" },
                { objName: "NGC 4438", fov: 2.0, altName: "The Eyes" },
                { objName: "M90", fov: 2.0, altName: "" },
                { objName: "M99", fov: 2.0, altName: "Virgo Pinwheel" },
                { objName: "M104", fov: 2.0, altName: "Sombrero" }
                ]
            },
            {
            name: "Coma Berenices",
            targets: [
                { objName: "M64", fov: 2.0, altName: "Blackeye" },
                { objName: "M53", fov: 2.0, altName: "" },
                { objName: "M98", fov: 2.0, altName: "" }
                ]
            },
            {
            name: "Canes Venatici",
            targets: [
                { objName: "M51", fov: 2.0, altName: "Whirlpool" },
                { objName: "M63", fov: 2.0, altName: "Sunflower" },
                { objName: "M3", fov: 2.0, altName: "" },
                { objName: "M94", fov: 2.0, altName: "Croc's Eye" },
                { objName: "NGC 4631", fov: 2.0, altName: "Whale" }
                ]
            },
            {
            name: "Ursa Major",
            targets: [
                { objName: "M81", fov: 2.0, altName: "Bode" },
                { objName: "M82", fov: 2.0, altName: "Cigar" },
                { objName: "M97", fov: 2.0, altName: "Owl" },
                { objName: "M101", fov: 2.0, altName: "Pinwheel" }
                ]
            },
            {
            name: "Leo",
            targets: [
                { objName: "NGC 3628", fov: 2.0, altName: "Hamburger" },
                { objName: "M66", fov: 2.0, altName: "Leo Triplet" }
                ]
            },
            {
            name: "Cancer",
            targets: [
                { objName: "M44", fov: 2.0, altName: "Beehive Cluster" }
                ]
            },
            {
            name: "Lynx",
            targets: [
                ]
            },
            {
            name: "Gemini",
            targets: [
                ]
            },
            {
            name: "Ursa Minor",
            targets: [
                ]
            }
        ] // constellations

    }, // end tour stop

] // constellation_tour
