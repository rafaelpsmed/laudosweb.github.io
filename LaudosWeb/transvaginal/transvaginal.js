

function volume(){

    // falta fazer 2 medidas e trocar vírgula por ponto
    var texto = document.getElementById("laudo").value;
    var regex = /\d+\.\d+/gi;
    var qtos = 0;
    var match = regex.exec(texto);
    var nums = [];
    while (match !== null){
        ++qtos;
        nums.push(match)
        match = regex.exec(texto);        
    }
    // let num1 = parseFloat(nums[0]);
    // let num2 = parseFloat(nums[1]);
    // let num3 = parseFloat(nums[2]);    
    // let volume = (num1*num2*num3*0.523).toFixed(1);//arredodar para uma casa decimal    
    // console.log(volume.toString());
    // console.log(qtos);

    //loop para poder calcular o volume em qualquer lugar do texto
    for (i=0;i<qtos;i++){
        let num1 = parseFloat(nums[i]);
        let num2 = parseFloat(nums[i+1]);
        let num3 = parseFloat(nums[i+2]);    
        let volume = (num1*num2*num3*0.523).toFixed(1);//arredodar para uma casa decimal    
        // console.log(volume.toString());
        texto = texto.replace(nums[i]+" "+nums[i+1]+" "+nums[i+2]+" ",nums[i]+" x "+nums[i+1]+" x "+nums[i+2]+" cm. Volume: "+volume.toString()+" cm³.")

    }
    
    document.getElementById("laudo").value = texto;

}

function copiar_laudo(){
    //copiar para a área de trabalho  
    document.getElementById("laudo").select();
    document.execCommand("copy");
}

function apagar_laudo(){
   
    document.getElementById("laudo").value = '';
    
}

