/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Fondo',
                type: 'image',
                rect: ['0px', '0px','1024px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
            },
            {
                id: 'imagen',
                display: 'block',
                type: 'image',
                rect: ['60px', '114px','905px','527px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imagen.png",'0px','0px']
            },
            {
                id: 'Barrita',
                type: 'image',
                rect: ['0', '575px','1024px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Barrita.png",'0px','0px']
            },
            {
                id: 'Titulo',
                type: 'image',
                rect: ['0', '0','1024px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Titulo.png",'0px','0px']
            },
            {
                id: 'Info_del_programa',
                display: 'block',
                type: 'image',
                rect: ['261px', '130px','502px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info%20del%20programa.png",'0px','0px']
            },
            {
                id: 'Btn_Creditos',
                display: 'block',
                type: 'image',
                rect: ['496px', '322px','119px','82px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Creditos.png",'0px','0px']
            },
            {
                id: 'Btn_Tematica',
                display: 'block',
                type: 'image',
                rect: ['346px', '321px','127px','84px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Tematica.png",'0px','0px']
            },
            {
                id: 'Btn_Cronograma',
                display: 'block',
                type: 'image',
                rect: ['666px', '195px','175px','114px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Cronograma.png",'0px','0px']
            },
            {
                id: 'Btn_Reglas',
                display: 'block',
                type: 'image',
                rect: ['517px', '192px','96px','118px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Reglas.png",'0px','0px']
            },
            {
                id: 'Btn_Introduccion',
                display: 'block',
                type: 'image',
                rect: ['286px', '188px','172px','115px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Introduccion.png",'0px','0px']
            },
            {
                id: 'Btn_Inicio',
                display: 'block',
                type: 'image',
                rect: ['162px', '190px','76px','113px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Inicio.png",'0px','0px']
            },
            {
                id: 'Btn_Inicio_2',
                display: 'none',
                type: 'image',
                rect: ['892px', '139px','51px','76px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Inicio2.png",'0px','0px']
            },
            {
                id: 'Fondo_del_texto',
                display: 'none',
                type: 'image',
                rect: ['80px', '229px','863px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fondo%20del%20texto.png",'0px','0px']
            },
            {
                id: 'Requisitos',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Requisitos.png",'0px','0px']
            },
            {
                id: 'Presentacion',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Presentacion.png",'0px','0px']
            },
            {
                id: 'Poblacion',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Poblacion.png",'0px','0px']
            },
            {
                id: 'Justificacion',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','307px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Justificacion.png",'0px','0px']
            },
            {
                id: 'Duracion',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Duracion.png",'0px','0px']
            },
            {
                id: 'Beneficios',
                display: 'none',
                type: 'image',
                rect: ['103px', '250px','828px','307px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Beneficios.png",'0px','0px']
            },
            {
                id: 'Servicio_nacional_del_sena',
                display: 'none',
                type: 'image',
                rect: ['98px', '252px','828px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Servicio%20nacional%20del%20sena.png",'0px','0px']
            },
            {
                id: 'Software_4',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Software%204.png",'0px','0px']
            },
            {
                id: 'Software_3',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Software%203.png",'0px','0px']
            },
            {
                id: 'Software_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','851px','313px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Software%202.png",'0px','0px']
            },
            {
                id: 'Software_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','848px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Software%201.png",'0px','0px']
            },
            {
                id: 'Link_Reader',
                display: 'none',
                type: 'rect',
                rect: ['98px', '320px','824px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Flash',
                display: 'none',
                type: 'rect',
                rect: ['98px', '320px','824px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Shockwave',
                display: 'none',
                type: 'rect',
                rect: ['98px', '320px','824px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Autorware',
                display: 'none',
                type: 'rect',
                rect: ['98px', '320px','824px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Winzip',
                display: 'none',
                type: 'rect',
                rect: ['98px', '320px','824px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Java',
                display: 'none',
                type: 'rect',
                rect: ['98px', '400px','826px','63px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Link_Winrar',
                display: 'none',
                type: 'rect',
                rect: ['98px', '400px','826px','63px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Foro_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','347px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Foro%202.png",'0px','0px']
            },
            {
                id: 'Foro_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Foro%201.png",'0px','0px']
            },
            {
                id: 'Etiqueta_4',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','821px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Etiqueta%204.png",'0px','0px']
            },
            {
                id: 'Etiqueta_3',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Etiqueta%203.png",'0px','0px']
            },
            {
                id: 'Etiqueta_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Etiqueta%202.png",'0px','0px']
            },
            {
                id: 'Etiqueta_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Etiqueta%201.png",'0px','0px']
            },
            {
                id: 'Convivencia_8',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','347px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%208.png",'0px','0px']
            },
            {
                id: 'Convivencia_7',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','831px','347px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%207.png",'0px','0px']
            },
            {
                id: 'Convivencia_6',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%206.png",'0px','0px']
            },
            {
                id: 'Convivencia_5',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%205.png",'0px','0px']
            },
            {
                id: 'Convivencia_4',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%204.png",'0px','0px']
            },
            {
                id: 'Convivencia_3',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%203.png",'0px','0px']
            },
            {
                id: 'Convivencia_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%202.png",'0px','0px']
            },
            {
                id: 'Convivencia_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','324px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Convivencia%201.png",'0px','0px']
            },
            {
                id: 'Certificado',
                display: 'none',
                type: 'image',
                rect: ['101px', '234px','828px','299px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Certificado.png",'0px','0px']
            },
            {
                id: 'Link_Certificado',
                display: 'none',
                type: 'rect',
                rect: ['98px', '463px','356px','26px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Revision',
                display: 'none',
                type: 'image',
                rect: ['98px', '256px','828px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Revision.png",'0px','0px']
            },
            {
                id: 'AA4',
                display: 'none',
                type: 'image',
                rect: ['117px', '256px','789px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AA4.png",'0px','0px']
            },
            {
                id: 'AA3',
                display: 'none',
                type: 'image',
                rect: ['117px', '256px','789px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AA3.png",'0px','0px']
            },
            {
                id: 'AA2',
                display: 'none',
                type: 'image',
                rect: ['117px', '256px','789px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AA2.png",'0px','0px']
            },
            {
                id: 'AA1',
                display: 'none',
                type: 'image',
                rect: ['117px', '256px','789px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AA1.png",'0px','0px']
            },
            {
                id: 'Actividades_iniciales',
                display: 'none',
                type: 'image',
                rect: ['117px', '256px','790px','164px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Actividades%20iniciales.png",'0px','0px']
            },
            {
                id: 'Tematica_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '233px','828px','345px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tematica%202.png",'0px','0px']
            },
            {
                id: 'Tematica_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '233px','869px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tematica%201.png",'0px','0px']
            },
            {
                id: 'Metodologia_2',
                display: 'none',
                type: 'image',
                rect: ['101px', '233px','828px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Metodologia%202.png",'0px','0px']
            },
            {
                id: 'Metodologia_1',
                display: 'none',
                type: 'image',
                rect: ['101px', '233px','828px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Metodologia%201.png",'0px','0px']
            },
            {
                id: 'Cuadro',
                display: 'none',
                type: 'image',
                rect: ['93px', '258px','838px','269px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Cuadro.png",'0px','0px']
            },
            {
                id: 'Contenido',
                display: 'none',
                type: 'image',
                rect: ['101px', '233px','828px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Contenido.png",'0px','0px']
            },
            {
                id: 'Expertos',
                display: 'none',
                type: 'image',
                rect: ['123px', '235px','821px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Expertos.png",'0px','0px']
            },
            {
                id: 'Linea_de_produccion',
                display: 'none',
                type: 'image',
                rect: ['123px', '235px','751px','369px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Linea%20de%20produccion.png",'0px','0px']
            },
            {
                id: 'P504',
                display: 'none',
                type: 'image',
                rect: ['473px', '180px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P504.png",'0px','0px']
            },
            {
                id: 'P503',
                display: 'none',
                type: 'image',
                rect: ['673px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P503.png",'0px','0px']
            },
            {
                id: 'P502',
                display: 'none',
                type: 'image',
                rect: ['473px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P502.png",'0px','0px']
            },
            {
                id: 'P501',
                display: 'none',
                type: 'image',
                rect: ['273px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P501.png",'0px','0px']
            },
            {
                id: 'P406',
                display: 'none',
                type: 'image',
                rect: ['673px', '180px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P406.png",'0px','0px']
            },
            {
                id: 'P405',
                display: 'none',
                type: 'image',
                rect: ['673px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P405.png",'0px','0px']
            },
            {
                id: 'P404',
                display: 'none',
                type: 'image',
                rect: ['473px', '180px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P404.png",'0px','0px']
            },
            {
                id: 'P403',
                display: 'none',
                type: 'image',
                rect: ['473px', '128px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P403.png",'0px','0px']
            },
            {
                id: 'P402',
                display: 'none',
                type: 'image',
                rect: ['273px', '180px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P402.png",'0px','0px']
            },
            {
                id: 'P401',
                display: 'none',
                type: 'image',
                rect: ['273px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P401.png",'0px','0px']
            },
            {
                id: 'P305',
                display: 'none',
                type: 'image',
                rect: ['673px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P305.png",'0px','0px']
            },
            {
                id: 'P304',
                display: 'none',
                type: 'image',
                rect: ['473px', '181px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P304.png",'0px','0px']
            },
            {
                id: 'P303',
                display: 'none',
                type: 'image',
                rect: ['473px', '128px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P303.png",'0px','0px']
            },
            {
                id: 'P302',
                display: 'none',
                type: 'image',
                rect: ['273px', '181px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P302.png",'0px','0px']
            },
            {
                id: 'P301',
                display: 'none',
                type: 'image',
                rect: ['273px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P301.png",'0px','0px']
            },
            {
                id: 'P206',
                display: 'none',
                type: 'image',
                rect: ['653px', '180px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P206.png",'0px','0px']
            },
            {
                id: 'P205',
                display: 'none',
                type: 'image',
                rect: ['653px', '128px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P205.png",'0px','0px']
            },
            {
                id: 'P204',
                display: 'none',
                type: 'image',
                rect: ['464px', '180px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P204.png",'0px','0px']
            },
            {
                id: 'P203',
                display: 'none',
                type: 'image',
                rect: ['464px', '128px','183px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P203.png",'0px','0px']
            },
            {
                id: 'P202',
                display: 'none',
                type: 'image',
                rect: ['273px', '180px','182px','52px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P202.png",'0px','0px']
            },
            {
                id: 'P201',
                display: 'none',
                type: 'image',
                rect: ['273px', '128px','172px','43px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"P201.png",'0px','0px']
            },
            {
                id: 'Tematica2',
                display: 'none',
                type: 'image',
                rect: ['78px', '100px','193px','126px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tematica2.png",'0px','0px']
            },
            {
                id: 'Cronograma2',
                display: 'none',
                type: 'image',
                rect: ['60px', '96px','205px','133px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Cronograma2.png",'0px','0px']
            },
            {
                id: 'Reglas2',
                display: 'none',
                type: 'image',
                rect: ['80px', '90px','125px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Reglas2.png",'0px','0px']
            },
            {
                id: 'Introduccion2',
                display: 'none',
                type: 'image',
                rect: ['80px', '100px','187px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Introduccion2.png",'0px','0px']
            },
            {
                id: 'Btn_Atras',
                display: 'none',
                type: 'image',
                rect: ['20px', '384px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"flecha.png",'0px','0px']
            },
            {
                id: 'Btn_Adelante',
                display: 'none',
                type: 'image',
                rect: ['958px', '384px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Flecha%20der.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_P401}": [
                ["style", "top", '128px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Software_1}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P504}": [
                ["style", "top", '180px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '473px']
            ],
            "${_P502}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '473px']
            ],
            "${_Expertos}": [
                ["style", "top", '235px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Cronograma}": [
                ["style", "top", '195px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '666px']
            ],
            "${_P204}": [
                ["style", "top", '180px'],
                ["style", "left", '464px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Btn_Creditos}": [
                ["style", "top", '322px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '496px']
            ],
            "${_P303}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Link_Shockwave}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '65px'],
                ["style", "display", 'none'],
                ["style", "top", '343px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '824px']
            ],
            "${_Software_3}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Reglas2}": [
                ["style", "top", '90px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_Link_Flash}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '233px'],
                ["style", "display", 'none'],
                ["style", "height", '89px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '824px']
            ],
            "${_AA4}": [
                ["style", "top", '256px'],
                ["style", "display", 'none'],
                ["style", "height", '196px'],
                ["style", "left", '103px'],
                ["style", "width", '821px']
            ],
            "${_Linea_de_produccion}": [
                ["style", "top", '235px'],
                ["style", "height", '350px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ],
            "${_Convivencia_1}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Software_4}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P206}": [
                ["style", "top", '180px'],
                ["style", "left", '653px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Convivencia_8}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Convivencia_7}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P203}": [
                ["style", "top", '128px'],
                ["style", "left", '464px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Poblacion}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Tematica}": [
                ["style", "top", '321px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '346px']
            ],
            "${_P402}": [
                ["style", "top", '180px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_P404}": [
                ["style", "top", '180px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_P403}": [
                ["style", "top", '128px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Link_Java}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'none'],
                ["style", "height", '63px'],
                ["style", "top", '400px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '826px']
            ],
            "${_Etiqueta_1}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Atras}": [
                ["style", "top", '384px'],
                ["style", "left", '20px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Fondo_del_texto}": [
                ["style", "top", '229px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_Convivencia_3}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Inicio}": [
                ["style", "top", '190px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '162px']
            ],
            "${_AA3}": [
                ["style", "top", '256px'],
                ["style", "display", 'none'],
                ["style", "height", '153px'],
                ["style", "left", '103px'],
                ["style", "width", '821px']
            ],
            "${_Btn_Inicio_2}": [
                ["style", "top", '139px'],
                ["style", "left", '892px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Link_Certificado}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer']
            ],
            "${_P305}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "left", '673px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Link_Winrar}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '233px'],
                ["style", "height", '63px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '826px']
            ],
            "${_Titulo}": [
                ["style", "top", '-127px'],
                ["style", "height", '96px'],
                ["style", "width", '1024px']
            ],
            "${_Etiqueta_4}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Link_Autorware}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '423px'],
                ["style", "display", 'none'],
                ["style", "height", '45px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '824px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '640px'],
                ["style", "width", '1024px']
            ],
            "${_Contenido}": [
                ["style", "top", '233px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Link_Reader}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '59px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '824px']
            ],
            "${_Convivencia_6}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P304}": [
                ["style", "display", 'none'],
                ["style", "top", '180px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AA2}": [
                ["style", "top", '256px'],
                ["style", "display", 'none'],
                ["style", "height", '152px'],
                ["style", "left", '103px'],
                ["style", "width", '821px']
            ],
            "${_Btn_Reglas}": [
                ["style", "top", '192px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '517px']
            ],
            "${_Revision}": [
                ["style", "top", '256px'],
                ["style", "left", '98px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Adelante}": [
                ["style", "top", '384px'],
                ["style", "left", '958px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Barrita}": [
                ["style", "top", '644px']
            ],
            "${_Beneficios}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_AA1}": [
                ["style", "top", '256px'],
                ["style", "display", 'none'],
                ["style", "height", '155px'],
                ["style", "left", '103px'],
                ["style", "width", '821px']
            ],
            "${_Info_del_programa}": [
                ["style", "top", '130px'],
                ["style", "opacity", '0'],
                ["style", "left", '261px'],
                ["style", "display", 'block']
            ],
            "${_Convivencia_5}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Actividades_iniciales}": [
                ["style", "top", '256px'],
                ["style", "display", 'none'],
                ["style", "height", '200px'],
                ["style", "left", '103px'],
                ["style", "width", '821px']
            ],
            "${_Introduccion2}": [
                ["style", "top", '100px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_P202}": [
                ["style", "top", '180px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_P406}": [
                ["style", "top", '180px'],
                ["style", "left", '673px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Link_Winzip}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '64px'],
                ["style", "display", 'none'],
                ["style", "top", '483px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '824px']
            ],
            "${_P501}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '273px']
            ],
            "${_Tematica_1}": [
                ["style", "top", '233px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P302}": [
                ["style", "display", 'none'],
                ["style", "top", '180px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Justificacion}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_Metodologia_2}": [
                ["style", "top", '233px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Presentacion}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_Cronograma2}": [
                ["style", "top", '96px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Foro_2}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Btn_Introduccion}": [
                ["style", "top", '188px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '286px']
            ],
            "${_Requisitos}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_P205}": [
                ["style", "top", '128px'],
                ["style", "left", '653px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Tematica_2}": [
                ["style", "top", '233px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Fondo}": [
                ["style", "height", '640px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_Cuadro}": [
                ["style", "top", '258px'],
                ["style", "left", '93px'],
                ["style", "display", 'none']
            ],
            "${_Convivencia_4}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Certificado}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Duracion}": [
                ["style", "top", '250px'],
                ["style", "left", '103px'],
                ["style", "display", 'none']
            ],
            "${_Etiqueta_3}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Software_2}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P405}": [
                ["style", "top", '128px'],
                ["style", "left", '673px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Metodologia_1}": [
                ["style", "top", '233px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Etiqueta_2}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Tematica2}": [
                ["style", "top", '100px'],
                ["style", "left", '78px'],
                ["style", "display", 'none']
            ],
            "${_Foro_1}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_P503}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '673px']
            ],
            "${_P301}": [
                ["style", "display", 'none'],
                ["style", "top", '128px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Convivencia_2}": [
                ["style", "top", '234px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${_Servicio_nacional_del_sena}": [
                ["style", "top", '252px'],
                ["style", "left", '98px'],
                ["style", "display", 'none']
            ],
            "${_imagen}": [
                ["style", "top", '114px'],
                ["style", "opacity", '0'],
                ["style", "left", '60px'],
                ["style", "display", 'block']
            ],
            "${_P201}": [
                ["style", "top", '128px'],
                ["style", "left", '273px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9100,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_imagen}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid107", tween: [ "style", "${_Convivencia_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Presentacion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Link_Shockwave}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_Linea_de_produccion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Beneficios}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Poblacion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Convivencia_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Info_del_programa}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid169", tween: [ "style", "${_Tematica_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_P405}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_P405}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid143", tween: [ "style", "${_P405}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Contenido}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Btn_Atras}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Certificado}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Etiqueta_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Convivencia_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_imagen}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_imagen}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_P301}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_P301}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid94", tween: [ "style", "${_P301}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Btn_Adelante}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Revision}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Fondo_del_texto}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Fondo_del_texto}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_P401}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_P401}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid139", tween: [ "style", "${_P401}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Link_Winrar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_P501}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_P501}", "display", 'block', { fromValue: 'none'}], position: 7990, duration: 0 },
                { id: "eid160", tween: [ "style", "${_P501}", "display", 'none', { fromValue: 'block'}], position: 8990, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Expertos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Titulo}", "top", '0px', { fromValue: '-127px'}], position: 500, duration: 500 },
                { id: "eid42", tween: [ "style", "${_Btn_Cronograma}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Btn_Cronograma}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_P406}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_P406}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid144", tween: [ "style", "${_P406}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid93", tween: [ "style", "${_P305}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_P305}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid99", tween: [ "style", "${_P305}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid134", tween: [ "style", "${_P404}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_P404}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid141", tween: [ "style", "${_P404}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid147", tween: [ "style", "${_AA1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Actividades_iniciales}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Convivencia_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_Link_Winzip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_P201}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_P201}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_P201}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid91", tween: [ "style", "${_P304}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_P304}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid97", tween: [ "style", "${_P304}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Requisitos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Btn_Creditos}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Btn_Creditos}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Btn_Reglas}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Btn_Reglas}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Servicio_nacional_del_sena}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Btn_Inicio_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Btn_Inicio_2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Etiqueta_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_P204}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_P204}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid72", tween: [ "style", "${_P204}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Btn_Tematica}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Btn_Tematica}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_P203}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_P203}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid69", tween: [ "style", "${_P203}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Software_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Btn_Reglas}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250 },
                { id: "eid40", tween: [ "style", "${_Btn_Introduccion}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Btn_Introduccion}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Barrita}", "top", '575px', { fromValue: '644px'}], position: 0, duration: 500 },
                { id: "eid102", tween: [ "style", "${_Convivencia_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Info_del_programa}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Info_del_programa}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid158", tween: [ "style", "${_P503}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_P503}", "display", 'block', { fromValue: 'none'}], position: 7990, duration: 0 },
                { id: "eid162", tween: [ "style", "${_P503}", "display", 'none', { fromValue: 'block'}], position: 8990, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Link_Flash}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Tematica_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Btn_Cronograma}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 250 },
                { id: "eid117", tween: [ "style", "${_Software_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid223", tween: [ "style", "${_Link_Autorware}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Convivencia_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "style", "${_P403}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_P403}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid142", tween: [ "style", "${_P403}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Btn_Introduccion}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250 },
                { id: "eid92", tween: [ "style", "${_P303}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_P303}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid98", tween: [ "style", "${_P303}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Introduccion2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Introduccion2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Introduccion2}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid213", tween: [ "style", "${_Link_Java}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_P402}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_P402}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid140", tween: [ "style", "${_P402}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid212", tween: [ "style", "${_Link_Reader}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Cuadro}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Linea_de_produccion}", "height", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Foro_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_P206}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_P206}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_P206}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid157", tween: [ "style", "${_P502}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_P502}", "display", 'block', { fromValue: 'none'}], position: 7990, duration: 0 },
                { id: "eid161", tween: [ "style", "${_P502}", "display", 'none', { fromValue: 'block'}], position: 8990, duration: 0 },
                { id: "eid90", tween: [ "style", "${_P302}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_P302}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid96", tween: [ "style", "${_P302}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Foro_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_P205}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_P205}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid70", tween: [ "style", "${_P205}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid171", tween: [ "style", "${_P504}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_P504}", "display", 'block', { fromValue: 'none'}], position: 7990, duration: 0 },
                { id: "eid172", tween: [ "style", "${_P504}", "display", 'none', { fromValue: 'block'}], position: 8990, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Btn_Inicio}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
                { id: "eid159", tween: [ "style", "${_Tematica2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Tematica2}", "display", 'block', { fromValue: 'none'}], position: 7990, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Tematica2}", "display", 'none', { fromValue: 'block'}], position: 8990, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Etiqueta_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Justificacion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Convivencia_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Duracion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_AA2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_Metodologia_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Metodologia_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_Cronograma2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Cronograma2}", "display", 'block', { fromValue: 'none'}], position: 6990, duration: 0 },
                { id: "eid145", tween: [ "style", "${_Cronograma2}", "display", 'none', { fromValue: 'block'}], position: 7990, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Software_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Convivencia_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Reglas2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Reglas2}", "display", 'block', { fromValue: 'none'}], position: 5990, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Reglas2}", "display", 'none', { fromValue: 'block'}], position: 6990, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Etiqueta_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid149", tween: [ "style", "${_AA3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Btn_Creditos}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 250 },
                { id: "eid66", tween: [ "style", "${_P202}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_P202}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_P202}", "display", 'none', { fromValue: 'block'}], position: 5990, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Btn_Tematica}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
                { id: "eid239", tween: [ "style", "${_Link_Certificado}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Btn_Inicio}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Btn_Inicio}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid150", tween: [ "style", "${_AA4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Software_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13706892");
