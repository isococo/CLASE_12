new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000 },
                    { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000 },
                    { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                    { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});

const formatoNumero = new Intl.NumberFormat("es-CL");

new Chart(document.getElementById("arancelvacantes"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Universidades",
                data: [
                    {
                        "x": 45,
                        "y": 4814000,
                        "programa": "Diseño De Experiencias Inmersivas Y Videojuegos",
                        "institucion": "Universidad Gabriela Mistral",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 30,
                        "y": 4814000,
                        "programa": "Diseño De Videojuegos",
                        "institucion": "Universidad Gabriela Mistral",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 60,
                        "y": 4814000,
                        "programa": "Diseño En Animacion Digital",
                        "institucion": "Universidad Gabriela Mistral",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 20,
                        "y": 4814000,
                        "programa": "Diseño En Interaccion Digital",
                        "institucion": "Universidad Gabriela Mistral",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 20,
                        "y": 4814000,
                        "programa": "Diseño En Marketing Digital",
                        "institucion": "Universidad Gabriela Mistral",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 55,
                        "y": 5900000,
                        "programa": "Ingenieria En Realidad Virtual Y Diseño De Juegos Digitales",
                        "institucion": "Universidad Bernardo O'Higgins",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 50,
                        "y": 4580000,
                        "programa": "Comunicacion Digital Especialidad Diseño Y Desarrollo De Videojuegos",
                        "institucion": "Universidad De Artes, Ciencias Y Comunicacion - Uniacc",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 50,
                        "y": 4210000,
                        "programa": "Diseño De Imagen Especialidad Moda",
                        "institucion": "Universidad De Artes, Ciencias Y Comunicacion - Uniacc",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 60,
                        "y": 4030000,
                        "programa": "Diseño De Interiores Y Ambientes",
                        "institucion": "Universidad De Artes, Ciencias Y Comunicacion - Uniacc",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 50,
                        "y": 4210000,
                        "programa": "Diseño Grafico Especialidad Multimedia",
                        "institucion": "Universidad De Artes, Ciencias Y Comunicacion - Uniacc",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 80,
                        "y": 7320000,
                        "programa": "Diseño",
                        "institucion": "Universidad Finis Terrae",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 35,
                        "y": 7320000,
                        "programa": "Diseño De Moda Y Management",
                        "institucion": "Universidad Finis Terrae",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 20,
                        "y": 7200000,
                        "programa": "Bachillerato En Artes, Arquitectura Y Diseño",
                        "institucion": "Universidad Finis Terrae",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 35,
                        "y": 5120000,
                        "programa": "Diseño Grafico Mencion Diseño Estrategico",
                        "institucion": "Universidad De Antofagasta",
                        "region": "Antofagasta",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 45,
                        "y": 5887000,
                        "programa": "Diseño",
                        "institucion": "Universidad Austral De Chile",
                        "region": "Los Ríos",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 25,
                        "y": 4305000,
                        "programa": "Diseño",
                        "institucion": "Universidad De Playa Ancha De Ciencias De La Educacion",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 40,
                        "y": 6552000,
                        "programa": "Diseño En Comunicacion Visual",
                        "institucion": "Universidad De Santiago De Chile",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 50,
                        "y": 4989000,
                        "programa": "Diseño Industrial",
                        "institucion": "Universidad De Santiago De Chile",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 51,
                        "y": 4730000,
                        "programa": "Diseño",
                        "institucion": "Universidad De Las Americas",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 60,
                        "y": 5276000,
                        "programa": "Diseño",
                        "institucion": "Universidad Catolica De Temuco",
                        "region": "La Araucanía",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 25,
                        "y": 6000000,
                        "programa": "Ingenieria En Diseño De Productos",
                        "institucion": "Universidad Tecnica Federico Santa Maria",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 20,
                        "y": 6000000,
                        "programa": "Ingenieria En Diseño De Productos",
                        "institucion": "Universidad Tecnica Federico Santa Maria",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 20,
                        "y": 5180000,
                        "programa": "Ingenieria En Fabricacion Y Diseño Industrial",
                        "institucion": "Universidad Tecnica Federico Santa Maria",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 45,
                        "y": 4307000,
                        "programa": "Diseño Grafico",
                        "institucion": "Universidad Del Bio-Bio",
                        "region": "Ñuble",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 55,
                        "y": 4434000,
                        "programa": "Diseño Industrial",
                        "institucion": "Universidad Del Bio-Bio",
                        "region": "Biobío",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 60,
                        "y": 4763300,
                        "programa": "Diseño En Comunicacion Visual",
                        "institucion": "Universidad Tecnologica Metropolitana",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 40,
                        "y": 4891000,
                        "programa": "Diseño Industrial",
                        "institucion": "Universidad Tecnologica Metropolitana",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 45,
                        "y": 10364360,
                        "programa": "Bachillerato En Diseño",
                        "institucion": "Universidad Del Desarrollo",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 240,
                        "y": 9754692,
                        "programa": "Diseño",
                        "institucion": "Universidad Del Desarrollo",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 165,
                        "y": 7597000,
                        "programa": "Diseño",
                        "institucion": "Universidad Diego Portales",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 178,
                        "y": 8080000,
                        "programa": "Diseño",
                        "institucion": "Pontificia Universidad Catolica De Chile",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 75,
                        "y": 5713000,
                        "programa": "Diseño",
                        "institucion": "Universidad De Valparaiso",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 70,
                        "y": 6056038,
                        "programa": "Diseño",
                        "institucion": "Universidad Del Desarrollo",
                        "region": "Biobío",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 65,
                        "y": 6915000,
                        "programa": "Diseño",
                        "institucion": "Pontificia Universidad Catolica De Valparaiso",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 115,
                        "y": 6486700,
                        "programa": "Diseño",
                        "institucion": "Universidad De Chile",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 45,
                        "y": 5887000,
                        "programa": "Diseño",
                        "institucion": "Universidad De Talca",
                        "region": "Maule",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 40,
                        "y": 4071000,
                        "programa": "Diseño",
                        "institucion": "Universidad De La Serena",
                        "region": "Coquimbo",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 30,
                        "y": 4277000,
                        "programa": "Diseño",
                        "institucion": "Universidad De Viña Del Mar",
                        "region": "Valparaíso",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 90,
                        "y": 5069000,
                        "programa": "Diseño De Juegos Digitales",
                        "institucion": "Universidad Andres Bello",
                        "region": "Biobío",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 80,
                        "y": 7136000,
                        "programa": "Diseño De Juegos Digitales",
                        "institucion": "Universidad Andres Bello",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 100,
                        "y": 7148000,
                        "programa": "Diseño De Vestuario Y Textil",
                        "institucion": "Universidad Andres Bello",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 80,
                        "y": 7065000,
                        "programa": "Diseño Grafico",
                        "institucion": "Universidad Andres Bello",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 70,
                        "y": 7214218,
                        "programa": "Diseño Mencion Industrial/Grafico/Ambientes",
                        "institucion": "Universidad Mayor",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 58,
                        "y": 6555000,
                        "programa": "Diseño Multimedia",
                        "institucion": "Universidad De Tarapaca",
                        "region": "Arica y Parinacota",
                        "tipo": "Universidades"
                    },
                    {
                        "x": 25,
                        "y": 5492400,
                        "programa": "Diseño Teatral",
                        "institucion": "Universidad De Chile",
                        "region": "Metropolitana",
                        "tipo": "Universidades"
                    }
                ],
                backgroundColor: "rgba(0, 121, 107, 0.82)",
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: "Institutos Profesionales",
                data: [
                    {
                        "x": 1,
                        "y": 3210000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3210000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3210000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3210000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3200000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3070000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3070000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3070000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 3070000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2900000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2900000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 10,
                        "y": 2750000,
                        "programa": "Tecnico En Diseño De Espacios Y Equipamiento",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2740000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2730000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2710000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2710000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2710000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2700000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2700000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 2680000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2680000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2680000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2680000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2670000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 10,
                        "y": 2670000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2660000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2660000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "La Araucanía",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2630000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2620000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2620000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "La Araucanía",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2620000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2620000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2600000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2600000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2580000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2580000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2580000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2570000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2570000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2570000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 10,
                        "y": 2570000,
                        "programa": "Tecnico En Diseño De Espacios Y Equipamiento",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2550000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2550000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2550000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2550000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2540000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2540000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2530000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2520000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2520000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2520000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2510000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2510000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2510000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2500000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2420000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2420000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2330000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2330000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2320000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2320000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2270000,
                        "programa": "Diseño De Vestuario Mencion Alta Costura",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 1,
                        "y": 2270000,
                        "programa": "Tecnico En Diseño De Vestuario",
                        "institucion": "Ip Aiep",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 25,
                        "y": 1825000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip De Chile",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 1820000,
                        "programa": "Tecnico En Diseño Y Contenido Para Plataformas Digitales",
                        "institucion": "Ip De Chile",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3610000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 150,
                        "y": 3510000,
                        "programa": "Diseño De Vestuario",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 90,
                        "y": 3440000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3440000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 120,
                        "y": 3440000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3440000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 90,
                        "y": 3340000,
                        "programa": "Diseño De Ambientes",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 90,
                        "y": 3340000,
                        "programa": "Diseño De Ambientes",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3320000,
                        "programa": "Diseño Industrial E Innovacion En Productos",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3320000,
                        "programa": "Diseño Industrial E Innovacion En Productos",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 46,
                        "y": 3320000,
                        "programa": "Diseño Industrial E Innovacion En Productos",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 90,
                        "y": 3290000,
                        "programa": "Diseño De Ambientes",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 85,
                        "y": 3110000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 120,
                        "y": 3110000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Duoc Uc",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 120,
                        "y": 3110000,
                        "programa": "Diseño De Vestuario",
                        "institucion": "Ip Duoc Uc",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 90,
                        "y": 3100000,
                        "programa": "Diseño De Ambientes",
                        "institucion": "Ip Duoc Uc",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 30,
                        "y": 3090000,
                        "programa": "Diseño Industrial E Innovacion En Productos",
                        "institucion": "Ip Duoc Uc",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 30,
                        "y": 3070000,
                        "programa": "Diseño Industrial E Innovacion En Productos",
                        "institucion": "Ip Duoc Uc",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 45,
                        "y": 2900000,
                        "programa": "Desarrollo Y Diseño Web",
                        "institucion": "Ip Duoc Uc",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 57,
                        "y": 3579000,
                        "programa": "Diseño De Moda Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 24,
                        "y": 3579000,
                        "programa": "Diseño De Moda Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 23,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 18,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Ñuble",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 24,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Arica y Parinacota",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Tarapacá",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 45,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "La Araucanía",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 12,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 21,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 24,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Maule",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 22,
                        "y": 3288000,
                        "programa": "Diseño Digital Profesional",
                        "institucion": "Ip Inacap",
                        "region": "Los Ríos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 26,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Magallanes",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Magallanes",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 23,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 29,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Arica y Parinacota",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 32,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Tarapacá",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Tarapacá",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 47,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Lib. Gral. B. O'Higgins",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 19,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Valparaíso",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 30,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 22,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Aysén",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 44,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Ñuble",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 30,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "La Araucanía",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 10,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 29,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 47,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Maule",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 26,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 15,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 20,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 16,
                        "y": 2921000,
                        "programa": "Diseño Digital Y Web",
                        "institucion": "Ip Inacap",
                        "region": "Los Ríos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 80,
                        "y": 2154000,
                        "programa": "Diseño Grafico Digital",
                        "institucion": "Ip Latinoamericano De Comercio Exterior - Iplacex",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 646,
                        "y": 2712120,
                        "programa": "Diseño Grafico Digital",
                        "institucion": "Ip Providencia",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 633,
                        "y": 2712120,
                        "programa": "Tecnico De Nivel Superior En Diseño Grafico Digital",
                        "institucion": "Ip Providencia",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 60,
                        "y": 3149000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Coquimbo",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 80,
                        "y": 3075000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Metropolitana",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 3074000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Los Ríos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 3054000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Antofagasta",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 30,
                        "y": 3052000,
                        "programa": "Tecnico En Diseño De Videojuegos",
                        "institucion": "Ip Santo Tomas",
                        "region": "Los Ríos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 35,
                        "y": 2994000,
                        "programa": "Tecnico En Diseño De Videojuegos",
                        "institucion": "Ip Santo Tomas",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 50,
                        "y": 2944000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Maule",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 35,
                        "y": 2795000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Atacama",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 2754000,
                        "programa": "Tecnico En Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "La Araucanía",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 2712000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Los Lagos",
                        "tipo": "Institutos Profesionales"
                    },
                    {
                        "x": 40,
                        "y": 2660000,
                        "programa": "Diseño Grafico",
                        "institucion": "Ip Santo Tomas",
                        "region": "Biobío",
                        "tipo": "Institutos Profesionales"
                    }
                ],
                backgroundColor: "rgba(123, 31, 162, 0.82)",
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: "Centros de Formación Técnica",
                data: [
                    {
                        "x": 20,
                        "y": 2226604,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Animacion Digital",
                        "institucion": "Cft De La Region De Coquimbo",
                        "region": "Coquimbo",
                        "tipo": "Centros de Formación Técnica"
                    },
                    {
                        "x": 30,
                        "y": 2226604,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Animacion Digital",
                        "institucion": "Cft De La Region De Coquimbo",
                        "region": "Coquimbo",
                        "tipo": "Centros de Formación Técnica"
                    },
                    {
                        "x": 30,
                        "y": 2239384,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Marketing Digital",
                        "institucion": "Cft De La Region Metropolitana De Santiago",
                        "region": "Metropolitana",
                        "tipo": "Centros de Formación Técnica"
                    },
                    {
                        "x": 30,
                        "y": 2239384,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Marketing Digital",
                        "institucion": "Cft De La Region Metropolitana De Santiago",
                        "region": "Metropolitana",
                        "tipo": "Centros de Formación Técnica"
                    },
                    {
                        "x": 30,
                        "y": 2239384,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Marketing Digital",
                        "institucion": "Cft De La Region Metropolitana De Santiago",
                        "region": "Metropolitana",
                        "tipo": "Centros de Formación Técnica"
                    },
                    {
                        "x": 30,
                        "y": 2239384,
                        "programa": "Tecnico De Nivel Superior En Diseño Y Marketing Digital",
                        "institucion": "Cft De La Region Metropolitana De Santiago",
                        "region": "Metropolitana",
                        "tipo": "Centros de Formación Técnica"
                    }
                ],
                backgroundColor: "rgba(245, 124, 0, 0.70)",
                pointRadius: 4,
                pointHoverRadius: 6
            },
        ],
    },
    options: {
        responsive:true,
        maintainAspectRatio: true,
        scales: {
            x: { beginAtZero: true, title: { display: true, text: "Vacantes totales", font: { family: "'Georama', sans-serif", size: 11 }, color: "#666" }, grid: { color: "rgba(0,0,0,0.06)" }, border: { color: "#ccc" }, ticks: { font: { family: "'Georama', sans-serif", size: 11 }, color: "#999", callback: value => formatoNumero.format(value) } },
            y: { title: { display: true, text: "Arancel anual 2026", font: { family: "'Georama', sans-serif", size: 11 }, color: "#666" }, grid: { color: "rgba(0,0,0,0.06)" }, border: { color: "#bbb", dash: [4, 4] }, ticks: { font: { family: "'Georama', sans-serif", size: 11 }, color: "#999", callback: value => "$ " + formatoNumero.format(value) } },
        },
      plugins: {
    legend: { display: false },
    tooltip: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        titleColor: "#111",
        bodyColor: "#555",
        titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
        bodyFont: { family: "'Georama', sans-serif", size: 11 },
        padding: 10,
        callbacks: {
            title: function(items) {
                return items[0].raw.programa;
            },
            label: function(context) {
                const point = context.raw;
                return [
                    "Institución: " + point.institucion,
                    "Arancel: $ " + point.y.toLocaleString("es-CL"),
                    "Vacantes: " + point.x.toLocaleString("es-CL"),
                ];
            },
        },
    },
}, 
    },
});