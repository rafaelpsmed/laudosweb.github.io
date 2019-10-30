
//site para fórmulas: http://perinatology.com/calculators/Estimation%20of%20Fetal%20Weight%20and%20Age.htm#TOP
//fórmula percentil https://goodcalculators.com/percentile-calculator/ - https://math.stackexchange.com/questions/33488/how-to-calculate-percentile-is-it-possible-to-get-100-percentile

function calc_peso(){

    var dbp = parseFloat(document.getElementById("DBP").value);
    var cc = parseFloat(document.getElementById("CC").value);
    var ca = parseFloat(document.getElementById("CA").value);
    var cf = parseFloat(document.getElementById("CF").value);

    //fórmula Hadlock4
    var peso = 1.3596 - (0.00386* ca * cf)+(0.0064*cc)+(0.00061*dbp*ca)+( 0.0424*ca)+(0.174*cf);
    var peso1 = Math.round(Math.pow(10,peso));
    document.getElementById("peso").value = peso1;


}

function calc_ig(){
    
    var dbp = parseFloat(document.getElementById("DBP").value);
    var cc = parseFloat(document.getElementById("CC").value);
    var ca = parseFloat(document.getElementById("CA").value);
    var cf = parseFloat(document.getElementById("CF").value);

    //fórmula certa para calcular a idade gestacional
    var ig = 10.85+0.060*cc*cf+0.670*dbp+0.1680*ca;
    var semanas = Math.floor(ig);
    var dias = ig - Math.floor(ig);
    var dias2 = +dias.toFixed(1)*10;
    console.log(dias2);
    console.log(dias);
    console.log(ig);

    document.getElementById("ig_semanas").value = semanas;
    document.getElementById("ig_dias").value = dias2;
  
    
}

