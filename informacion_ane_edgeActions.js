/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio}", "mouseover", function(sym, e) {
         sym.$("Btn_Inicio").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio}", "mouseout", function(sym, e) {
         sym.$("Btn_Inicio").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Introduccion}", "mouseover", function(sym, e) {
         sym.$("Btn_Introduccion").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Introduccion}", "mouseout", function(sym, e) {
         sym.$("Btn_Introduccion").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Reglas}", "mouseover", function(sym, e) {
         sym.$("Btn_Reglas").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Reglas}", "mouseout", function(sym, e) {
         sym.$("Btn_Reglas").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Cronograma}", "mouseover", function(sym, e) {
         sym.$("Btn_Cronograma").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Cronograma}", "mouseout", function(sym, e) {
         sym.$("Btn_Cronograma").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Tematica}", "mouseover", function(sym, e) {
         sym.$("Btn_Tematica").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Tematica}", "mouseout", function(sym, e) {
         sym.$("Btn_Tematica").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Creditos}", "mouseover", function(sym, e) {
         sym.$("Btn_Creditos").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Creditos}", "mouseout", function(sym, e) {
         sym.$("Btn_Creditos").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio}", "click", function(sym, e) {
         sym.stop(4000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         sym.$("Servicio_nacional_del_sena").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Atras}", "mouseout", function(sym, e) {
         sym.$("Btn_Atras").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Atras}", "mouseover", function(sym, e) {
         sym.$("Btn_Atras").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Atras}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Adelante}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Adelante}", "mouseover", function(sym, e) {
         sym.$("Btn_Adelante").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Adelante}", "mouseout", function(sym, e) {
         sym.$("Btn_Adelante").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio_2}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio_2}", "mouseover", function(sym, e) {
         sym.$("Btn_Inicio_2").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Inicio_2}", "mouseout", function(sym, e) {
         sym.$("Btn_Inicio_2").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.$("Servicio_nacional_del_sena").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Introduccion}", "click", function(sym, e) {
         sym.stop(5100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         sym.$("Software_1").show();
         sym.$("Link_Java").show();
         sym.$("Link_Reader").show();
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P201}", "mouseover", function(sym, e) {
         sym.$("P201").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P201}", "mouseout", function(sym, e) {
         sym.$("P201").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P203}", "mouseover", function(sym, e) {
         sym.$("P203").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P203}", "mouseout", function(sym, e) {
         sym.$("P203").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P202}", "mouseover", function(sym, e) {
         sym.$("P202").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P202}", "mouseout", function(sym, e) {
         sym.$("P202").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P204}", "mouseover", function(sym, e) {
         sym.$("P204").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P204}", "mouseout", function(sym, e) {
         sym.$("P204").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P205}", "mouseover", function(sym, e) {
         sym.$("P205").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P205}", "mouseout", function(sym, e) {
         sym.$("P205").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P206}", "mouseover", function(sym, e) {
         sym.$("P206").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P206}", "mouseout", function(sym, e) {
         sym.$("P206").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         sym.stop();
         sym.$("Justificacion").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5300, function(sym, e) {
         sym.stop();
         sym.$("Poblacion").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5400, function(sym, e) {
         sym.stop();
         sym.$("Requisitos").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         sym.$("Beneficios").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5600, function(sym, e) {
         sym.stop();
         sym.$("Duracion").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P201}", "click", function(sym, e) {
         if (sym.getPosition() != 5100){sym.stop(5100);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P202}", "click", function(sym, e) {
         if (sym.getPosition() != 5200){sym.stop(5200);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P203}", "click", function(sym, e) {
         if (sym.getPosition() != 5300){sym.stop(5300);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P204}", "click", function(sym, e) {
         if (sym.getPosition() != 5400){sym.stop(5400);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P205}", "click", function(sym, e) {
         if (sym.getPosition() != 5500){sym.stop(5500);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P206}", "click", function(sym, e) {
         if (sym.getPosition() != 5600){sym.stop(5600);}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5100, function(sym, e) {
         sym.stop();
         sym.$("Presentacion").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6010, function(sym, e) {
         sym.stop();
         
         sym.$("Link_Autorware").show();
         sym.$("Link_Shockwave").show();
         sym.$("Link_Flash").show();
         sym.$("Link_Winzip").show();
         sym.$("Software_2").show();
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6020, function(sym, e) {
         sym.stop();
         sym.$("Link_Winrar").show();
         sym.$("Software_3").show();
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6030, function(sym, e) {
         sym.stop();
         sym.$("Software_4").show();
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6100, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_1").show(); 
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Reglas}", "click", function(sym, e) {
         sym.stop(6000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P301}", "mouseover", function(sym, e) {
         sym.$("P301").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P301}", "mouseout", function(sym, e) {
         sym.$("P301").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P302}", "mouseover", function(sym, e) {
         sym.$("P302").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P302}", "mouseout", function(sym, e) {
         sym.$("P302").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P303}", "mouseover", function(sym, e) {
         sym.$("P303").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P303}", "mouseout", function(sym, e) {
         sym.$("P303").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P304}", "mouseover", function(sym, e) {
         sym.$("P304").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P304}", "mouseout", function(sym, e) {
         sym.$("P304").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P305}", "mouseover", function(sym, e) {
         sym.$("P305").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P305}", "mouseout", function(sym, e) {
         sym.$("P305").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P301}", "click", function(sym, e) {
         if (sym.getPosition() != 6000){sym.stop(6000);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P302}", "click", function(sym, e) {
         if (sym.getPosition() != 6100){sym.stop(6100);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P303}", "click", function(sym, e) {
         if (sym.getPosition() != 6200){sym.stop(6200);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P304}", "click", function(sym, e) {
         if (sym.getPosition() != 6300){sym.stop(6300);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P305}", "click", function(sym, e) {
         if (sym.getPosition() != 6400){sym.stop(6400);}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6110, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_2").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6120, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_3").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6130, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_4").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6140, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_5").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6150, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_6").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6160, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_7").show(); 
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6170, function(sym, e) {
         sym.stop(); 
         sym.$("Convivencia_8").show(); 
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6200, function(sym, e) {
         sym.stop();  
         sym.$("Etiqueta_1").show();
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6210, function(sym, e) {
         sym.stop();  
         sym.$("Etiqueta_2").show();
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6220, function(sym, e) {
         sym.stop();  
         sym.$("Etiqueta_3").show();
         sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6230, function(sym, e) {
         sym.stop();  
         sym.$("Etiqueta_4").show();
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6300, function(sym, e) {
         sym.stop();  
         sym.$("Foro_1").show();
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6310, function(sym, e) {
         sym.stop();  
         sym.$("Foro_2").show();
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6400, function(sym, e) {
         sym.stop();
         sym.$("Link_Certificado").show();
         sym.$("Certificado").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P401}", "mouseover", function(sym, e) {
         sym.$("P401").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P401}", "mouseout", function(sym, e) {
         sym.$("P401").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P402}", "mouseover", function(sym, e) {
         sym.$("P402").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P402}", "mouseout", function(sym, e) {
         sym.$("P402").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P403}", "mouseover", function(sym, e) {
         sym.$("P403").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P403}", "mouseout", function(sym, e) {
         sym.$("P403").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P404}", "mouseover", function(sym, e) {
         sym.$("P404").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P404}", "mouseout", function(sym, e) {
         sym.$("P404").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P405}", "mouseover", function(sym, e) {
         sym.$("P405").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P405}", "mouseout", function(sym, e) {
         sym.$("P405").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P406}", "mouseover", function(sym, e) {
         sym.$("P406").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P406}", "mouseout", function(sym, e) {
         sym.$("P406").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Cronograma}", "click", function(sym, e) {
         sym.stop(7000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop(); 
         sym.$("Actividades_iniciales").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7100, function(sym, e) {
         sym.stop();   
         sym.$("AA1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7200, function(sym, e) {
         sym.stop();   
         sym.$("AA2").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7300, function(sym, e) {
         sym.stop();   
         sym.$("AA3").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7400, function(sym, e) {
         sym.stop();   
         sym.$("AA4").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();
         sym.$("Revision").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P401}", "click", function(sym, e) {
         if (sym.getPosition() != 7000){sym.stop(7000);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P402}", "click", function(sym, e) {
         if (sym.getPosition() != 7100){sym.stop(7100);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P403}", "click", function(sym, e) {
         if (sym.getPosition() != 7200){sym.stop(7200);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P404}", "click", function(sym, e) {
         if (sym.getPosition() != 7300){sym.stop(7300);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P405}", "click", function(sym, e) {
         if (sym.getPosition() != 7400){sym.stop(7400);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P406}", "click", function(sym, e) {
         if (sym.getPosition() != 7500){sym.stop(7500);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Tematica}", "click", function(sym, e) {
         sym.stop(8000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_Creditos}", "click", function(sym, e) {
         sym.stop(9000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P501}", "mouseover", function(sym, e) {
         sym.$("P501").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P501}", "mouseout", function(sym, e) {
         sym.$("P501").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P502}", "mouseover", function(sym, e) {
         sym.$("P502").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P502}", "mouseout", function(sym, e) {
         sym.$("P502").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P503}", "mouseover", function(sym, e) {
         sym.$("P503").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P503}", "mouseout", function(sym, e) {
         sym.$("P503").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         sym.$("Contenido").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P501}", "click", function(sym, e) {
         if (sym.getPosition() != 8000){sym.stop(8000);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P502}", "click", function(sym, e) {
         if (sym.getPosition() != 8100){sym.stop(8100);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P503}", "click", function(sym, e) {
         if (sym.getPosition() != 8200){sym.stop(8200);}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8100, function(sym, e) {
         sym.$("Cuadro").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P504}", "click", function(sym, e) {
         if (sym.getPosition() != 8300){sym.stop(8300);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P504}", "mouseover", function(sym, e) {
         sym.$("P504").css("transform", "scale(1.1)");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_P504}", "mouseout", function(sym, e) {
         sym.$("P504").css("transform", "scale(1.0)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8200, function(sym, e) {
         sym.stop();
         sym.$("Metodologia_1").show();
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8300, function(sym, e) {
         sym.stop();
         sym.$("Tematica_1").show(); 
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8210, function(sym, e) {
         sym.stop();
         sym.$("Metodologia_2").show();
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8310, function(sym, e) {
         sym.stop();
         sym.$("Tematica_2").show(); 
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         sym.$("Expertos").show();
         sym.$("Btn_Adelante").show();
         //sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9100, function(sym, e) {
         sym.stop();
         sym.$("Linea_de_produccion").show();
         //sym.$("Btn_Adelante").show();
         sym.$("Btn_Atras").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Reader}", "click", function(sym, e) {
         window.open("http://get.adobe.com/es/reader/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Java}", "click", function(sym, e) {
         window.open("https://www.java.com/es/download/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Flash}", "click", function(sym, e) {
         window.open("http://get.adobe.com/es/flashplayer/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Shockwave}", "click", function(sym, e) {
         window.open("http://get.adobe.com/es/shockwave/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Autorware}", "click", function(sym, e) {
         window.open("https://www.adobe.com/la/shockwave/download/alternates/#ap", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Winzip}", "click", function(sym, e) {
         window.open("http://www.winzip.com/win/es/downwz.htm", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Winrar}", "click", function(sym, e) {
         window.open("https://www.winrar.es/descargas", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link_Certificado}", "click", function(sym, e) {
         window.open("http://certificados.sena.edu.co/", "_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-13706892");