function criar_miomas(){
    var qtos_miomas = document.getElementById("qtos_miomas").value;
    var container = document.getElementById("miomas_desc");

    while (container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    for (i=0;i<qtos_miomas;i++){
        container.appendChild(document.createTextNode("M"+(i+1)+": "));

        // como criar as labels
        var paredeLabel = document.createElement("label");
        paredeLabel.setAttribute("for","mioma_parede"+(i+1));
        paredeLabel.innerHTML = "Parede:"
        container.appendChild(paredeLabel);
        
        // como criar os selects
        var parede = document.createElement("select");
        parede.options[parede.options.length] = new Option('Anterior');
        parede.options[parede.options.length] = new Option('Posterior');
        parede.options[parede.options.length] = new Option('Lateral esquerda');
        parede.options[parede.options.length] = new Option('Lateral direita');
        parede.id = "mioma_parede"+(i+1);
        
        container.appendChild(parede);

        // como criar as labels
        var tipo = document.createElement("label");
        tipo.setAttribute("for","mioma_tipo"+(i+1));
        tipo.innerHTML = " Tipo: "
        container.appendChild(tipo);

        // como criar os selects
        var tipo_mioma = document.createElement("select");
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Intramural');
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Intramural/Subseroso');
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Submucoso');
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Intramural/Submucoso');
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Subseroso');
        tipo_mioma.options[tipo_mioma.options.length] = new Option('Pediculado');
        tipo_mioma.id = "mioma_tipo"+(i+1);        
        container.appendChild(tipo_mioma);

        // como criar as labels
        var medida_mioma = document.createElement("label");
        medida_mioma.setAttribute("for","mioma_medidas"+(i+1));
        medida_mioma.innerHTML = " Medindo: "
        container.appendChild(medida_mioma);

        // medidas dos miomas
        var medida_mioma = document.createElement("input");
        medida_mioma.type = "text";        
        medida_mioma.id = "mioma_medidas"+(i+1);
        container.appendChild(medida_mioma);

        // var input = document.createElement("input");
        // input.type = "text";
        // input.id = "mioma_"+(i+1);
        // container.appendChild(input);

        container.appendChild(document.createElement("br"));
    }
}

function gerar_laudo_transvaginal(){


    var laudo_tv = `
                              ULTRASSONOGRAFIA TRANSVAGINAL

TÉCNICA: Exame realizado por via transvaginal com transdutor endocavitário.

Indicação clínica: {ind_cli}

RELATÓRIO:

Útero em {ut_posi_texto}, de dimensões normais e contornos regulares. {ecotextura_normal}. {adenomiose}. {miomas}. Medidas uterinas: {ut1} x {ut2} x {ut3} cm, com volume aproximado de {ut_vol} cm³.
{desc_ad_ut}

Endométrio fino e regular, com espessura de {esp_endo} cm. {desc_ad_end}

Ovário direito de dimensões {dim_ovd}, contornos regulares e {cont_ovd}. Medidas do ovário: {ovd1} x {ovd2} x {ovd3} cm, com volume aproximado de {ovd_vol} cm³. {desc_ad_ovd}

Ovário esquerdo de dimensões normais, contornos regulares e homogêneo. Medidas do ovário: {ove1} x {ove2} x {ove3} cm, com volume aproximado de {ove_vol} cm³. {desc_ad_ove}

IMPRESSÃO DIAGNÓSTICA:
{diag}

`


    if(document.getElementById("indicacao").value != null){
        
        laudo_tv = laudo_tv.replace("{ind_cli}",document.getElementById("indicacao").value);
    }else{
        laudo_tv = laudo_tv.replace("Indicação clínica: {ind_cli}","Indicação clínica: Avaliação clínica");
        
    }

    //útero

    var ut_posi = document.getElementById("utero_avf");
    var ut_posi_texto = ut_posi.options[ut_posi.selectedIndex].text;

    var qtos_miomas = parseInt(document.getElementById("qtos_miomas").value);

    var medidas_utero = document.getElementById("medidas_utero").value;
    var regex_medidas_utero = /\d+\.\d+/gi;
    var qtas_medidas_utero = 0;
    var match_regex_medidas_utero = regex_medidas_utero.exec(medidas_utero);
    var nums_medidas_utero = [];
    while (match_regex_medidas_utero !== null){
        ++qtas_medidas_utero;
        nums_medidas_utero.push(match_regex_medidas_utero)
        match_regex_medidas_utero = regex_medidas_utero.exec(medidas_utero);        
    }
    if (qtas_medidas_utero = 3){
        var ut1 = parseFloat(nums_medidas_utero[0]);
        var ut2 = parseFloat(nums_medidas_utero[1]);
        var ut3 = parseFloat(nums_medidas_utero[2]);
        var ut_vol = Math.round(ut1*ut2*ut3*0.523);

    }





    // miomas




    if (document.getElementById("utero_normal").checked){
        laudo_tv = laudo_tv.replace(". {adenomiose}. {miomas}.","");
        laudo_tv = laudo_tv.replace("{ecotextura_normal}"," Ecotextura miometrial homogênea.");

    }
    if (document.getElementById("utero_ausente").checked){
        laudo_tv = laudo_tv.replace("Útero em {ut_posi_texto}, de dimensões normais e contornos regulares. {ecotextura_normal}. {adenomiose}. {miomas}.","Útero ausente. Relato de cirurgia prévia. Ausência de massas ou coleções em sua topografia.");
        laudo_tv = laudo_tv.replace("Medidas uterinas: {ut1} x {ut2} x {ut3} cm, com volume aproximado de {ut_vol} cm³.","");
    }
    if (document.getElementById("adenomiose").checked){
        laudo_tv = laudo_tv.replace(". {ecotextura_normal}","");
        laudo_tv = laudo_tv.replace(". {miomas}.","");
        laudo_tv = laudo_tv.replace(" {adenomiose}"," Presença de imagens císticas em permeio ao tecido miometrial, associadas a espessura miometrial assimétrica (à custa, principalmente de parede posterior) e estrias miometriais hipoecóicas, que causam faixas de sombras acústicas paralelas.");        
    }
    if (document.getElementById("miomas").checked){
        
        laudo_tv = laudo_tv.replace(". {ecotextura_normal}","");
        laudo_tv = laudo_tv.replace(". {adenomiose}.","");

        // mioma único
        if(qtos_miomas == 1){
            
            var mioma_parede = document.getElementById("mioma_parede"+(qtos_miomas));
            var mioma_parede_texto = mioma_parede.options[mioma_parede.selectedIndex].text;
            var mioma_tipo = document.getElementById("mioma_tipo"+(qtos_miomas));
            var mioma_tipo_texto = mioma_tipo.options[mioma_tipo.selectedIndex].text;
            var mioma_medidas_texto = document.getElementById("mioma_medidas"+(qtos_miomas)).value;
            laudo_tv = laudo_tv.replace(" {miomas}",". Ecotextura miometrial heterogênea à custa de nódulo miometrial em parede "+mioma_parede_texto+", "+mioma_tipo_texto+", medindo "+mioma_medidas_texto+" cm");
            laudo_tv = laudo_tv.replace("{diag}","- Nódulo miometrial sugestivo de mioma.\n{diag}");
        }
        // miomas múltiplos
        if(qtos_miomas > 1){
            laudo_tv = laudo_tv.replace(" {miomas}",". Ecotextura miometrial heterogênea à custa de múltiplos nódulos miometriais, os maiores assim descritos:\nproximo_mioma");
            laudo_tv = laudo_tv.replace("{diag}","- Nódulos miometriais sugestivos de miomas.\n{diag}");
            for(i=1;i<=qtos_miomas;i++){
                var mioma_parede = document.getElementById("mioma_parede"+(i));
                var mioma_parede_texto = mioma_parede.options[mioma_parede.selectedIndex].text;
                var mioma_tipo = document.getElementById("mioma_tipo"+(i));
                var mioma_tipo_texto = mioma_tipo.options[mioma_tipo.selectedIndex].text;
                var mioma_medidas_texto = document.getElementById("mioma_medidas"+(i)).value;
                
                laudo_tv = laudo_tv.replace("proximo_mioma","- M"+i+": em parede "+mioma_parede_texto+", "+mioma_tipo_texto+", medindo "+mioma_medidas_texto+" cm;\nproximo_mioma");
                // document.getElementById("laudo").insertAdjacentText('beforeend','teset');
                

            }
            laudo_tv = laudo_tv.replace("proximo_mioma.","");

        }        
       
    }

    if(document.getElementById("desc_add_utero").value == null){
        laudo_tv = laudo_tv.replace("{desc_ad_ut}","");
    }else{
        
        laudo_tv = laudo_tv.replace("{desc_ad_ut}",document.getElementById("desc_add_utero").value);
    }

    //  RESOLVER SE TIVER MIOMAS E ADENOMIOSE MARCADOS AO MESMO TEMPO
    if(document.getElementById("miomas").checked && document.getElementById("adenomiose").checked){
        laudo_tv = laudo_tv.replace(" {ecotextura_normal}. {adenomiose}"," Presença de imagens císticas em permeio ao tecido miometrial, associadas a espessura miometrial assimétrica (à custa, principalmente de parede posterior) e estrias miometriais hipoecóicas, que causam faixas de sombras acústicas paralelas.");        
    }

    //avf e medidas
    laudo_tv = laudo_tv.replace("{ut_posi_texto}",ut_posi_texto);
    laudo_tv = laudo_tv.replace("{ut1}",ut1.toString());
    laudo_tv = laudo_tv.replace("{ut2}",ut2.toString());
    laudo_tv = laudo_tv.replace("{ut3}",ut3.toString());
    laudo_tv = laudo_tv.replace("{ut_vol}",ut_vol.toString());

    // endométrio

    if(document.getElementById("endometrio_normal").checked){
        laudo_tv = laudo_tv.replace("{esp_endo}",document.getElementById("espessura_endometrio").value);  

    }    
    if(document.getElementById("polipo_endometrio").checked){
        laudo_tv = laudo_tv.replace("Endométrio fino e regular,","No interior da cavidade uterina encontra-se imagem hipoecóica, de contornos regulares, medindo "+document.getElementById("dimensoes_polipo_endometrio").value+" cm. Endométrio"); 
        laudo_tv = laudo_tv.replace("{esp_endo}",document.getElementById("espessura_endometrio").value);  
        laudo_tv = laudo_tv.replace("{diag}","- Sinais ecográficos da presença de pólipo endometrial.\n{diag}"); 
        

    }
    if(document.getElementById("desc_add_endometrio").value == null){
        laudo_tv = laudo_tv.replace("{desc_ad_end}","");
    }else{
        
        laudo_tv = laudo_tv.replace("{desc_ad_end}",document.getElementById("desc_add_endometrio").value);
    }

    // ovário direito

    // medidas
    var ovd_med = document.getElementById("medidas_ovd").value.split(" ");
    var ovd1 = parseFloat(ovd_med[0]);
    var ovd2 = parseFloat(ovd_med[1]);
    var ovd3 = parseFloat(ovd_med[2]);


    if(document.getElementById("ovd_normal").checked){
        laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo homogêneo");
    }

    if ( document.getElementById("ovd_ausente").checked || document.getElementById("ovd_nv_ig").checked ){
        delete ovd_med;
    }else{
        if(ovd_med.length == 3 ){

            var ovd_vol = Math.round(ovd1*ovd2*ovd3*0.523)
            laudo_tv = laudo_tv.replace("{ovd1}",ovd1.toString());
            laudo_tv = laudo_tv.replace("{ovd2}",ovd2.toString());
            laudo_tv = laudo_tv.replace("{ovd3}",ovd3.toString());
            laudo_tv = laudo_tv.replace("{ovd_vol}",ovd_vol.toString());
            if(ovd_vol>18){
                laudo_tv = laudo_tv.replace("{dim_ovd}","aumentadas");
    
            }else{
                laudo_tv = laudo_tv.replace("{dim_ovd}","normais");
            }
        }
        if(ovd_med.length == 2){
            laudo_tv = laudo_tv.replace("{ovd1}",ovd1.toString());
            laudo_tv = laudo_tv.replace("{ovd2}",ovd2.toString());
            laudo_tv = laudo_tv.replace(" x {ovd3}","");
            laudo_tv = laudo_tv.replace(", com volume aproximado de {ovd_vol} cm³","");
    
        }

    }

    if(document.getElementById("ovd_ausente").checked){
        laudo_tv = laudo_tv.replace("Ovário direito de dimensões {dim_ovd}, contornos regulares e {cont_ovd}. Medidas do ovário: {ovd1} x {ovd2} x {ovd3} cm, com volume aproximado de {ovd_vol} cm³","Ovário direito ausente, relato de cirurgia prévia. Ausência de massas ou coleções em sua topografia");
    }
    if(document.getElementById("ovd_nv_ig").checked){
        laudo_tv = laudo_tv.replace("Ovário direito de dimensões {dim_ovd}, contornos regulares e {cont_ovd}. Medidas do ovário: {ovd1} x {ovd2} x {ovd3} cm, com volume aproximado de {ovd_vol} cm³","Ovário direito não visualizado devido intensa interposição gasosa intestinal. Ausência de massas ou coleções em sua topografia");
    }
    if(document.getElementById("ovd_cistoFolicular").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário direito de provável natureza folicular, acima descrito.\n{diag}");
        var cf = document.getElementById("dimensoes_ovd_cistoFolicular").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("ovd_cistoHemorragico").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário direito acima descrito que pode corresponder a cisto hemorrágico ou endometrioma. À critério clínico, realizar controle ecográfico ou RM de Pelve.\n{diag}");
        var cf = document.getElementById("dimensoes_ovd_cistoHemorragico").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("ovd_Policisto").checked){
        laudo_tv = laudo_tv.replace("{cont_ovd}","de aspecto micropolicístico");
        laudo_tv = laudo_tv.replace("{diag}","- Ovário direito de aspecto micropolicístico.\n{diag}");
    }
    if(document.getElementById("ovd_Teratoma").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário direito acima descrito, cuja a principal hipótese diagnóstica é de Teratoma Ovariano. À critério clínico, realizar RM de Pelve.\n{diag}");
        var cf = document.getElementById("dimensoes_ovd_Teratoma").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ovd}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("desc_add_ovd").value == null){
        laudo_tv = laudo_tv.replace("{desc_ad_ovd}","");
    }else{
        
        laudo_tv = laudo_tv.replace("{desc_ad_ovd}",document.getElementById("desc_add_ovd").value);
    }

    // ovário esquerdo

    // medidas
    var ove_med = document.getElementById("medidas_ove").value.split(" ");
    var ove1 = parseFloat(ove_med[0]);
    var ove2 = parseFloat(ove_med[1]);
    var ove3 = parseFloat(ove_med[2]);


    if(document.getElementById("ove_normal").checked){
        laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo homogêneo");
    }

    if ( document.getElementById("ove_ausente").checked || document.getElementById("ove_nv_ig").checked ){
        delete ove_med;
    }else{
        if(ove_med.length == 3 ){

            var ove_vol = Math.round(ove1*ove2*ove3*0.523)
            laudo_tv = laudo_tv.replace("{ove1}",ove1.toString());
            laudo_tv = laudo_tv.replace("{ove2}",ove2.toString());
            laudo_tv = laudo_tv.replace("{ove3}",ove3.toString());
            laudo_tv = laudo_tv.replace("{ove_vol}",ove_vol.toString());
            if(ove_vol>18){
                laudo_tv = laudo_tv.replace("{dim_ove}","aumentadas");
    
            }else{
                laudo_tv = laudo_tv.replace("{dim_ove}","normais");
            }
        }
        if(ove_med.length == 2){
            laudo_tv = laudo_tv.replace("{ove1}",ove1.toString());
            laudo_tv = laudo_tv.replace("{ove2}",ove2.toString());
            laudo_tv = laudo_tv.replace(" x {ove3}","");
            laudo_tv = laudo_tv.replace(", com volume aproximado de {ove_vol} cm³","");
    
        }

    }

    if(document.getElementById("ove_ausente").checked){
        laudo_tv = laudo_tv.replace("Ovário esquerdo de dimensões {dim_ove}, contornos regulares e {cont_ove}. Medidas do ovário: {ove1} x {ove2} x {ove3} cm, com volume aproximado de {ove_vol} cm³","Ovário esquerdo ausente, relato de cirurgia prévia. Ausência de massas ou coleções em sua topografia");
    }
    if(document.getElementById("ove_nv_ig").checked){
        laudo_tv = laudo_tv.replace("Ovário esquerdo de dimensões {dim_ove}, contornos regulares e {cont_ove}. Medidas do ovário: {ove1} x {ove2} x {ove3} cm, com volume aproximado de {ove_vol} cm³","Ovário esquerdo não visualizado devido intensa interposição gasosa intestinal. Ausência de massas ou coleções em sua topografia");
    }
    if(document.getElementById("ove_cistoFolicular").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário esquerdo de provável natureza folicular, acima descrito.\n{diag}");
        var cf = document.getElementById("dimensoes_ove_cistoFolicular").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo anecóico, sem septos e de contornos regulares, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("ove_cistoHemorragico").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário esquerdo acima descrito que pode corresponder a cisto hemorrágico ou endometrioma. À critério clínico, realizar controle ecográfico ou RM de Pelve.\n{diag}");
        var cf = document.getElementById("dimensoes_ove_cistoHemorragico").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo hipoecóico, com ecos em suspensão e traves em permeio, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("ove_Policisto").checked){
        laudo_tv = laudo_tv.replace("{cont_ove}","de aspecto micropolicístico");
        laudo_tv = laudo_tv.replace("{diag}","- Ovário esquerdo de aspecto micropolicístico.\n{diag}");
    }
    if(document.getElementById("ove_Teratoma").checked){
        laudo_tv = laudo_tv.replace("{diag}","- Cisto em ovário esquerdo acima descrito, cuja a principal hipótese diagnóstica é de Teratoma Ovariano. À critério clínico, realizar RM de Pelve.\n{diag}");
        var cf = document.getElementById("dimensoes_ove_Teratoma").value.split(" ");
        var cf1 = parseFloat(cf[0]);
        var cf2 = parseFloat(cf[1]);
        var cf3 = parseFloat(cf[2]);
        if(cf.length == 3){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} x {cf2} x {cf3} cm, com volume aproximado de {cfVol} cm³");
            var cf_vol = Math.round(cf1*cf2*cf3*0.523);
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
            laudo_tv = laudo_tv.replace("{cf3}",cf3.toString());
            laudo_tv = laudo_tv.replace("{cfVol}",cf_vol.toString());

        }
        if(cf.length == 2){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} x {cf2} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());
            laudo_tv = laudo_tv.replace("{cf2}",cf2.toString());
        }
        if(cf.length == 1){
            laudo_tv = laudo_tv.replace("{cont_ove}","conteúdo heterogêneo devido à presença de cisto de conteúdo heterogêneo, hipoecóico, com ecos em suspensão, contendo áreas císticas, linhas ecogênicas e focos de calcificação grosseira, medindo {cf1} cm");
            laudo_tv = laudo_tv.replace("{cf1}",cf1.toString());            
        }

        
    }
    if(document.getElementById("desc_add_ove").value == null){
        laudo_tv = laudo_tv.replace("{desc_ad_ove}","");
    }else{
        
        laudo_tv = laudo_tv.replace("{desc_ad_ove}",document.getElementById("desc_add_ove").value);
    }

    // laudo normal
    if(document.getElementById("utero_normal").checked && document.getElementById("endometrio_normal").checked &&  document.getElementById("ovd_normal").checked && document.getElementById("ove_normal").checked ){
        laudo_tv = laudo_tv.replace("{diag}","- Estruturas da cavidade pélvica sem alterações ao método.");
    }  



    laudo_tv = laudo_tv.replace("{diag}","");
    document.getElementById("laudo").value = laudo_tv; 

    copiar_laudo()


}





















