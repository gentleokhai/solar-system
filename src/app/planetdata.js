const planetData = [
    {
        name: 'Mercury',
        color: "#717171",
        description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.',
        details: {
            mass: '3.285 × 10^23 kg',
            diameter: '4,880 km',
            distance: '57.91 million km',
            gravity: '3.7 m/s²',
            temperature: '-173 to 427°C',
            year: '88 Earth days',
            day: '58.6 Earth days',
        },
        xRadius: 5.5,
        zRadius: 5.5,
        size: 0.045,
        distance: 0.8,
        speed: 0.284090909,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_mercury.jpg',
        mapScale: 1,
        emissiveColor: "#8a8a8a",
        emissiveIntensity: 0.2,
        textColor: "#717171",
    },
    {
        name: 'Venus',
        color: "white",
        description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.',
        details: {
            mass: '4.867 × 10^24 kg',
            diameter: '12,104 km',
            distance: '108.2 million km',
            gravity: '8.87 m/s²',
            temperature: '462°C',
            year: '225 Earth days',
            day: '116.75 Earth days',
        },
        xRadius: 10,
        zRadius: 10,
        size: 0.035,
        distance: 0.6,
        speed: 0.111111111,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_venus.jpg',
        mapScale: 0.01,
        emissiveColor: "#df9a33",
        emissiveIntensity: 0.2,
        textColor: "#9e3f04",
    },
    {
        name: 'Earth',
        color: "#9e3f04",
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.',
        details: {
            mass: '5.972 × 10^24 kg',
            diameter: '12,742 km',
            distance: '149.6 million km',
            gravity: '9.807 m/s²',
            temperature: '-88 to 58°C',
            year: '365.25 days',
            day: '24 hours',
        },
        xRadius: 15,
        zRadius: 15,
        size: 0.0298,
        distance: 0.8,
        speed: 0.068493151,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_earth.jpg',
        mapScale: 0.01,
        emissiveColor: "",
        emissiveIntensity: 0,
        textColor: "#19356b",
    },
    {
        name: 'Mars',
        color: "#e4a876",
        description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the "Red Planet".',
        details: {
            mass: '6.417 × 10^23 kg',
            diameter: '6,779 km',
            distance: '227.9 million km',
            gravity: '3.721 m/s²',
            temperature: '-87 to -5°C',
            year: '687 Earth days',
            day: '24.6 hours',
        },
        xRadius: 19.5,
        zRadius: 19.5,
        size: 0.045,
        distance: 1,
        speed: 0.034246575,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_mars.jpg',
        mapScale: 0.01,
        emissiveColor: "#e66939",
        emissiveIntensity: 0.2,
        textColor: "#e4a876",
        testImage: '/images/icons/mars.png',
    },
    {
        name: 'Jupiter',
        color: "#856f57",
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
        details: {
            mass: '1.898 × 10^27 kg',
            diameter: '139,820 km',
            distance: '778.5 million km',
            gravity: '24.79 m/s²',
            temperature: '-145°C',
            year: '11.9 Earth years',
            day: '9.9 hours',
        },
        xRadius: 24,
        zRadius: 24,
        size: 0.09,
        distance: 1.2,
        speed: 0.005707763,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_jupiter.jpg',
        mapScale: 0.01,
        emissiveColor: "white",
        emissiveIntensity: 0.01,
        textColor: "#856f57",
    },
    {
        name: 'Saturn',
        color: "#cbae94",
        description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
        details: {
            mass: '5.683 × 10^26 kg',
            diameter: '116,460 km',
            distance: '1.4 billion km',
            gravity: '10.44 m/s²',
            temperature: '-178°C',
            year: '29.5 Earth years',
            day: '10.7 hours',
        },
        xRadius: 30,
        zRadius: 30,
        size: 0.088,
        distance: 1.4,
        speed: 0.002361833,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0,
        mapTexture: '/images/2k_saturn.jpg',
        mapScale: 0.01,
        emissiveColor: "black",
        emissiveIntensity: 1,
        textColor: "#cbae94",
    },
    {
        name: 'Uranus',
        color: "#c6eaed",
        description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
        details: {
            mass: '8.681 × 10^25 kg',
            diameter: '50,724 km',
            distance: '2.9 billion km',
            gravity: '8.69 m/s²',
            temperature: '-224°C',
            year: '84 Earth years',
            day: '17.2 hours',
        },
        xRadius: 35,
        zRadius: 35,
        size: 0.06,
        distance: 1.6,
        speed: 0.000815395,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_uranus.jpg',
        mapScale: 0.01,
        emissiveColor: "darkblue",
        emissiveIntensity: 1,
        textColor: "#c6eaed",
    },
    {
        name: 'Neptune',
        color: "wh#3889f3ite",
        description: 'Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
        details: {
            mass: '1.024 × 10^26 kg',
            diameter: '49,244 km',
            distance: '4.5 billion km',
            gravity: '11.15 m/s²',
            temperature: '-214°C',
            year: '165 Earth years',
            day: '16.1 hours',
        },
        xRadius: 40,
        zRadius: 40,
        size: 0.06,
        distance: 1.8,
        speed: 0.00041511,
        displacementTexture: '/images/2k_sun_displacement.png',
        displacementScale: 0.01,
        mapTexture: '/images/2k_neptune.jpg',
        mapScale: 0.01,
        emissiveColor: "white",
        emissiveIntensity: 0,
        textColor: "#3889f3",
    },
];

export default planetData;