function laudo(){
    

    
    
    
    
    // Dados
    var situacao = document.getElementById("situacao");
    var situacao_texto = situacao.options[situacao.selectedIndex].text;
    var apre = document.getElementById("apresentacao");
    var apre_texto = apre.options[apre.selectedIndex].text;
    var dorso = document.getElementById("dorso");
    var dorso_texto = dorso.options[dorso.selectedIndex].text;
    var bcf = document.getElementById("bcf").value;
    var dbp = document.getElementById("DBP").value;
    var cc = document.getElementById("CC").value;
    var ca = document.getElementById("CA").value;
    var cf = document.getElementById("CF").value;
    var ig_semanas = document.getElementById("ig_semanas").value;
    var ig_dias = document.getElementById("ig_dias").value;
    var peso = document.getElementById("peso").value;
    var placenta = document.getElementById("placenta");
    var placenta_texto = placenta.options[placenta.selectedIndex].text;
    var grau_placenta = document.getElementById("grau_placenta");
    var grau_placenta_texto = grau_placenta.options[grau_placenta.selectedIndex].text;
    var espessura_placenta = document.getElementById("espessura_placenta").value;
    var alt_pla = document.getElementById("obs_placenta").value;
    var maior_bol = document.getElementById("maior_bolsão").value;
    var ila = document.getElementById("ila").value;

    //calcular ig pelo 1° us
    
    var ig_prim_us_data = new Date(document.getElementById("data_prim_usg").value);
    var ig_prim_us_sem = parseInt(document.getElementById("sem_prim_usg").value);
    var ig_prim_us_dia = parseInt(document.getElementById("dias_prim_usg").value);
    var hoje = new Date();    
    var um_dia = 24*60*60*1000;
    var dias_totais = Math.round(Math.abs((ig_prim_us_data.getTime()- hoje.getTime())/(um_dia))) + ig_prim_us_sem*7+ig_prim_us_dia;

    var ig_semana_atual = Math.floor(dias_totais/7)
    var ig_dias_atuais = (dias_totais/7) - ig_semana_atual;
    var ig_dias_atuais2 = +ig_dias_atuais.toFixed(1)*10 - 4;

    // console.log(dias_totais);
    // console.log("Semanas atuais: "+ig_semana_atual);
    // console.log("Dias atuais: "+ig_dias_atuais2);

    var laudo = `                  ULTRASSONOGRAFIA OBSTÉTRICA
TÉCNICA: Exame realizado com transdutor de alta frequência e por via abdominal.\n
RELATÓRIO:

{dum e ig}

ESTÁTICA FETAL: Útero globoso e proeminente, apresentando em seu interior feto único, em situação ${situacao_texto}, apresentação ${apre_texto}, com posição de dorso à ${dorso_texto}.
O feto apresenta sinais vitais presentes, representados por movimentação ativa e batimentos cardíacos (${bcf} bpm).
Colo uterino fechado.
Cordão umbilical: Inserção fetal e placentária, preservadas. Presença de 2 artérias e uma veia. 

PLACENTA: Placenta de localização corporal ${placenta_texto}, grau ${grau_placenta_texto}, com {espessura} mm de espessura. {observacao_placenta}.

LÍQUIDO AMNIÓTICO: ILA: {ila} cm. Maior bolsão: {mb} cm (Valor normal: 2 - 8 cm).

BIOMETRIA:
Diâmetro biparietal (DBP): ${dbp} cm
Circunferência cefálica (CC): ${cc} cm
Circunferência abdominal (CA): ${cf} cm
Comprimento femural (CF): ${ca} cm
Peso fetal estimado: ${peso} g (p)

IMPRESSÃO DIAGNÓSTICA:
- Gestação tópica única, com feto em torno de ${ig_semanas} semanas e {dias} dias, calculados pela biometria.
`;

    // Variações no texto

    // console.log(laudo)
    // laudo = laudo.replace("{situacao}",situacao_texto);
    // laudo = laudo.replace("{apre}",apre_texto);
    // laudo = laudo.replace("{dorso}",dorso_texto);
    if (apre_texto == "Córmica"){
        laudo = laudo.replace("com posição de dorso à","com polo cefálico à");
    }else{
        laudo = laudo.replace("com polo cefálico à","com posição de dorso à");
    }
    if (espessura_placenta.length == 0){
        laudo = laudo.replace(", com {espessura} mm de espessura","");
    }else{
        laudo = laudo.replace("{espessura}",espessura_placenta);
    }
    // laudo = laudo.replace("{placenta}",placenta_texto);
    // laudo = laudo.replace("{grau}",grau_placenta_texto);
    if (alt_pla.length == 0){
        laudo = laudo.replace("{observacao_placenta}.","");
    }else{
        laudo = laudo.replace("{observacao_placenta}.",alt_pla);
    }
    if (ila.length == 0){
        laudo = laudo.replace(" ILA: {ila} cm.","");
    }else{
        laudo = laudo.replace("{ila}",ila);
    }
    if (maior_bol.length == 0){
        laudo = laudo.replace(" Maior bolsão: {mb} cm (Valor normal: 2 - 8 cm).","");
    }else{
        laudo = laudo.replace("{mb}",maior_bol);
    }
    if (ig_dias.length == 0 || ig_dias == "0"){
        laudo = laudo.replace(" e {dias} dias","");
    }else{
        laudo = laudo.replace("{dias}",ig_dias);
    }
    
    //incluir DUM e IG
    if (document.getElementById("incluir_dum_laudo").checked){
        laudo = laudo.replace("{dum e ig}","Idade gestacional calculada com base no 1° US: "+ig_semana_atual+" semanas e "+ig_dias_atuais2+" dias.");
    }else{
        laudo = laudo.replace("{dum e ig}","");
    }

    //gera o laudo
    document.getElementById("laudo").value = laudo; 
    
    //casos especiais
    if(placenta_texto == "Prévia"){
        document.getElementById("laudo").value += "- Placenta prévia.\n"
    }
    var maior_bol_num = document.getElementById("maior_bolsão").value;
    if(maior_bol_num < 2){
        document.getElementById("laudo").value += "- Oligoâmnio.\n"
    }else if (maior_bol_num > 8){
        document.getElementById("laudo").value += "- Polidrâmnio.\n"
    }



    //copiar para a área de trabalho  
    document.getElementById("laudo").select();
    document.execCommand("copy");


}

function limpar_laudo(){
    document.getElementById("laudo").value = "";
}

function laudo_doppler(){

    laudo();

    var laudo_dop = `
    
DOPPLER:
IP Artéria Umbilical:
IP Artéria Cerebral média:
Relação IP ACM/IP AU 
`;
document.getElementById("laudo").value += laudo_dop;

}


