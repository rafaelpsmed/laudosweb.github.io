


function copiar_laudo(){
    //copiar para a área de trabalho  
    document.getElementById("laudo").select();
    document.execCommand("copy");
}

function apagar_laudo(){
   
    document.getElementById("laudo").value = '';
    
}

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

function descricao_nodulos(lado,container,qtos_nod){
    // console.log(lado)
    // var calc_tirads = tirads(lado,qtos_nod)

    // "onchange","tirads("+lado+","+qtos_nod+")");


    
    
    while (container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    for (i=0;i<qtos_nod;i++){
        container.appendChild(document.createTextNode("N"+(i+1)+": "));

        // como criar as labels
        var composicaoLabel = document.createElement("label");
        composicaoLabel.setAttribute("for","nod_"+lado+"_composicao"+(i+1));
        composicaoLabel.innerHTML = "Composição:"
        container.appendChild(composicaoLabel);
        
        // como criar os selects
        var composicao = document.createElement("select");
        // composicao.setAttribute("onchange","tirads('ld',"+qtos_nod+")"); o problema tá aqui tem que arrumar um jeito de passar para a fun~cao tirads 'ld' em vez de ld
        composicao.setAttribute("onchange","tirads("+lad+","+qtos_nod+")");
        composicao.options[composicao.options.length] = new Option('Cístico');
        composicao.options[composicao.options.length] = new Option('Predominantemente cístico');
        composicao.options[composicao.options.length] = new Option('Espongiforme');
        composicao.options[composicao.options.length] = new Option('Sólido-cístico');
        composicao.options[composicao.options.length] = new Option('Predominentemente sólido');
        composicao.options[composicao.options.length] = new Option('Sólido');
        composicao.id = "nod_"+lado+"_composicao"+(i+1);
        
        container.appendChild(composicao);

        // como criar as labels
        var ecogenicidade = document.createElement("label");
        ecogenicidade.setAttribute("for","nod_"+lado+"_ecogenicidade"+(i+1));
        ecogenicidade.innerHTML = " Ecogenicidade: "
        container.appendChild(ecogenicidade);


        // como criar os selects
        var ecogenicidade_nod_lado = document.createElement("select");
        ecogenicidade_nod_lado.setAttribute("onchange","tirads("+lado+","+qtos_nod+")");
        ecogenicidade_nod_lado.options[ecogenicidade_nod_lado.options.length] = new Option('Anecóico');
        ecogenicidade_nod_lado.options[ecogenicidade_nod_lado.options.length] = new Option('Isoecóico');
        ecogenicidade_nod_lado.options[ecogenicidade_nod_lado.options.length] = new Option('Hiperecóico');
        ecogenicidade_nod_lado.options[ecogenicidade_nod_lado.options.length] = new Option('Hipoecóico');
        ecogenicidade_nod_lado.options[ecogenicidade_nod_lado.options.length] = new Option('Acentuada hipoecogenicidade');
        ecogenicidade_nod_lado.id = "nod_"+lado+"_ecogenicidade"+(i+1);        
        container.appendChild(ecogenicidade_nod_lado);

        // como criar as labels
        var forma = document.createElement("label");
        forma.setAttribute("for","nod_"+lado+"_forma"+(i+1));
        forma.innerHTML = " Forma: "
        container.appendChild(forma);

        // como criar os selects
        var forma_nod_lado = document.createElement("select");
        forma_nod_lado.setAttribute("onchange","tirads("+lado+","+qtos_nod+")");
        forma_nod_lado.options[forma_nod_lado.options.length] = new Option('mais largo que alto');
        forma_nod_lado.options[forma_nod_lado.options.length] = new Option('mais alto que largo');
        forma_nod_lado.id = "nod_"+lado+"_forma"+(i+1);        
        container.appendChild(forma_nod_lado);            
        
        // como criar as labels
        var margem = document.createElement("label");
        margem.setAttribute("for","nod_"+lado+"_margem"+(i+1));
        margem.innerHTML = " Margem: "
        container.appendChild(margem);

        // como criar os selects
        var margem_nod_lado = document.createElement("select");
        margem_nod_lado.setAttribute("onchange","tirads("+lado+","+qtos_nod+")");
        margem_nod_lado.options[margem_nod_lado.options.length] = new Option('Regular');
        margem_nod_lado.options[margem_nod_lado.options.length] = new Option('Mal definida');
        margem_nod_lado.options[margem_nod_lado.options.length] = new Option('Irregular');
        margem_nod_lado.options[margem_nod_lado.options.length] = new Option('Lobulada');
        margem_nod_lado.options[margem_nod_lado.options.length] = new Option('Extensão extra-tireoideana');
        margem_nod_lado.id = "nod_"+lado+"_margem"+(i+1);        
        container.appendChild(margem_nod_lado); 
                
        
        // como criar as labels
        var focoEcogenico = document.createElement("label");
        focoEcogenico.setAttribute("for","nod_"+lado+"_focoEcogenico"+(i+1));
        focoEcogenico.innerHTML = " Foco ecogenico: "
        container.appendChild(focoEcogenico);

        // como criar os selects
        var focoEcogenico_nod_lado = document.createElement("select"); 
        focoEcogenico_nod_lado.setAttribute('multiple',true); 
        focoEcogenico_nod_lado.setAttribute("onchange","tirads("+lado+","+qtos_nod+")");       
        focoEcogenico_nod_lado.options[focoEcogenico_nod_lado.options.length] = new Option('Ausente');
        focoEcogenico_nod_lado.options[focoEcogenico_nod_lado.options.length] = new Option('Artefato em cauda de cometa');
        focoEcogenico_nod_lado.options[focoEcogenico_nod_lado.options.length] = new Option('Macrocalcificações');
        focoEcogenico_nod_lado.options[focoEcogenico_nod_lado.options.length] = new Option('Calcificações periféricas');
        focoEcogenico_nod_lado.options[focoEcogenico_nod_lado.options.length] = new Option('Microcalcificações');
        focoEcogenico_nod_lado.id = "nod_"+lado+"_focoEcogenico"+(i+1);        
        container.appendChild(focoEcogenico_nod_lado);  

        // como criar as labels
        var localizacao = document.createElement("label");
        localizacao.setAttribute("for","nod_"+lado+"_localizacao"+(i+1));
        localizacao.innerHTML = " Localização: "
        container.appendChild(localizacao);

        // como criar os selects
        var localizacao_nod_lado = document.createElement("select");        
        localizacao_nod_lado.options[localizacao_nod_lado.options.length] = new Option('terço superior');
        localizacao_nod_lado.options[localizacao_nod_lado.options.length] = new Option('terço médio/superior');
        localizacao_nod_lado.options[localizacao_nod_lado.options.length] = new Option('terço médio');
        localizacao_nod_lado.options[localizacao_nod_lado.options.length] = new Option('terço médio/inferior');
        localizacao_nod_lado.options[localizacao_nod_lado.options.length] = new Option('terço inferior');
        localizacao_nod_lado.id = "nod_"+lado+"_localizacao"+(i+1);        
        container.appendChild(localizacao_nod_lado); 

        // como criar as labels
        var medida = document.createElement("label");
        medida.setAttribute("for","nod_"+lado+"_medida"+(i+1));
        medida.innerHTML = " Medidas: "
        container.appendChild(medida);

        // criar o input medidas
        var medida_nod_lado = document.createElement("input"); 
        medida_nod_lado.id = "medida_nod_"+lado+""+(i+1);  
        container.appendChild(medida_nod_lado); 
        
        // como criar as labels
        var tirads_pont = document.createElement("label");
        tirads_pont.setAttribute("id","tirads_"+lado+""+(i+1));
        tirads_pont.innerHTML = " TI-RADS:"
        container.appendChild(tirads_pont);



        container.appendChild(document.createElement("br"));  
        

}
}

function criar_nodulos_ld(){
    if(document.getElementById("nod_ld").checked){
        var qtos_nod = document.getElementById("qtos_nod_ld").value;
        var container = document.getElementById("nod_ld_desc");
        descricao_nodulos("ld",container,qtos_nod)
        
        }
}

function criar_nodulos_le(){

    if(document.getElementById("nod_le").checked){
        var qtos_nod = document.getElementById("qtos_nod_le").value;
        var container = document.getElementById("nod_le_desc");
        descricao_nodulos("le",container,qtos_nod)
        }
}

function criar_nodulos_ist(){

    if(document.getElementById("nod_ist").checked){
        var qtos_nod = document.getElementById("qtos_nod_ist").value;
        var container = document.getElementById("nod_ist_desc");
        descricao_nodulos("ist",container,qtos_nod)
        }

}


function tirads(lado,qtos_nod){
    // calcular tirads

    // var qtos_nod = document.getElementById("qtos_nod_ld").value;
    console.log(lado)

    for (i=0;i<qtos_nod;i++){
        var tirads = 0;
        var composicao = document.getElementById("nod_"+lado+"_composicao"+(i+1)).options[document.getElementById("nod_"+lado+"_composicao"+(i+1)).selectedIndex].text;        
        var ecogenicidade = document.getElementById("nod_"+lado+"_ecogenicidade"+(i+1)).options[document.getElementById("nod_"+lado+"_ecogenicidade"+(i+1)).selectedIndex].text;
        var forma = document.getElementById("nod_"+lado+"_forma"+(i+1)).options[document.getElementById("nod_"+lado+"_forma"+(i+1)).selectedIndex].text;
        var margem = document.getElementById("nod_"+lado+"_margem"+(i+1)).options[document.getElementById("nod_"+lado+"_margem"+(i+1)).selectedIndex].text;
        const selected = document.querySelectorAll('#nod_'+lado+'_focoEcogenico'+(i+1)+' option:checked');
        const focoEco = Array.from(selected).map(el => el.value);
        const focoEco_Ar = focoEco.length;

        console.log(composicao)
    
        if(composicao == "Cístico"  || composicao == "Predominantemente cístico"  || composicao == "Espongiforme" ){
            tirads = tirads + 0;
        }
        if(composicao == "Sólido-cístico"){
            tirads = tirads + 1;
        }
        if(composicao == "Predominentemente sólido"  || composicao == "Sólido"){
            tirads = tirads + 2;
        }

        if(ecogenicidade == 'Anecóico'){
            tirads = tirads + 0;
        }
        if(ecogenicidade == 'Isoecóico'  || ecogenicidade == 'Hiperecóico'){
            tirads = tirads + 1;
        } 
        if(ecogenicidade == 'Hipoecóico'){
            tirads = tirads + 2;
        }
        if(ecogenicidade == 'Acentuada hipoecogenicidade'){
            tirads = tirads + 3;
        }
        if(forma == 'mais largo que alto'){
            tirads = tirads + 0;
        }
        if(forma == 'mais alto que largo'){
            tirads = tirads + 3;
        }

        if(margem == 'Regular'){
            tirads = tirads + 0;
        }
        if(margem == 'Mal definida'){
            tirads = tirads + 0;
        }
        if(margem == 'Iregular'){
            tirads = tirads + 2;
        }
        if(margem == 'Lobulada'){
            tirads = tirads + 2;
        }
        if(margem == 'Extensão extra-tireoideana'){
            tirads = tirads + 3;
        }

        // esse método includes serve pra vê se em um array existe determinardo valor. retorna true ou false

        if(focoEco.includes('Ausente')){
            tirads = tirads + 0;
        }
        if(focoEco.includes('Artefato em cauda de cometa')){
            tirads = tirads + 0;
        }        
        if(focoEco.includes('Macrocalcificações')){
            tirads = tirads + 1;
        }        
        if(focoEco.includes('Calcificações periféricas')){
            tirads = tirads + 2;
        }        
        if(focoEco.includes('Microcalcificações')){
            tirads = tirads + 3;
        }      
        


        document.getElementById("tirads_"+lado+""+(i+1)).innerHTML = ' TI-RADS: '+tirads.toString();
        console.log(tirads.toString());



}
}





function nodulos_conclusao_plural(){
    var laudo = document.getElementById("laudo").value;
    if(!(laudo.includes("- Nódulos tireoideanos acima descritos."))){
        console.log("não tem")
        laudo = laudo.replace("{diag}","- Nódulos tireoideanos acima descritos.\n{diag}");
    } 
    document.getElementById("laudo").value = laudo; 

}

function criar_laudo(){

    var laudo=`
                        ULTRASSONOGRAFIA DA TIREÓIDE

TÉCNICA: Exame realizado com transdutor linear de alta frequência.

INDICAÇÃO CLÍNICA:

RELATÓRIO:

{tireoide}.{cis_col}
{nod_d}  
{ist_}
{nod_e}

Medidas:
Lodo direito: {ld1} x {ld2} x {ld3} cm. Volume: {ld_vol} cm³.
Lodo esquerdo: {le1} x {le2} x {le3} cm. Volume: {le_vol} cm³.
Istmo: {ist} cm.
Volume total: {vol_tir} cm³.

IMPRESSÃO DIAGNÓSTICA:
{ini_diag}
{diag}
{fim_diag}
    
    
    
    `


    var teste = $('#textura_tireoide').val();
    console.log(teste)
    if(teste == "Tireóide normal" ){
        laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura homogênea");        
        laudo = laudo.replace("{nod_d}","");
        laudo = laudo.replace("{ist}","");
        laudo = laudo.replace("{nod_e}","");
        laudo = laudo.replace("{diag}","- Tireóide de aspecto ecográfico dentro dos limites da normalidade");
        
    }
    if(teste.includes("Tireoideopatia inicial") ){
        laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais e contornos regulares, apresentando diminuição de sua ecogenicidade parenquimatosa");
        laudo = laudo.replace("{diag}","- Sinais ecográficos de tireoidopatia. Correlacionar com dados clínicos e laboratoriais.\n{diag}");
        
    }
    if(teste.includes("Tireoideopatia crônica") ){
        laudo = laudo.replace("{tireoide}","Tireóide de dimensões reduzidas, de contornos irregulares, aspecto micronodular difuso, diminuição de sua ecogenicidade parenquimatosa, com traves ecogênicas em permeio");
        laudo = laudo.replace("{diag}","- Sinais ecográficos de tireoidopatia linfocítica crônica.\n{diag}");
        
    }
    if(teste.includes("Diminutos cistos colóides bilaterais") ){
        laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais com contornos regulares");  
        laudo = laudo.replace("{cis_col}"," Presença de diminutos cistos colóides bilaterais.");
        laudo = laudo.replace("{diag}","- Diminutos cistos colóides bilaterais.\n{diag}");
        
    }
    if(teste.includes("Diminutos cistos colóides lobo direito") ){
        laudo = laudo.replace("{cis_col}"," Presença de diminutos cistos colóides em lobo direito.");
        laudo = laudo.replace("{diag}","- Diminutos cistos colóides no lobo direito.\n{diag}");
        
    }
    if(teste.includes("Diminutos cistos colóides lobo esquerdo") ){
        laudo = laudo.replace("{cis_col}"," Presença de diminutos cistos colóides em lobo esquerdo.");
        laudo = laudo.replace("{diag}","- Diminutos cistos colóides no lobo esquerdo.\n{diag}");
        
    }
    if(teste.includes("Cisto colóide lobo direito") ){
        laudo = laudo.replace("{cis_col}"," Presença de cisto colóide em lobo direito.");
        laudo = laudo.replace("{diag}","- Cisto colóide no lobo direito.\n{diag}");
        
    }
    if(teste.includes("Cisto colóide lobo esquerdo") ){
        laudo = laudo.replace("{cis_col}"," Presença de cisto colóide em lobo esquerdo.");
        laudo = laudo.replace("{diag}","- Cisto colóide no lobo esquerdo.\n{diag}");
        
    }
    
///////////////////////////////////////////////
    // volume da tireóide
    var ld = document.getElementById("medidas_ld").value.split(" ");
    var ld1 = parseFloat(ld[0]);
    var ld2 = parseFloat(ld[1]);
    var ld3 = parseFloat(ld[2]);

    var le = document.getElementById("medidas_le").value.split(" ");
    var le1 = parseFloat(le[0]);
    var le2 = parseFloat(le[1]);
    var le3 = parseFloat(le[2]);

    var ld_vol = Math.round(ld1*ld2*ld3*0.523)
    var le_vol = Math.round(le1*le2*le3*0.523)

    laudo = laudo.replace("{ld1}",ld1.toString());
    laudo = laudo.replace("{ld2}",ld2.toString());
    laudo = laudo.replace("{ld3}",ld3.toString());
    laudo = laudo.replace("{ld_vol}",ld_vol.toString());

    laudo = laudo.replace("{le1}",le1.toString());
    laudo = laudo.replace("{le2}",le2.toString());
    laudo = laudo.replace("{le3}",le3.toString());
    laudo = laudo.replace("{le_vol}",le_vol.toString());

    laudo = laudo.replace("{ist}",document.getElementById("medidas_ist").value);

    var vol_tot = (ld_vol+le_vol)

    laudo = laudo.replace("{vol_tir}",vol_tot.toString());

    if(vol_tot > 16){
        laudo = laudo.replace("Tireóide de dimensões normais","Tireóide de dimensões aumentadas");
            }

////////////////////////////////////////////////////////////



    // if(alt_tir.includes("Tireóide normal")){
    //     laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura homogênea.");
    //     laudo = laudo.replace("{cistos col}","");
    //     laudo = laudo.replace("{nod_d}","");
    //     laudo = laudo.replace("{nod_e}","");
    //     laudo = laudo.replace("{diag}","- Tireóide de aspecto ecográfico dentro dos limites da normalidade");
    //     console.log("ok")
    // }

    
///////////////////////////////////////////////////////
        // descrição dos nódulos à direita
    if( document.getElementById("nod_ld").checked){   

        var nods_ld = document.getElementById("qtos_nod_ld").value;

        if(nods_ld == 1){
            laudo = laudo.replace("{nod_d}",`Presença de nódulo em lobo direito assim descrito:\n- LOBO DIREITO:\n{nods_ld}`);
            laudo = laudo.replace("{diag}","- Nódulo tireoideano acima descrito.\n{diag}"); 
            // nodulos_conclusao_singular();
            laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea."); 

        }
        if(nods_ld > 1){
            laudo = laudo.replace("{nod_d}",`Presença de nódulos em lobo direito assim descritos:\n- LOBO DIREITO:\n{nods_ld}`);
            laudo = laudo.replace("{diag}","- Nódulos tireoideanos acima descritos.\n{diag}");
            // nodulos_conclusao_plural();
            // if(!(laudo.includes("- Nódulos tireoideanos acima descritos."))){
            //     console.log("não tem")
            //     laudo = laudo.replace("{diag}","- Nódulos tireoideanos acima descritos.\n{diag}");
            // } 
            laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea.");              
        }   

        for(i=1;i<=nods_ld;i++){



            // como pegar todos os valores de um select multiple com JQuery                
            var focoEco = $('#nod_ld_focoEcogenico'+(i)).val().toString();                          
            
            
            var composicao = document.getElementById("nod_ld_composicao"+(i)).options[document.getElementById("nod_ld_composicao"+(i)).selectedIndex].text;
            var ecogenicidade = document.getElementById("nod_ld_ecogenicidade"+(i)).options[document.getElementById("nod_ld_ecogenicidade"+(i)).selectedIndex].text;
            var forma = document.getElementById("nod_ld_forma"+(i)).options[document.getElementById("nod_ld_forma"+(i)).selectedIndex].text;
            var margem = document.getElementById("nod_ld_margem"+(i)).options[document.getElementById("nod_ld_margem"+(i)).selectedIndex].text;                
            var localizacao = document.getElementById("nod_ld_localizacao"+(i)).options[document.getElementById("nod_ld_localizacao"+(i)).selectedIndex].text;
            var medida = document.getElementById("medida_nod_ld"+(i)).value.split(" ");
            var med1 = medida[0];
            var med2 = medida[1];
            var med3 = medida[2];
            var qtas_medidas = medida.length;
            var tirads = document.getElementById("tirads_ld"+(i)).textContent;
            
            if(qtas_medidas == 3){
                var nod_vol = parseFloat(med1*med2*med3*0.523).toFixed(2);
                laudo = laudo.replace("{nods_ld}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" x "+med3+"  cm, com volume de "+nod_vol+" cm³. "+tirads+"\n\n{nods_ld}");
            }
            if(qtas_medidas == 2){
                laudo = laudo.replace("{nods_ld}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" cm. "+tirads+"\n\n{nods_ld}");

            }                
            // audo = laudo.replace("{nods_ld}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+medida+"  cm. "+tirads+"\n\n{nods_ld}");
            laudo = laudo.replace("{fe}",focoEco);

            // checar se nódulo é TIRADS 5
            var calc_tirads = tirads.split(":")
            // console.log(calc_tirads[1])
            var calc_tirads2 = Number(calc_tirads[1])
            var nod_paaf = 0;
            if(calc_tirads2 >= 7){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>1){                            
                        nod_paaf = 1;
                        break;
                    }else{
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if((calc_tirads2 >= 4) && (calc_tirads2 <= 6)){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 1.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1 && medida[z] < 1.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if(calc_tirads2 == 3){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 2.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1.5 && medida[z] < 2.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo direito classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
                

        }
            

            
    }
    ///////////////////////////////////////////////////////
    // descrição dos nódulos à esquerda


    if( document.getElementById("nod_le").checked){   

        var nods_le = document.getElementById("qtos_nod_le").value;

        if(nods_le == 1){
            laudo = laudo.replace("{nod_e}",`Presença de nódulo em lobo esquerdo assim descrito:\n- LOBO ESQUERDO:\n{nods_le}`);
            laudo = laudo.replace("{diag}","- Nódulo tireoideano acima descrito.\n{diag}");  
            // nodulos_conclusao_singular();
            laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea.");  

        }
        if(nods_le > 1){
            laudo = laudo.replace("{nod_e}",`Presença de nódulos em lobo esquerdo assim descritos:\n- LOBO ESQUERDO:\n{nods_le}`);
            laudo = laudo.replace("{diag}","- Nódulos tireoideanos acima descritos.\n{diag}");   
            // nodulos_conclusao_plural();
            laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea.");        
        }   

        for(i=1;i<=nods_le;i++){



            // como pegar todos os valores de um select multiple com JQuery                
            var focoEco = $('#nod_le_focoEcogenico'+(i)).val().toString();                          
            
            
            var composicao = document.getElementById("nod_le_composicao"+(i)).options[document.getElementById("nod_le_composicao"+(i)).selectedIndex].text;
            var ecogenicidade = document.getElementById("nod_le_ecogenicidade"+(i)).options[document.getElementById("nod_le_ecogenicidade"+(i)).selectedIndex].text;
            var forma = document.getElementById("nod_le_forma"+(i)).options[document.getElementById("nod_le_forma"+(i)).selectedIndex].text;
            var margem = document.getElementById("nod_le_margem"+(i)).options[document.getElementById("nod_le_margem"+(i)).selectedIndex].text;                
            var localizacao = document.getElementById("nod_le_localizacao"+(i)).options[document.getElementById("nod_le_localizacao"+(i)).selectedIndex].text;
            var medida = document.getElementById("medida_nod_le"+(i)).value.split(" ");
            var med1 = medida[0];
            var med2 = medida[1];
            var med3 = medida[2];
            var qtas_medidas = medida.length;
            var tirads = document.getElementById("tirads_le"+(i)).textContent;
            
            if(qtas_medidas == 3){
                var nod_vol = parseFloat(med1*med2*med3*0.523).toFixed(2);
                laudo = laudo.replace("{nods_le}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" x "+med3+"  cm, com volume de "+nod_vol+" cm³. "+tirads+"\n\n{nods_le}");
            }
            if(qtas_medidas == 2){
                laudo = laudo.replace("{nods_le}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" cm. "+tirads+"\n\n{nods_le}");

            }                
            // audo = laudo.replace("{nods_le}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+medida+"  cm. "+tirads+"\n\n{nods_le}");
            laudo = laudo.replace("{fe}",focoEco);

            // checar se nódulo é TIRADS 5
            var calc_tirads = tirads.split(":")
            // console.log(calc_tirads[1])
            var calc_tirads2 = Number(calc_tirads[1])
            var nod_paaf = 0;
            if(calc_tirads2 >= 7){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>1){                            
                        nod_paaf = 1;
                        break;
                    }else{
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if((calc_tirads2 >= 4) && (calc_tirads2 <= 6)){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 1.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1 && medida[z] < 1.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if(calc_tirads2 == 3){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 2.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1.5 && medida[z] < 2.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no lobo esquerdo classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
                

        }
            

            
    }

    ///////////////////////////////////////////////////////
        // descrição dos nódulos no istmo

        if( document.getElementById("nod_ist").checked){   

            var nods_ist = document.getElementById("qtos_nod_ist").value;
    
            if(nods_ist == 1){
                laudo = laudo.replace("{ist_}",`Presença de nódulo no istmo assim descrito:\n- ISTMO:\n{nods_ist}`);
                // nodulos_conclusao_singular();
                laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea."); 
    
            }
            if(nods_ist > 1){
                laudo = laudo.replace("{ist_}",`Presença de nódulos no istmo assim descritos:\n- ISTMO:\n{nods_ist}`);
                
                // nodulos_conclusao_plural();
                laudo = laudo.replace("{tireoide}","Tireóide de dimensões normais, contornos regulares e ecotextura heterogênea.");            
            }   
    
            for(i=1;i<=nods_ist;i++){
    
    
    
                // como pegar todos os valores de um select multiple com JQuery                
                var focoEco = $('#nod_ist_focoEcogenico'+(i)).val().toString();                          
                
                
                var composicao = document.getElementById("nod_ist_composicao"+(i)).options[document.getElementById("nod_ist_composicao"+(i)).selectedIndex].text;
                var ecogenicidade = document.getElementById("nod_ist_ecogenicidade"+(i)).options[document.getElementById("nod_ist_ecogenicidade"+(i)).selectedIndex].text;
                var forma = document.getElementById("nod_ist_forma"+(i)).options[document.getElementById("nod_ist_forma"+(i)).selectedIndex].text;
                var margem = document.getElementById("nod_ist_margem"+(i)).options[document.getElementById("nod_ist_margem"+(i)).selectedIndex].text;                
                var localizacao = document.getElementById("nod_ist_localizacao"+(i)).options[document.getElementById("nod_ist_localizacao"+(i)).selectedIndex].text;
                var medida = document.getElementById("medida_nod_ist"+(i)).value.split(" ");
                var med1 = medida[0];
                var med2 = medida[1];
                var med3 = medida[2];
                var qtas_medidas = medida.length;
                var tirads = document.getElementById("tirads_ist"+(i)).textContent;
                
                if(qtas_medidas == 3){
                    var nod_vol = parseFloat(med1*med2*med3*0.523).toFixed(2);
                    laudo = laudo.replace("{nods_ist}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" x "+med3+"  cm, com volume de "+nod_vol+" cm³. "+tirads+"\n\n{nods_ist}");
                }
                if(qtas_medidas == 2){
                    laudo = laudo.replace("{nods_ist}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+med1+" x "+med2+" cm. "+tirads+"\n\n{nods_ist}");
    
                }                
                // audo = laudo.replace("{nods_ist}","N"+(i)+": Composição: "+composicao+". Ecogenicidade: "+ecogenicidade+". Forma: "+forma+". Margem: "+margem+". Foco(s) ecogênico(s): {fe}. Localização: "+localizacao+". Medida(s): "+medida+"  cm. "+tirads+"\n\n{nods_ist}");
                laudo = laudo.replace("{fe}",focoEco);
    
            // checar se nódulo é TIRADS 5
            var calc_tirads = tirads.split(":")
            // console.log(calc_tirads[1])
            var calc_tirads2 = Number(calc_tirads[1])
            var nod_paaf = 0;
            if(calc_tirads2 >= 7){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>1){                            
                        nod_paaf = 1;
                        break;
                    }else{
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR5. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if((calc_tirads2 >= 4) && (calc_tirads2 <= 6)){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 1.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1 && medida[z] < 1.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR4. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
            if(calc_tirads2 == 3){
                // checar o tamanho do nódulo
                for(z=0;z<=qtas_medidas;z++){
                    if(medida[z]>= 2.5){                            
                        nod_paaf = 1;
                        break;
                    }else if(medida[z]>= 1.5 && medida[z] < 2.5){
                        nod_paaf = 2;                    
                    }
                    
                }
                if(nod_paaf == 1){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se prosseguir investigação com PAAF.\n{diag}");
                }
                if(nod_paaf == 2){
                    laudo = laudo.replace("{diag}","- O nódulo N"+i+" no istmo classificado como TR3. Pelas suas dimensões, de acordo com os critérios do TI-RADS, sugere-se realizar acompanhamento do nódulo.\n{diag}");

                }
                
            }
                    
    
            }
                
    
                
        }
    
    

    laudo = laudo.replace("{diag}","");
    laudo = laudo.replace("{tireoide}","");
    laudo = laudo.replace("{cis_col}","");
    laudo = laudo.replace("{nod_d}","");
    laudo = laudo.replace("{ist_}","");
    laudo = laudo.replace("{nod_e}","");
    laudo = laudo.replace("{nods_ist}","");
    laudo = laudo.replace("{nods_ld}","");
    laudo = laudo.replace("{nods_le}","");
    document.getElementById("laudo").value = laudo; 

    



}





///////////////////////////////////////////////////
//código lixo

//         while (container.hasChildNodes()){
//             container.removeChild(container.lastChild);
//         }
//         for (i=0;i<qtos_nod_ld;i++){
//             container.appendChild(document.createTextNode("N"+(i+1)+": "));
    
//             // como criar as labels
//             var composicaoLabel = document.createElement("label");
//             composicaoLabel.setAttribute("for","nod_ld_composicao"+(i+1));
//             composicaoLabel.innerHTML = "Composição:"
//             container.appendChild(composicaoLabel);
            
//             // como criar os selects
//             var composicao = document.createElement("select");
//             composicao.setAttribute("onchange","tirads()");
//             composicao.options[composicao.options.length] = new Option('Cístico');
//             composicao.options[composicao.options.length] = new Option('Predominantemente cístico');
//             composicao.options[composicao.options.length] = new Option('Espongiforme');
//             composicao.options[composicao.options.length] = new Option('Sólido-cístico');
//             composicao.options[composicao.options.length] = new Option('Predominentemente sólido');
//             composicao.options[composicao.options.length] = new Option('Sólido');
//             composicao.id = "nod_ld_composicao"+(i+1);
            
//             container.appendChild(composicao);
    
//             // como criar as labels
//             var ecogenicidade = document.createElement("label");
//             ecogenicidade.setAttribute("for","nod_ld_ecogenicidade"+(i+1));
//             ecogenicidade.innerHTML = " Ecogenicidade: "
//             container.appendChild(ecogenicidade);
    
//             // como criar os selects
//             var ecogenicidade_nod_ld = document.createElement("select");
//             ecogenicidade_nod_ld.setAttribute("onchange","tirads()");
//             ecogenicidade_nod_ld.options[ecogenicidade_nod_ld.options.length] = new Option('Anecóico');
//             ecogenicidade_nod_ld.options[ecogenicidade_nod_ld.options.length] = new Option('Isoecóico');
//             ecogenicidade_nod_ld.options[ecogenicidade_nod_ld.options.length] = new Option('Hiperecóico');
//             ecogenicidade_nod_ld.options[ecogenicidade_nod_ld.options.length] = new Option('Hipoecóico');
//             ecogenicidade_nod_ld.options[ecogenicidade_nod_ld.options.length] = new Option('Acentuada hipoecogenicidade');
//             ecogenicidade_nod_ld.id = "nod_ld_ecogenicidade"+(i+1);        
//             container.appendChild(ecogenicidade_nod_ld);

//             // como criar as labels
//             var forma = document.createElement("label");
//             forma.setAttribute("for","nod_ld_forma"+(i+1));
//             forma.innerHTML = " Forma: "
//             container.appendChild(forma);
    
//             // como criar os selects
//             var forma_nod_ld = document.createElement("select");
//             forma_nod_ld.setAttribute("onchange","tirads()");
//             forma_nod_ld.options[forma_nod_ld.options.length] = new Option('mais largo que alto');
//             forma_nod_ld.options[forma_nod_ld.options.length] = new Option('mais alto que largo');
//             forma_nod_ld.id = "nod_ld_forma"+(i+1);        
//             container.appendChild(forma_nod_ld);            
            
//             // como criar as labels
//             var margem = document.createElement("label");
//             margem.setAttribute("for","nod_ld_margem"+(i+1));
//             margem.innerHTML = " Margem: "
//             container.appendChild(margem);
    
//             // como criar os selects
//             var margem_nod_ld = document.createElement("select");
//             margem_nod_ld.setAttribute("onchange","tirads()");
//             margem_nod_ld.options[margem_nod_ld.options.length] = new Option('Regular');
//             margem_nod_ld.options[margem_nod_ld.options.length] = new Option('Mal definida');
//             margem_nod_ld.options[margem_nod_ld.options.length] = new Option('Irregular');
//             margem_nod_ld.options[margem_nod_ld.options.length] = new Option('Lobulada');
//             margem_nod_ld.options[margem_nod_ld.options.length] = new Option('Extensão extra-tireoideana');
//             margem_nod_ld.id = "nod_ld_margem"+(i+1);        
//             container.appendChild(margem_nod_ld); 
                   
            
//             // como criar as labels
//             var focoEcogenico = document.createElement("label");
//             focoEcogenico.setAttribute("for","nod_ld_focoEcogenico"+(i+1));
//             focoEcogenico.innerHTML = " Foco ecogenico: "
//             container.appendChild(focoEcogenico);
    
//             // como criar os selects
//             var focoEcogenico_nod_ld = document.createElement("select"); 
//             focoEcogenico_nod_ld.setAttribute('multiple',true); 
//             focoEcogenico_nod_ld.setAttribute("onchange","tirads()");        
//             focoEcogenico_nod_ld.options[focoEcogenico_nod_ld.options.length] = new Option('Ausente');
//             focoEcogenico_nod_ld.options[focoEcogenico_nod_ld.options.length] = new Option('Artefato em cauda de cometa');
//             focoEcogenico_nod_ld.options[focoEcogenico_nod_ld.options.length] = new Option('Macrocalcificações');
//             focoEcogenico_nod_ld.options[focoEcogenico_nod_ld.options.length] = new Option('Calcificações periféricas');
//             focoEcogenico_nod_ld.options[focoEcogenico_nod_ld.options.length] = new Option('Microcalcificações');
//             focoEcogenico_nod_ld.id = "nod_ld_focoEcogenico"+(i+1);        
//             container.appendChild(focoEcogenico_nod_ld);  

//             // como criar as labels
//             var localizacao = document.createElement("label");
//             localizacao.setAttribute("for","nod_ld_localizacao"+(i+1));
//             localizacao.innerHTML = " Localização: "
//             container.appendChild(localizacao);
    
//             // como criar os selects
//             var localizacao_nod_ld = document.createElement("select");        
//             localizacao_nod_ld.options[localizacao_nod_ld.options.length] = new Option('terço superior');
//             localizacao_nod_ld.options[localizacao_nod_ld.options.length] = new Option('terço médio/superior');
//             localizacao_nod_ld.options[localizacao_nod_ld.options.length] = new Option('terço médio');
//             localizacao_nod_ld.options[localizacao_nod_ld.options.length] = new Option('terço médio/inferior');
//             localizacao_nod_ld.options[localizacao_nod_ld.options.length] = new Option('terço inferior');
//             localizacao_nod_ld.id = "nod_ld_localizacao"+(i+1);        
//             container.appendChild(localizacao_nod_ld); 

//             // como criar as labels
//             var medida = document.createElement("label");
//             medida.setAttribute("for","nod_ld_medida"+(i+1));
//             medida.innerHTML = " Medidas: "
//             container.appendChild(medida);

//             // criar o input medidas
//             var medida_nod_ld = document.createElement("input"); 
//             medida_nod_ld.id = "medida_nod_ld"+(i+1);  
//             container.appendChild(medida_nod_ld); 
            
//             // como criar as labels
//             var tirads_pont = document.createElement("label");
//             tirads_pont.setAttribute("id","tirads"+(i+1));
//             tirads_pont.innerHTML = " TI-RADS:"
//             container.appendChild(tirads_pont);


  
//             container.appendChild(document.createElement("br"));          



//     }
//     // tirads(qtos_nod_ld)

// function tirads(){
//     // calcular tirads

//     var qtos_nod = document.getElementById("qtos_nod_ld").value;

//     for (i=0;i<qtos_nod;i++){
//         var tirads = 0;
//         var composicao = document.getElementById("nod_ld_composicao"+(i+1)).options[document.getElementById("nod_ld_composicao"+(i+1)).selectedIndex].text;        
//         var ecogenicidade = document.getElementById("nod_ld_ecogenicidade"+(i+1)).options[document.getElementById("nod_ld_ecogenicidade"+(i+1)).selectedIndex].text;
//         var forma = document.getElementById("nod_ld_forma"+(i+1)).options[document.getElementById("nod_ld_forma"+(i+1)).selectedIndex].text;
//         var margem = document.getElementById("nod_ld_margem"+(i+1)).options[document.getElementById("nod_ld_margem"+(i+1)).selectedIndex].text;
//         const selected = document.querySelectorAll('#nod_ld_focoEcogenico'+(i+1)+' option:checked');
//         const focoEco = Array.from(selected).map(el => el.value);
//         const focoEco_Ar = focoEco.length;
    
//         if(composicao == "Cístico"  || composicao == "Predominantemente cístico"  || composicao == "Espongiforme" ){
//             tirads = tirads + 0;
//         }
//         if(composicao == "Sólido-cístico"){
//             tirads = tirads + 1;
//         }
//         if(composicao == "Predominentemente sólido"  || composicao == "Sólido"){
//             tirads = tirads + 2;
//         }

//         if(ecogenicidade == 'Anecóico'){
//             tirads = tirads + 0;
//         }
//         if(ecogenicidade == 'Isoecóico'  || ecogenicidade == 'Hiperecóico'){
//             tirads = tirads + 1;
//         } 
//         if(ecogenicidade == 'Hipoecóico'){
//             tirads = tirads + 2;
//         }
//         if(ecogenicidade == 'Acentuada hipoecogenicidade'){
//             tirads = tirads + 3;
//         }
//         if(forma == 'mais largo que alto'){
//             tirads = tirads + 0;
//         }
//         if(forma == 'mais alto que largo'){
//             tirads = tirads + 3;
//         }

//         if(margem == 'Regular'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Mal definida'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Iregular'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Lobulada'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Extensão extra-tireoideana'){
//             tirads = tirads + 3;
//         }

//         // esse método includes serve pra vê se em um array existe determinardo valor. retorna true ou false

//         if(focoEco.includes('Ausente')){
//             tirads = tirads + 0;
//         }
//         if(focoEco.includes('Artefato em cauda de cometa')){
//             tirads = tirads + 0;
//         }        
//         if(focoEco.includes('Macrocalcificações')){
//             tirads = tirads + 1;
//         }        
//         if(focoEco.includes('Calcificações periféricas')){
//             tirads = tirads + 2;
//         }        
//         if(focoEco.includes('Microcalcificações')){
//             tirads = tirads + 3;
//         }      
        


//         document.getElementById("tirads_ld"+(i+1)).innerHTML = ' TI-RADS: '+tirads.toString();



//         }

        

  
     



// }

// function tirads_ist(){
//     var qtos_nod = document.getElementById("qtos_nod_ist").value;

//     for (i=0;i<qtos_nod;i++){
//         var tirads = 0;
//         var composicao = document.getElementById("nod_ist_composicao"+(i+1)).options[document.getElementById("nod_ist_composicao"+(i+1)).selectedIndex].text;        
//         var ecogenicidade = document.getElementById("nod_ist_ecogenicidade"+(i+1)).options[document.getElementById("nod_ist_ecogenicidade"+(i+1)).selectedIndex].text;
//         var forma = document.getElementById("nod_ist_forma"+(i+1)).options[document.getElementById("nod_ist_forma"+(i+1)).selectedIndex].text;
//         var margem = document.getElementById("nod_ist_margem"+(i+1)).options[document.getElementById("nod_ist_margem"+(i+1)).selectedIndex].text;
//         const selected = document.querySelectorAll('#nod_ist_focoEcogenico'+(i+1)+' option:checked');
//         const focoEco = Array.from(selected).map(el => el.value);
//         const focoEco_Ar = focoEco.length;
    
//         if(composicao == "Cístico"  || composicao == "Predominantemente cístico"  || composicao == "Espongiforme" ){
//             tirads = tirads + 0;
//         }
//         if(composicao == "Sólido-cístico"){
//             tirads = tirads + 1;
//         }
//         if(composicao == "Predominentemente sólido"  || composicao == "Sólido"){
//             tirads = tirads + 2;
//         }

//         if(ecogenicidade == 'Anecóico'){
//             tirads = tirads + 0;
//         }
//         if(ecogenicidade == 'Isoecóico'  || ecogenicidade == 'Hiperecóico'){
//             tirads = tirads + 1;
//         } 
//         if(ecogenicidade == 'Hipoecóico'){
//             tirads = tirads + 2;
//         }
//         if(ecogenicidade == 'Acentuada hipoecogenicidade'){
//             tirads = tirads + 3;
//         }
//         if(forma == 'mais largo que alto'){
//             tirads = tirads + 0;
//         }
//         if(forma == 'mais alto que largo'){
//             tirads = tirads + 3;
//         }

//         if(margem == 'Regular'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Mal definida'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Iregular'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Lobulada'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Extensão extra-tireoideana'){
//             tirads = tirads + 3;
//         }

//         // esse método includes serve pra vê se em um array existe determinardo valor. retorna true ou false

//         if(focoEco.includes('Ausente')){
//             tirads = tirads + 0;
//         }
//         if(focoEco.includes('Artefato em cauda de cometa')){
//             tirads = tirads + 0;
//         }        
//         if(focoEco.includes('Macrocalcificações')){
//             tirads = tirads + 1;
//         }        
//         if(focoEco.includes('Calcificações periféricas')){
//             tirads = tirads + 2;
//         }        
//         if(focoEco.includes('Microcalcificações')){
//             tirads = tirads + 3;
//         }      
        


//         document.getElementById("tirads_ist"+(i+1)).innerHTML = ' TI-RADS: '+tirads.toString();
        
//     }

// }




// function tirads_le(){
//     var qtos_nod = document.getElementById("qtos_nod_le").value;

//     for (i=0;i<qtos_nod;i++){
//         var tirads = 0;
//         var composicao = document.getElementById("nod_le_composicao"+(i+1)).options[document.getElementById("nod_le_composicao"+(i+1)).selectedIndex].text;        
//         var ecogenicidade = document.getElementById("nod_le_ecogenicidade"+(i+1)).options[document.getElementById("nod_le_ecogenicidade"+(i+1)).selectedIndex].text;
//         var forma = document.getElementById("nod_le_forma"+(i+1)).options[document.getElementById("nod_le_forma"+(i+1)).selectedIndex].text;
//         var margem = document.getElementById("nod_le_margem"+(i+1)).options[document.getElementById("nod_le_margem"+(i+1)).selectedIndex].text;
//         const selected = document.querySelectorAll('#nod_le_focoEcogenico'+(i+1)+' option:checked');
//         const focoEco = Array.from(selected).map(el => el.value);
//         const focoEco_Ar = focoEco.length;
    
//         if(composicao == "Cístico"  || composicao == "Predominantemente cístico"  || composicao == "Espongiforme" ){
//             tirads = tirads + 0;
//         }
//         if(composicao == "Sólido-cístico"){
//             tirads = tirads + 1;
//         }
//         if(composicao == "Predominentemente sólido"  || composicao == "Sólido"){
//             tirads = tirads + 2;
//         }

//         if(ecogenicidade == 'Anecóico'){
//             tirads = tirads + 0;
//         }
//         if(ecogenicidade == 'Isoecóico'  || ecogenicidade == 'Hiperecóico'){
//             tirads = tirads + 1;
//         } 
//         if(ecogenicidade == 'Hipoecóico'){
//             tirads = tirads + 2;
//         }
//         if(ecogenicidade == 'Acentuada hipoecogenicidade'){
//             tirads = tirads + 3;
//         }
//         if(forma == 'mais largo que alto'){
//             tirads = tirads + 0;
//         }
//         if(forma == 'mais alto que largo'){
//             tirads = tirads + 3;
//         }

//         if(margem == 'Regular'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Mal definida'){
//             tirads = tirads + 0;
//         }
//         if(margem == 'Iregular'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Lobulada'){
//             tirads = tirads + 2;
//         }
//         if(margem == 'Extensão extra-tireoideana'){
//             tirads = tirads + 3;
//         }

//         // esse método includes serve pra vê se em um array existe determinardo valor. retorna true ou false

//         if(focoEco.includes('Ausente')){
//             tirads = tirads + 0;
//         }
//         if(focoEco.includes('Artefato em cauda de cometa')){
//             tirads = tirads + 0;
//         }        
//         if(focoEco.includes('Macrocalcificações')){
//             tirads = tirads + 1;
//         }        
//         if(focoEco.includes('Calcificações periféricas')){
//             tirads = tirads + 2;
//         }        
//         if(focoEco.includes('Microcalcificações')){
//             tirads = tirads + 3;
//         }      
        


//         document.getElementById("tirads_le"+(i+1)).innerHTML = ' TI-RADS: '+tirads.toString();
        
//     }

// }

// function nodulos_conclusao_singular(){
//     var laudo = document.getElementById("laudo").value;
//     if(laudo.includes("- Nódulo tireoideano acima descrito.")){

//     } else{
//         laudo = laudo.replace("{diag}","- Nódulo tireoideano acima descrito.");

//     } 

// }



// if(document.getElementById("nod_le").checked){
//     var qtos_nod_le = document.getElementById("qtos_nod_le").value;
//     var container = document.getElementById("nod_le_desc");

//     while (container.hasChildNodes()){
//         container.removeChild(container.lastChild);
//     }
//     for (i=0;i<qtos_nod_le;i++){
//         container.appendChild(document.createTextNode("N"+(i+1)+": "));

//         // como criar as labels
//         var composicaoLabel = document.createElement("label");
//         composicaoLabel.setAttribute("for","nod_le_composicao"+(i+1));
//         composicaoLabel.innerHTML = "Composição:"
//         container.appendChild(composicaoLabel);
        
//         // como criar os selects
//         var composicao = document.createElement("select");
//         composicao.setAttribute("onchange","tirads_le()");
//         composicao.options[composicao.options.length] = new Option('Cístico');
//         composicao.options[composicao.options.length] = new Option('Predominantemente cístico');
//         composicao.options[composicao.options.length] = new Option('Espongiforme');
//         composicao.options[composicao.options.length] = new Option('Sólido-cístico');
//         composicao.options[composicao.options.length] = new Option('Predominentemente sólido');
//         composicao.options[composicao.options.length] = new Option('Sólido');
//         composicao.id = "nod_le_composicao"+(i+1);
        
//         container.appendChild(composicao);

//         // como criar as labels
//         var ecogenicidade = document.createElement("label");
//         ecogenicidade.setAttribute("for","nod_le_ecogenicidade"+(i+1));
//         ecogenicidade.innerHTML = " Ecogenicidade: "
//         container.appendChild(ecogenicidade);

//         // como criar os selects
//         var ecogenicidade_nod_le = document.createElement("select");
//         ecogenicidade_nod_le.setAttribute("onchange","tirads_le()");
//         ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Anecóico');
//         ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Isoecóico');
//         ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Hiperecóico');
//         ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Hipoecóico');
//         ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Acentuada hipoecogenicidade');
//         ecogenicidade_nod_le.id = "nod_le_ecogenicidade"+(i+1);        
//         container.appendChild(ecogenicidade_nod_le);

//         // como criar as labels
//         var forma = document.createElement("label");
//         forma.setAttribute("for","nod_le_forma"+(i+1));
//         forma.innerHTML = " Forma: "
//         container.appendChild(forma);

//         // como criar os selects
//         var forma_nod_le = document.createElement("select");
//         forma_nod_le.setAttribute("onchange","tirads_le()");
//         forma_nod_le.options[forma_nod_le.options.length] = new Option('mais largo que alto');
//         forma_nod_le.options[forma_nod_le.options.length] = new Option('mais alto que largo');
//         forma_nod_le.id = "nod_le_forma"+(i+1);        
//         container.appendChild(forma_nod_le);            
        
//         // como criar as labels
//         var margem = document.createElement("label");
//         margem.setAttribute("for","nod_le_margem"+(i+1));
//         margem.innerHTML = " Margem: "
//         container.appendChild(margem);

//         // como criar os selects
//         var margem_nod_le = document.createElement("select");
//         margem_nod_le.setAttribute("onchange","tirads_le()");
//         margem_nod_le.options[margem_nod_le.options.length] = new Option('Regular');
//         margem_nod_le.options[margem_nod_le.options.length] = new Option('Mal definida');
//         margem_nod_le.options[margem_nod_le.options.length] = new Option('Irregular');
//         margem_nod_le.options[margem_nod_le.options.length] = new Option('Lobulada');
//         margem_nod_le.options[margem_nod_le.options.length] = new Option('Extensão extra-tireoideana');
//         margem_nod_le.id = "nod_le_margem"+(i+1);        
//         container.appendChild(margem_nod_le); 
               
        
//         // como criar as labels
//         var focoEcogenico = document.createElement("label");
//         focoEcogenico.setAttribute("for","nod_le_focoEcogenico"+(i+1));
//         focoEcogenico.innerHTML = " Foco ecogenico: "
//         container.appendChild(focoEcogenico);

//         // como criar os selects
//         var focoEcogenico_nod_le = document.createElement("select"); 
//         focoEcogenico_nod_le.setAttribute('multiple',true); 
//         focoEcogenico_nod_le.setAttribute("onchange","tirads_le()");        
//         focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Ausente');
//         focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Artefato em cauda de cometa');
//         focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Macrocalcificações');
//         focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Calcificações periféricas');
//         focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Microcalcificações');
//         focoEcogenico_nod_le.id = "nod_le_focoEcogenico"+(i+1);        
//         container.appendChild(focoEcogenico_nod_le);
        
//         // como criar as labels
//         var localizacao = document.createElement("label");
//         localizacao.setAttribute("for","nod_le_localizacao"+(i+1));
//         localizacao.innerHTML = " Localização: "
//         container.appendChild(localizacao);

//         // como criar os selects
//         var localizacao_nod_le = document.createElement("select");                    
//         localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço superior');
//         localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio/superior');
//         localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio');
//         localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio/inferior');
//         localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço inferior');
//         localizacao_nod_le.id = "nod_le_localizacao"+(i+1);        
//         container.appendChild(localizacao_nod_le); 

//         // como criar as labels
//         var medida = document.createElement("label");
//         medida.setAttribute("for","nod_le_medida"+(i+1));
//         medida.innerHTML = " Medidas: "
//         container.appendChild(medida);

//         // criar o input medidas
//         var medida_nod_le = document.createElement("input"); 
//         medida_nod_le.id = "medida_nod_le"+(i+1);  
//         container.appendChild(medida_nod_le);  
        
//         // como criar as labels
//         var tirads_pont = document.createElement("label");
//         tirads_pont.setAttribute("id","tirads_le"+(i+1));
//         tirads_pont.innerHTML = " TI-RADS:"
//         container.appendChild(tirads_pont);



//         container.appendChild(document.createElement("br"));   

// } 




// }
// }
// }

// function criar_nodulos_le(){


//     if(document.getElementById("nod_le").checked){
//         var qtos_nod_le = document.getElementById("qtos_nod_le").value;
//         var container = document.getElementById("nod_le_desc");
    
//         while (container.hasChildNodes()){
//             container.removeChild(container.lastChild);
//         }
//         for (i=0;i<qtos_nod_le;i++){
//             container.appendChild(document.createTextNode("N"+(i+1)+": "));
    
//             // como criar as labels
//             var composicaoLabel = document.createElement("label");
//             composicaoLabel.setAttribute("for","nod_le_composicao"+(i+1));
//             composicaoLabel.innerHTML = "Composição:"
//             container.appendChild(composicaoLabel);
            
//             // como criar os selects
//             var composicao = document.createElement("select");
//             composicao.setAttribute("onchange","tirads_le()");
//             composicao.options[composicao.options.length] = new Option('Cístico');
//             composicao.options[composicao.options.length] = new Option('Predominantemente cístico');
//             composicao.options[composicao.options.length] = new Option('Espongiforme');
//             composicao.options[composicao.options.length] = new Option('Sólido-cístico');
//             composicao.options[composicao.options.length] = new Option('Predominentemente sólido');
//             composicao.options[composicao.options.length] = new Option('Sólido');
//             composicao.id = "nod_le_composicao"+(i+1);
            
//             container.appendChild(composicao);
    
//             // como criar as labels
//             var ecogenicidade = document.createElement("label");
//             ecogenicidade.setAttribute("for","nod_le_ecogenicidade"+(i+1));
//             ecogenicidade.innerHTML = " Ecogenicidade: "
//             container.appendChild(ecogenicidade);
    
//             // como criar os selects
//             var ecogenicidade_nod_le = document.createElement("select");
//             ecogenicidade_nod_le.setAttribute("onchange","tirads_le()");
//             ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Anecóico');
//             ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Isoecóico');
//             ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Hiperecóico');
//             ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Hipoecóico');
//             ecogenicidade_nod_le.options[ecogenicidade_nod_le.options.length] = new Option('Acentuada hipoecogenicidade');
//             ecogenicidade_nod_le.id = "nod_le_ecogenicidade"+(i+1);        
//             container.appendChild(ecogenicidade_nod_le);
    
//             // como criar as labels
//             var forma = document.createElement("label");
//             forma.setAttribute("for","nod_le_forma"+(i+1));
//             forma.innerHTML = " Forma: "
//             container.appendChild(forma);
    
//             // como criar os selects
//             var forma_nod_le = document.createElement("select");
//             forma_nod_le.setAttribute("onchange","tirads_le()");
//             forma_nod_le.options[forma_nod_le.options.length] = new Option('mais largo que alto');
//             forma_nod_le.options[forma_nod_le.options.length] = new Option('mais alto que largo');
//             forma_nod_le.id = "nod_le_forma"+(i+1);        
//             container.appendChild(forma_nod_le);            
            
//             // como criar as labels
//             var margem = document.createElement("label");
//             margem.setAttribute("for","nod_le_margem"+(i+1));
//             margem.innerHTML = " Margem: "
//             container.appendChild(margem);
    
//             // como criar os selects
//             var margem_nod_le = document.createElement("select");
//             margem_nod_le.setAttribute("onchange","tirads_le()");
//             margem_nod_le.options[margem_nod_le.options.length] = new Option('Regular');
//             margem_nod_le.options[margem_nod_le.options.length] = new Option('Mal definida');
//             margem_nod_le.options[margem_nod_le.options.length] = new Option('Irregular');
//             margem_nod_le.options[margem_nod_le.options.length] = new Option('Lobulada');
//             margem_nod_le.options[margem_nod_le.options.length] = new Option('Extensão extra-tireoideana');
//             margem_nod_le.id = "nod_le_margem"+(i+1);        
//             container.appendChild(margem_nod_le); 
                   
            
//             // como criar as labels
//             var focoEcogenico = document.createElement("label");
//             focoEcogenico.setAttribute("for","nod_le_focoEcogenico"+(i+1));
//             focoEcogenico.innerHTML = " Foco ecogenico: "
//             container.appendChild(focoEcogenico);
    
//             // como criar os selects
//             var focoEcogenico_nod_le = document.createElement("select"); 
//             focoEcogenico_nod_le.setAttribute('multiple',true); 
//             focoEcogenico_nod_le.setAttribute("onchange","tirads_le()");        
//             focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Ausente');
//             focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Artefato em cauda de cometa');
//             focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Macrocalcificações');
//             focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Calcificações periféricas');
//             focoEcogenico_nod_le.options[focoEcogenico_nod_le.options.length] = new Option('Microcalcificações');
//             focoEcogenico_nod_le.id = "nod_le_focoEcogenico"+(i+1);        
//             container.appendChild(focoEcogenico_nod_le);
            
//             // como criar as labels
//             var localizacao = document.createElement("label");
//             localizacao.setAttribute("for","nod_le_localizacao"+(i+1));
//             localizacao.innerHTML = " Localização: "
//             container.appendChild(localizacao);
    
//             // como criar os selects
//             var localizacao_nod_le = document.createElement("select");                    
//             localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço superior');
//             localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio/superior');
//             localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio');
//             localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço médio/inferior');
//             localizacao_nod_le.options[localizacao_nod_le.options.length] = new Option('terço inferior');
//             localizacao_nod_le.id = "nod_le_localizacao"+(i+1);        
//             container.appendChild(localizacao_nod_le); 

//             // como criar as labels
//             var medida = document.createElement("label");
//             medida.setAttribute("for","nod_le_medida"+(i+1));
//             medida.innerHTML = " Medidas: "
//             container.appendChild(medida);

//             // criar o input medidas
//             var medida_nod_le = document.createElement("input"); 
//             medida_nod_le.id = "medida_nod_le"+(i+1);  
//             container.appendChild(medida_nod_le);  
            
//             // como criar as labels
//             var tirads_pont = document.createElement("label");
//             tirads_pont.setAttribute("id","tirads_le"+(i+1));
//             tirads_pont.innerHTML = " TI-RADS:"
//             container.appendChild(tirads_pont);
    
    
    
//             container.appendChild(document.createElement("br"));   

//     }
        




// }
// }

// function criar_nodulos_ist(){


//     if(document.getElementById("nod_ist").checked){
//         var qtos_nod_ist = document.getElementById("qtos_nod_ist").value;
//         var container = document.getElementById("nod_ist_desc");
    
//         while (container.hasChildNodes()){
//             container.removeChild(container.lastChild);
//         }
//         for (i=0;i<qtos_nod_ist;i++){
//             container.appendChild(document.createTextNode("N"+(i+1)+": "));
    
//             // como criar as labels
//             var composicaoLabel = document.createElement("label");
//             composicaoLabel.setAttribute("for","nod_ist_composicao"+(i+1));
//             composicaoLabel.innerHTML = "Composição:"
//             container.appendChild(composicaoLabel);
            
//             // como criar os selects
//             var composicao = document.createElement("select");
//             composicao.setAttribute("onchange","tirads_ist()");
//             composicao.options[composicao.options.length] = new Option('Cístico');
//             composicao.options[composicao.options.length] = new Option('Predominantemente cístico');
//             composicao.options[composicao.options.length] = new Option('Espongiforme');
//             composicao.options[composicao.options.length] = new Option('Sólido-cístico');
//             composicao.options[composicao.options.length] = new Option('Predominentemente sólido');
//             composicao.options[composicao.options.length] = new Option('Sólido');
//             composicao.id = "nod_ist_composicao"+(i+1);
            
//             container.appendChild(composicao);
    
//             // como criar as labels
//             var ecogenicidade = document.createElement("label");
//             ecogenicidade.setAttribute("for","nod_ist_ecogenicidade"+(i+1));
//             ecogenicidade.innerHTML = " Ecogenicidade: "
//             container.appendChild(ecogenicidade);
    
//             // como criar os selects
//             var ecogenicidade_nod_ist = document.createElement("select");
//             ecogenicidade_nod_ist.setAttribute("onchange","tirads_ist()");
//             ecogenicidade_nod_ist.options[ecogenicidade_nod_ist.options.length] = new Option('Anecóico');
//             ecogenicidade_nod_ist.options[ecogenicidade_nod_ist.options.length] = new Option('Isoecóico');
//             ecogenicidade_nod_ist.options[ecogenicidade_nod_ist.options.length] = new Option('Hiperecóico');
//             ecogenicidade_nod_ist.options[ecogenicidade_nod_ist.options.length] = new Option('Hipoecóico');
//             ecogenicidade_nod_ist.options[ecogenicidade_nod_ist.options.length] = new Option('Acentuada hipoecogenicidade');
//             ecogenicidade_nod_ist.id = "nod_ist_ecogenicidade"+(i+1);        
//             container.appendChild(ecogenicidade_nod_ist);
    
//             // como criar as labels
//             var forma = document.createElement("label");
//             forma.setAttribute("for","nod_ist_forma"+(i+1));
//             forma.innerHTML = " Forma: "
//             container.appendChild(forma);
    
//             // como criar os selects
//             var forma_nod_ist = document.createElement("select");
//             forma_nod_ist.setAttribute("onchange","tirads_ist()");
//             forma_nod_ist.options[forma_nod_ist.options.length] = new Option('mais largo que alto');
//             forma_nod_ist.options[forma_nod_ist.options.length] = new Option('mais alto que largo');
//             forma_nod_ist.id = "nod_ist_forma"+(i+1);        
//             container.appendChild(forma_nod_ist);            
            
//             // como criar as labels
//             var margem = document.createElement("label");
//             margem.setAttribute("for","nod_ist_margem"+(i+1));
//             margem.innerHTML = " Margem: "
//             container.appendChild(margem);
    
//             // como criar os selects
//             var margem_nod_ist = document.createElement("select");
//             margem_nod_ist.setAttribute("onchange","tirads_ist()");
//             margem_nod_ist.options[margem_nod_ist.options.length] = new Option('Regular');
//             margem_nod_ist.options[margem_nod_ist.options.length] = new Option('Mal definida');
//             margem_nod_ist.options[margem_nod_ist.options.length] = new Option('Irregular');
//             margem_nod_ist.options[margem_nod_ist.options.length] = new Option('Lobulada');
//             margem_nod_ist.options[margem_nod_ist.options.length] = new Option('Extensão extra-tireoideana');
//             margem_nod_ist.id = "nod_ist_margem"+(i+1);        
//             container.appendChild(margem_nod_ist); 
                   
            
//             // como criar as labels
//             var focoEcogenico = document.createElement("label");
//             focoEcogenico.setAttribute("for","nod_ist_focoEcogenico"+(i+1));
//             focoEcogenico.innerHTML = " Foco ecogenico: "
//             container.appendChild(focoEcogenico);
    
//             // como criar os selects
//             var focoEcogenico_nod_ist = document.createElement("select"); 
//             focoEcogenico_nod_ist.setAttribute('multiple',true); 
//             focoEcogenico_nod_ist.setAttribute("onchange","tirads_ist()");        
//             focoEcogenico_nod_ist.options[focoEcogenico_nod_ist.options.length] = new Option('Ausente');
//             focoEcogenico_nod_ist.options[focoEcogenico_nod_ist.options.length] = new Option('Artefato em cauda de cometa');
//             focoEcogenico_nod_ist.options[focoEcogenico_nod_ist.options.length] = new Option('Macrocalcificações');
//             focoEcogenico_nod_ist.options[focoEcogenico_nod_ist.options.length] = new Option('Calcificações periféricas');
//             focoEcogenico_nod_ist.options[focoEcogenico_nod_ist.options.length] = new Option('Microcalcificações');
//             focoEcogenico_nod_ist.id = "nod_ist_focoEcogenico"+(i+1);        
//             container.appendChild(focoEcogenico_nod_ist);
            
//             // como criar as labels
//             var localizacao = document.createElement("label");
//             localizacao.setAttribute("for","nod_ist_localizacao"+(i+1));
//             localizacao.innerHTML = " Localização: "
//             container.appendChild(localizacao);
    
//             // como criar os selects
//             var localizacao_nod_ist = document.createElement("select");                    
//             localizacao_nod_ist.options[localizacao_nod_ist.options.length] = new Option('terço superior');
//             localizacao_nod_ist.options[localizacao_nod_ist.options.length] = new Option('terço médio/superior');
//             localizacao_nod_ist.options[localizacao_nod_ist.options.length] = new Option('terço médio');
//             localizacao_nod_ist.options[localizacao_nod_ist.options.length] = new Option('terço médio/inferior');
//             localizacao_nod_ist.options[localizacao_nod_ist.options.length] = new Option('terço inferior');
//             localizacao_nod_ist.id = "nod_ist_localizacao"+(i+1);        
//             container.appendChild(localizacao_nod_ist); 

//             // como criar as labels
//             var medida = document.createElement("label");
//             medida.setAttribute("for","nod_ist_medida"+(i+1));
//             medida.innerHTML = " Medidas: "
//             container.appendChild(medida);

//             // criar o input medidas
//             var medida_nod_ist = document.createElement("input"); 
//             medida_nod_ist.id = "medida_nod_ist"+(i+1);  
//             container.appendChild(medida_nod_ist);  
            
//             // como criar as labels
//             var tirads_pont = document.createElement("label");
//             tirads_pont.setAttribute("id","tirads_ist"+(i+1));
//             tirads_pont.innerHTML = " TI-RADS:"
//             container.appendChild(tirads_pont);
    
    
    
//             container.appendChild(document.createElement("br"));   

//     }
        




// }

















//     var qtos_nod_lds = document.getElementById("qtos_nod_lds").value;
//     var container = document.getElementById("nod_lds_desc");

//     while (container.hasChildNodes()){
//         container.removeChild(container.lastChild);
//     }
//     for (i=0;i<qtos_nod_lds;i++){
//         container.appendChild(document.createTextNode("M"+(i+1)+": "));

//         // como criar as labels
//         var paredeLabel = document.createElement("label");
//         paredeLabel.setAttribute("for","nod_ld_parede"+(i+1));
//         paredeLabel.innerHTML = "Parede:"
//         container.appendChild(paredeLabel);
        
//         // como criar os selects
//         var parede = document.createElement("select");
//         parede.options[parede.options.length] = new Option('Anterior');
//         parede.options[parede.options.length] = new Option('Posterior');
//         parede.options[parede.options.length] = new Option('Lateral esquerda');
//         parede.options[parede.options.length] = new Option('Lateral direita');
//         parede.id = "nod_ld_parede"+(i+1);
        
//         container.appendChild(parede);

//         // como criar as labels
//         var tipo = document.createElement("label");
//         tipo.setAttribute("for","nod_ld_tipo"+(i+1));
//         tipo.innerHTML = " Tipo: "
//         container.appendChild(tipo);

//         // como criar os selects
//         var tipo_nod_ld = document.createElement("select");
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Intramural');
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Intramural/Subseroso');
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Submucoso');
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Intramural/Submucoso');
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Subseroso');
//         tipo_nod_ld.options[tipo_nod_ld.options.length] = new Option('Pediculado');
//         tipo_nod_ld.id = "nod_ld_tipo"+(i+1);        
//         container.appendChild(tipo_nod_ld);

//         // como criar as labels
//         var medida_nod_ld = document.createElement("label");
//         medida_nod_ld.setAttribute("for","nod_ld_medidas"+(i+1));
//         medida_nod_ld.innerHTML = " Medindo: "
//         container.appendChild(medida_nod_ld);

//         // medidas dos nod_lds
//         var medida_nod_ld = document.createElement("input");
//         medida_nod_ld.type = "text";        
//         medida_nod_ld.id = "nod_ld_medidas"+(i+1);
//         container.appendChild(medida_nod_ld);

//         // var input = document.createElement("input");
//         // input.type = "text";
//         // input.id = "nod_ld_"+(i+1);
//         // container.appendChild(input);

//         container.appendChild(document.createElement("br"));
//     }
// 

