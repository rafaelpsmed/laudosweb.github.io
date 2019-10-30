var qtosNodMd = 0;
var qtosNodMe = 0;
var qtasCarAss = 0;

function copiar_laudo(){
    //copiar para a área de trabalho  
    document.getElementById("laudo").select();
    document.execCommand("copy");
}

function apagar_laudo(){
   
    document.getElementById("laudo").value = '';
    
}

function criar_laudo(){
var laudo = `
                    ULTRASSONOGRAFIA MAMÁRIA

TÉCNINCA: Exame realizado com transdutor linear de alta frequência.

INDICAÇÃO CLÍNICA: {indi}

LAUDO:

{composicao}

{ini_md}
{mama_dir}
{fim_md}

{ini_me}
{mama_esq}
{fim_me}

{acha_extras}

IMPRESSÃO DIAGNÓSTICA:
{diag}

BI-RADS®: {br}

RECOMENDAÇÕES:
{recomedacoes
`


    if(document.getElementById("nodulos_md").checked){
        if(qtosNodMd == 1){
            var forma = document.getElementById("nod_md_forma1").options[document.getElementById("nod_md_forma1").selectedIndex].text;
            var margem = document.getElementById("nod_md_margem1").options[document.getElementById("nod_md_margem1").selectedIndex].text;
            var paralela = document.getElementById("nod_md_orientacao1").options[document.getElementById("nod_md_orientacao1").selectedIndex].text;
            var eco = document.getElementById("nod_md_eco1").options[document.getElementById("nod_md_eco1").selectedIndex].text;
            var reforco = document.getElementById("nod_md_posterior1").selectedIndex;
            if(reforco === 0){
                reforco = "sem apresentar elementos acústicos posteriores";
            }
            if(reforco === 1){
                reforco = "apresentando reforço acústico posterior";
            }
            if(reforco === 2){
                reforco = "apresentando sombra acústica posterior";
            }
            if(reforco === 3){
                reforco = "apresentando aspecto acústico posterior misto";
            }
            var medidas = document.getElementById("medida_nod_md1").value.split(" ");
            if(medidas.length === 1){
                medidas = medidas[0].toString() + " cm";
            }
            if(medidas.length === 2){
                medidas = medidas[0].toString() + " x " + medidas[1].toString() +" cm";
            }
            if(medidas.length === 3){
                medidas = medidas[0].toString() + " x " + medidas[1].toString() + " cm, distando "+medidas[2].toString()+" cm da pele"

            }
            if(medidas.length === 4){
                var nod1 = parseFloat(medidas[0]);
                var nod2 = parseFloat(medidas[1]);
                var nod3 = parseFloat(medidas[2]);
                var nodVol = parseFloat(nod1*nod2*nod3*0.523).toFixed(1);
                medidas = nod1.toString() + " x " + nod2.toString() + " x " + nod3.toString() + " cm, com volume aproximado de "+nodVol.toString()+" cm³, distando "+medidas[3].toString()+" cm da pele"

            }
            var localizacao = document.getElementById("nod_md_localizacao1").selectedIndex;
            if(localizacao === 12){
                localizacao = " em localização retroareolar";
            }else if(localizacao === 13){
                localizacao = " em localização periareolar";
            }else{
                localizacao = " localizado às "+document.getElementById("nod_md_localizacao1").options[document.getElementById("nod_md_localizacao1").selectedIndex].text;
                // console.log(localizacao.Option.value)
            }
            var tipo = document.getElementById("nod_md_tipo1").options[document.getElementById("nod_md_tipo1").selectedIndex].text;

            
            laudo = laudo.replace("{mama_dir}","Parênquima mamário direito apresentando a seguinte imagem nodular:\n{nod_md}");
            laudo = laudo.replace("{nod_md}","Imagem nodular "+forma+", "+margem+", de orientação "+paralela+" à pele, de conteúdo "+eco+", "+reforco+", medindo "+medidas+","+localizacao+", sugestiva de "+tipo+".\n{nod_md}");
            
        }

        if(qtosNodMd > 1){
            for(i=1;i<=qtosNodMd;i++){
                var forma = document.getElementById("nod_md_forma"+i).options[document.getElementById("nod_md_forma"+i).selectedIndex].text;
                var margem = document.getElementById("nod_md_margem"+i).options[document.getElementById("nod_md_margem"+i).selectedIndex].text;
                var paralela = document.getElementById("nod_md_orientacao"+i).options[document.getElementById("nod_md_orientacao"+i).selectedIndex].text;
                var eco = document.getElementById("nod_md_eco"+i).options[document.getElementById("nod_md_eco"+i).selectedIndex].text;
                var reforco = document.getElementById("nod_md_posterior"+i).selectedIndex;
                if(reforco === 0){
                    reforco = "sem apresentar elementos acústicos posteriores";
                }
                if(reforco === 1){
                    reforco = "apresentando reforço acústico posterior";
                }
                if(reforco === 2){
                    reforco = "apresentando sombra acústica posterior";
                }
                if(reforco === 3){
                    reforco = "apresentando aspecto acústico posterior misto";
                }
                var medidas = document.getElementById("medida_nod_md"+i).value.split(" ");
                if(medidas.length === 1){
                    medidas = medidas[0].toString() + " cm";
                }
                if(medidas.length === 2){
                    medidas = medidas[0].toString() + " x " + medidas[1].toString() +" cm";
                }
                if(medidas.length === 3){
                    medidas = medidas[0].toString() + " x " + medidas[1].toString() + " cm, distando "+medidas[2].toString()+" cm da pele"
    
                }
                if(medidas.length === 4){
                    var nod1 = parseFloat(medidas[0]);
                    var nod2 = parseFloat(medidas[1]);
                    var nod3 = parseFloat(medidas[2]);
                    var nodVol = parseFloat(nod1*nod2*nod3*0.523).toFixed(1);
                    medidas = nod1.toString() + " x " + nod2.toString() + " x " + nod3.toString() + " cm, com volume aproximado de "+nodVol.toString()+" cm³, distando "+medidas[3].toString()+" cm da pele"
    
                }
                var localizacao = document.getElementById("nod_md_localizacao"+i).selectedIndex;
                if(localizacao === 12){
                    localizacao = " em localização retroareolar";
                }else if(localizacao === 13){
                    localizacao = " em localização periareolar";
                }else{
                    localizacao = " localizado às "+document.getElementById("nod_md_localizacao"+i).options[document.getElementById("nod_md_localizacao"+i).selectedIndex].text;
                    // console.log(localizacao.Option.value)
                }
                var tipo = document.getElementById("nod_md_tipo"+i).options[document.getElementById("nod_md_tipo"+i).selectedIndex].text;
    
                
                laudo = laudo.replace("{mama_dir}","Parênquima mamário direito apresentando as seguintes imagens nodulares:\n{nod_md}");
                laudo = laudo.replace("{nod_md}","N"+i+": Imagem nodular "+forma+", "+margem+", de orientação "+paralela+" à pele, de conteúdo "+eco+", "+reforco+", medindo "+medidas+","+localizacao+", sugestiva de "+tipo+".\n{nod_md}");

            }
        }
    }


    if(document.getElementById("nodulos_me").checked){
        if(qtosNodMe == 1){
            var forma = document.getElementById("nod_me_forma1").options[document.getElementById("nod_me_forma1").selectedIndex].text;
            var margem = document.getElementById("nod_me_margem1").options[document.getElementById("nod_me_margem1").selectedIndex].text;
            var paralela = document.getElementById("nod_me_orientacao1").options[document.getElementById("nod_me_orientacao1").selectedIndex].text;
            var eco = document.getElementById("nod_me_eco1").options[document.getElementById("nod_me_eco1").selectedIndex].text;
            var reforco = document.getElementById("nod_me_posterior1").selectedIndex;
            if(reforco === 0){
                reforco = "sem apresentar elementos acústicos posteriores";
            }
            if(reforco === 1){
                reforco = "apresentando reforço acústico posterior";
            }
            if(reforco === 2){
                reforco = "apresentando sombra acústica posterior";
            }
            if(reforco === 3){
                reforco = "apresentando aspecto acústico posterior misto";
            }
            var medidas = document.getElementById("medida_nod_me1").value.split(" ");
            if(medidas.length === 1){
                medidas = medidas[0].toString() + " cm";
            }
            if(medidas.length === 2){
                medidas = medidas[0].toString() + " x " + medidas[1].toString() +" cm";
            }
            if(medidas.length === 3){
                medidas = medidas[0].toString() + " x " + medidas[1].toString() + " cm, distando "+medidas[2].toString()+" cm da pele"

            }
            if(medidas.length === 4){
                var nod1 = parseFloat(medidas[0]);
                var nod2 = parseFloat(medidas[1]);
                var nod3 = parseFloat(medidas[2]);
                var nodVol = parseFloat(nod1*nod2*nod3*0.523).toFixed(1);
                medidas = nod1.toString() + " x " + nod2.toString() + " x " + nod3.toString() + " cm, com volume aproximado de "+nodVol.toString()+" cm³, distando "+medidas[3].toString()+" cm da pele"

            }
            var localizacao = document.getElementById("nod_me_localizacao1").selectedIndex;
            if(localizacao === 12){
                localizacao = " em localização retroareolar";
            }else if(localizacao === 13){
                localizacao = " em localização periareolar";
            }else{
                localizacao = " localizado às "+document.getElementById("nod_me_localizacao1").options[document.getElementById("nod_me_localizacao1").selectedIndex].text;
                // console.log(localizacao.Option.value)
            }
            var tipo = document.getElementById("nod_me_tipo1").options[document.getElementById("nod_me_tipo1").selectedIndex].text;

            
            laudo = laudo.replace("{mama_esq}","Parênquima mamário esquerdo apresentando a seguinte imagem nodular:\n{nod_me}");
            laudo = laudo.replace("{nod_me}","Imagem nodular "+forma+", "+margem+", de orientação "+paralela+" à pele, de conteúdo "+eco+", "+reforco+", medindo "+medidas+","+localizacao+", sugestiva de "+tipo+".\n{nod_me}");
            
        }

        if(qtosNodMe > 1){
            for(i=1;i<=qtosNodMe;i++){
                var forma = document.getElementById("nod_me_forma"+i).options[document.getElementById("nod_me_forma"+i).selectedIndex].text;
                var margem = document.getElementById("nod_me_margem"+i).options[document.getElementById("nod_me_margem"+i).selectedIndex].text;
                var paralela = document.getElementById("nod_me_orientacao"+i).options[document.getElementById("nod_me_orientacao"+i).selectedIndex].text;
                var eco = document.getElementById("nod_me_eco"+i).options[document.getElementById("nod_me_eco"+i).selectedIndex].text;
                var reforco = document.getElementById("nod_me_posterior"+i).selectedIndex;
                if(reforco === 0){
                    reforco = "sem apresentar elementos acústicos posteriores";
                }
                if(reforco === 1){
                    reforco = "apresentando reforço acústico posterior";
                }
                if(reforco === 2){
                    reforco = "apresentando sombra acústica posterior";
                }
                if(reforco === 3){
                    reforco = "apresentando aspecto acústico posterior misto";
                }
                var medidas = document.getElementById("medida_nod_me"+i).value.split(" ");
                if(medidas.length === 1){
                    medidas = medidas[0].toString() + " cm";
                }
                if(medidas.length === 2){
                    medidas = medidas[0].toString() + " x " + medidas[1].toString() +" cm";
                }
                if(medidas.length === 3){
                    medidas = medidas[0].toString() + " x " + medidas[1].toString() + " cm, distando "+medidas[2].toString()+" cm da pele"
    
                }
                if(medidas.length === 4){
                    var nod1 = parseFloat(medidas[0]);
                    var nod2 = parseFloat(medidas[1]);
                    var nod3 = parseFloat(medidas[2]);
                    var nodVol = parseFloat(nod1*nod2*nod3*0.523).toFixed(1);
                    medidas = nod1.toString() + " x " + nod2.toString() + " x " + nod3.toString() + " cm, com volume aproximado de "+nodVol.toString()+" cm³, distando "+medidas[3].toString()+" cm da pele"
    
                }
                var localizacao = document.getElementById("nod_me_localizacao"+i).selectedIndex;
                if(localizacao === 12){
                    localizacao = " em localização retroareolar";
                }else if(localizacao === 13){
                    localizacao = " em localização periareolar";
                }else{
                    localizacao = " localizado às "+document.getElementById("nod_me_localizacao"+i).options[document.getElementById("nod_me_localizacao"+i).selectedIndex].text;
                    // console.log(localizacao.Option.value)
                }
                var tipo = document.getElementById("nod_me_tipo"+i).options[document.getElementById("nod_me_tipo"+i).selectedIndex].text;
    
                
                laudo = laudo.replace("{mama_esq}","Parênquima mamário esquerdo apresentando as seguintes imagens nodulares:\n{nod_me}");
                laudo = laudo.replace("{nod_me}","N"+i+": Imagem nodular "+forma+", "+margem+", de orientação "+paralela+" à pele, de conteúdo "+eco+", "+reforco+", medindo "+medidas+","+localizacao+", sugestiva de "+tipo+".\n{nod_me}");

            }

        }
    }

    //achar nódulos e cistos no texto da mama esquerda
    var mamaEsqIni = laudo.indexOf("{ini_me}");
    var mamaEsqFim = laudo.indexOf("{fim_me}");
    var mamaEsq = laudo.substring(mamaEsqIni,mamaEsqFim);
    var contarCistosMe = (mamaEsq.match(/Cisto simples/g) || []).length;
    var contarNodMe = (mamaEsq.match(/Nódulo sólido/g) || []).length;
    var contarCistoEspessoMe = (mamaEsq.match(/Cisto espesso/g) || []).length;
    var contarCistoComplexoMe = (mamaEsq.match(/Cisto complexo/g) || []).length;
    if(contarCistosMe === 1){
        laudo = laudo.replace("{diag}","- Cisto simples em mama esquerda acima descrito.\n{diag}");
    }else if(contarCistosMe > 1){
        laudo = laudo.replace("{diag}","- Cistos simples em mama esquerda acima descritos.\n{diag}");
    }
    if(contarNodMe === 1){
        laudo = laudo.replace("{diag}","- Nódulo sólido em mama esquerda acima descrito.\n{diag}");
    }else if(contarNodMe > 1){
        laudo = laudo.replace("{diag}","- Nódulos sólidos em mama esquerda acima descritos.\n{diag}");
    }
    if(contarCistoEspessoMe === 1){
        laudo = laudo.replace("{diag}","- Cisto espesso em mama esquerda acima descrito.\n{diag}");
    }else if(contarCistoEspessoMe > 1){
        laudo = laudo.replace("{diag}","- Cistos espessos em mama esquerda acima descritos.\n{diag}");
    }
    if(contarCistoComplexoMe === 1){
        laudo = laudo.replace("{diag}","- Cisto complexo em mama esquerda acima descrito.\n{diag}");
    }else if(contarCistoComplexoMe > 1){
        laudo = laudo.replace("{diag}","- Cistos complexos em mama esquerda acima descritos.\n{diag}");
    }

    //achar nódulos e cistos no texto da mama direita
    var mamaDirIni = laudo.indexOf("{ini_md}");
    var mamaDirFim = laudo.indexOf("{fim_md}");
    var mamaDir = laudo.substring(mamaDirIni,mamaDirFim);
    var contarCistosMd = (mamaDir.match(/Cisto simples/g) || []).length;
    var contarNodMd = (mamaDir.match(/Nódulo sólido/g) || []).length;
    var contarCistoEspessoMd = (mamaDir.match(/Cisto espesso/g) || []).length;
    var contarCistoComplexoMd = (mamaDir.match(/Cisto complexo/g) || []).length;
    if(contarCistosMd === 1){
        laudo = laudo.replace("{diag}","- Cisto simples em mama direita acima descrito.\n{diag}");
    }else if(contarCistosMd > 1){
        laudo = laudo.replace("{diag}","- Cistos simples em mama direita acima descritos.\n{diag}");
    }
    if(contarNodMd === 1){
        laudo = laudo.replace("{diag}","- Nódulo sólido em mama direita acima descrito.\n{diag}");
    }else if(contarNodMd > 1){
        laudo = laudo.replace("{diag}","- Nódulos sólidos em mama direita acima descritos.\n{diag}");
    }
    if(contarCistoEspessoMd === 1){
        laudo = laudo.replace("{diag}","- Cisto espesso em mama direita acima descrito.\n{diag}");
    }else if(contarCistoEspessoMd > 1){
        laudo = laudo.replace("{diag}","- Cistos espessos em mama direita acima descritos.\n{diag}");
    }
    if(contarCistoComplexoMd === 1){
        laudo = laudo.replace("{diag}","- Cisto complexo em mama direita acima descrito.\n{diag}");
    }else if(contarCistoComplexoMd > 1){
        laudo = laudo.replace("{diag}","- Cistos complexos em mama direita acima descritos.\n{diag}");
    }
   
    document.getElementById("laudo").value = laudo; 

    }

   


function volume(){

    // falta fazer 2 medidas e trocar vírgula por ponto
    var texto = document.getElementById("laudo").value;
    var regex = /\d+[\,\.]\d+\s\d+[\,\.]\d+\s\d+[\,\.]\d+/gm;

    var match = regex.exec(texto);
    // console.log(match);
    var nums = match[0].replace(/,/,".");
    console.log(nums);
    //trocar , por .
    var trocar = nums.replace(',','.');
    console.log(trocar);
    var numeros = nums.split(" ");

    //ordenar do maior pro menor
    // var ordem = numeros.sort(function(a, b){return a-b});
    // var ordemRev =  numeros.reverse();

    let num1 = parseFloat(numeros[0]);
    let num2 = parseFloat(numeros[1]);
    let num3 = parseFloat(numeros[2]);
    let volume = (num1*num2*num3*0.523).toFixed(1);//arredodar para uma casa decimal    
    console.log(volume.toString()); 
    texto = texto.replace(numeros[0]+" "+numeros[1]+" "+numeros[2]+" ",num1+" x "+num2+" x "+num3+" cm, com volume estimado em "+volume.toString()+" cm³.")
    
    document.getElementById("laudo").value = texto;

}

function criar_nodulos_md(){

    if(document.getElementById("nodulos_md").checked){

        qtosNodMd++; 
        var container = document.getElementById("nodulos_md_desc"); 

        container.appendChild(document.createTextNode("N"+(qtosNodMd)+": "));  
        
        // como criar as labels
        var tipoLabl = document.createElement("label");
        tipoLabl.setAttribute("for","nod_md_tipo"+(qtosNodMd));
        tipoLabl.innerHTML = "Tipo: "
        container.appendChild(tipoLabl);

        // como criar os selects
        var tipo = document.createElement("select");
        tipo.setAttribute("onchange","");
        tipo.options[tipo.options.length] = new Option('Cisto simples');
        tipo.options[tipo.options.length] = new Option('Nódulo sólido');
        tipo.options[tipo.options.length] = new Option('Cisto espesso');
        tipo.options[tipo.options.length] = new Option('Cisto complexo');
        tipo.id = "nod_md_tipo"+(qtosNodMd);        
        container.appendChild(tipo);



        

        // como criar as labels
        var formaLabl = document.createElement("label");
        formaLabl.setAttribute("for","nod_md_forma"+(qtosNodMd));
        formaLabl.innerHTML = "Forma: "
        container.appendChild(formaLabl);

        // como criar os selects
        var forma = document.createElement("select");
        forma.setAttribute("onchange","");
        forma.options[forma.options.length] = new Option('Oval');
        forma.options[forma.options.length] = new Option('Redondo');
        forma.options[forma.options.length] = new Option('Irregular');
        forma.id = "nod_md_forma"+(qtosNodMd);        
        container.appendChild(forma);

        // como criar as labels
        var margemLabl = document.createElement("label");
        margemLabl.setAttribute("for","nod_md_margem"+(qtosNodMd));
        margemLabl.innerHTML = "Margem: "
        container.appendChild(margemLabl);

        // como criar os selects
        var margem = document.createElement("select");
        margem.setAttribute("onchange","");
        margem.options[margem.options.length] = new Option('Circunscrita');
        margem.options[margem.options.length] = new Option('Indistinta');
        margem.options[margem.options.length] = new Option('Angular');
        margem.options[margem.options.length] = new Option('Microlobulada');
        margem.options[margem.options.length] = new Option('Espiculada');
        margem.id = "nod_md_margem"+(qtosNodMd);        
        container.appendChild(margem);

        // como criar as labels
        var orientacaoLabl = document.createElement("label");
        orientacaoLabl.setAttribute("for","nod_md_orientacao"+(qtosNodMd));
        orientacaoLabl.innerHTML = "Orientação: "
        container.appendChild(orientacaoLabl);

        // como criar os selects
        var orientacao = document.createElement("select");
        orientacao.setAttribute("onchange","");
        orientacao.options[orientacao.options.length] = new Option('Paralela');
        orientacao.options[orientacao.options.length] = new Option('Não paralela');
        orientacao.id = "nod_md_orientacao"+(qtosNodMd);        
        container.appendChild(orientacao);

        // como criar as labels
        var ecoLabl = document.createElement("label");
        ecoLabl.setAttribute("for","nod_md_eco"+(qtosNodMd));
        ecoLabl.innerHTML = "Eco: "
        container.appendChild(ecoLabl);

        // como criar os selects
        var eco = document.createElement("select");
        eco.setAttribute("onchange","");
        eco.options[eco.options.length] = new Option('Anecóico');
        eco.options[eco.options.length] = new Option('Hiperecóico');
        eco.options[eco.options.length] = new Option('Sólido-Cístico');
        eco.options[eco.options.length] = new Option('Hipoecóico');
        eco.options[eco.options.length] = new Option('Isoecóico');
        eco.options[eco.options.length] = new Option('Heterogêneo');
        eco.id = "nod_md_eco"+(qtosNodMd);        
        container.appendChild(eco);

        // como criar as labels
        var posteriorLabl = document.createElement("label");
        posteriorLabl.setAttribute("for","nod_md_posterior"+(qtosNodMd));
        posteriorLabl.innerHTML = "Posterior: "
        container.appendChild(posteriorLabl);

        // como criar os selects
        var posterior = document.createElement("select");
        posterior.setAttribute("onchange","");
        posterior.options[posterior.options.length] = new Option('Ausente');
        posterior.options[posterior.options.length] = new Option('Reforço');
        posterior.options[posterior.options.length] = new Option('Sombra');
        posterior.options[posterior.options.length] = new Option('Misto');
        posterior.id = "nod_md_posterior"+(qtosNodMd);        
        container.appendChild(posterior);

        // como criar as labels
        var medida = document.createElement("label");
        medida.setAttribute("for","nod_md_medida"+(qtosNodMd));
        medida.innerHTML = " Medidas: "
        container.appendChild(medida);

        // criar o input medidas
        var medida_nod_md = document.createElement("input"); 
        medida_nod_md.id = "medida_nod_md"+(qtosNodMd);  
        container.appendChild(medida_nod_md); 

        // como criar as labels
        var localizacaoLabl = document.createElement("label");
        localizacaoLabl.setAttribute("for","nod_md_localizacao"+(qtosNodMd));
        localizacaoLabl.innerHTML = "Localização: "
        container.appendChild(localizacaoLabl);

        // como criar os selects
        var localizacao = document.createElement("select");
        localizacao.setAttribute("onchange","");
        localizacao.options[localizacao.options.length] = new Option('1/2 horas');
        localizacao.options[localizacao.options.length] = new Option('2/3 horas');
        localizacao.options[localizacao.options.length] = new Option('3/4 horas');
        localizacao.options[localizacao.options.length] = new Option('4/5 horas');
        localizacao.options[localizacao.options.length] = new Option('5/6 horas');
        localizacao.options[localizacao.options.length] = new Option('6/7 horas');
        localizacao.options[localizacao.options.length] = new Option('7/8 horas');
        localizacao.options[localizacao.options.length] = new Option('8/9 horas');
        localizacao.options[localizacao.options.length] = new Option('9/10 horas');
        localizacao.options[localizacao.options.length] = new Option('10/11 horas');
        localizacao.options[localizacao.options.length] = new Option('11/12 horas');
        localizacao.options[localizacao.options.length] = new Option('12/1 horas');
        localizacao.options[localizacao.options.length] = new Option('Retroareolar');
        localizacao.options[localizacao.options.length] = new Option('Periareolar');
        localizacao.id = "nod_md_localizacao"+(qtosNodMd);        
        container.appendChild(localizacao);
       
    //    falta ver como remover o nódulo
        // como criar as labels
        var removerNod = document.createElement("input");
        removerNod.type = 'button';
        removerNod.value = 'Remover';
        removerNod.setAttribute("onclick","removerNod("+(qtosNodMd)+")");
        
        // removerNod.onclick = container.removeChild(posterior)
        
        container.appendChild(removerNod);

        container.appendChild(document.createElement("br"));


                /**************************** */
        // todo: vê se escolhendo um tipo todos mudam - falta fazer

       


    

    }       
        
       

}

function removerNod(nod){
    var element = document.getElementById("nod_md_localizacao"+nod);
    var element1 = document.getElementById("medida_nod_md"+nod);
    element.parentNode.removeChild(element);
    element1.parentNode.removeChild(element1);
    qtosNodMd--;
    console.log(qtosNodMd);

}


       



function criar_nodulos_me(){

    if(document.getElementById("nodulos_me").checked){

        qtosNodMe++; 
        var container = document.getElementById("nodulos_me_desc"); 

        container.appendChild(document.createTextNode("N"+(qtosNodMe)+": "));      
        

        // como criar as labels
        var formaLabl = document.createElement("label");
        formaLabl.setAttribute("for","nod_me_forma"+(qtosNodMe));
        formaLabl.innerHTML = "Forma: "
        container.appendChild(formaLabl);

        // como criar os selects
        var forma = document.createElement("select");
        forma.setAttribute("onchange","");
        forma.options[forma.options.length] = new Option('Oval');
        forma.options[forma.options.length] = new Option('Redondo');
        forma.options[forma.options.length] = new Option('Irregular');
        forma.id = "nod_me_forma"+(qtosNodMe);        
        container.appendChild(forma);

        // como criar as labels
        var margemLabl = document.createElement("label");
        margemLabl.setAttribute("for","nod_me_margem"+(qtosNodMe));
        margemLabl.innerHTML = "Margem: "
        container.appendChild(margemLabl);

        // como criar os selects
        var margem = document.createElement("select");
        margem.setAttribute("onchange","");
        margem.options[margem.options.length] = new Option('Circunscrita');
        margem.options[margem.options.length] = new Option('Indistinta');
        margem.options[margem.options.length] = new Option('Angular');
        margem.options[margem.options.length] = new Option('Microlobulada');
        margem.options[margem.options.length] = new Option('Espiculada');
        margem.id = "nod_me_margem"+(qtosNodMe);        
        container.appendChild(margem);

        // como criar as labels
        var orientacaoLabl = document.createElement("label");
        orientacaoLabl.setAttribute("for","nod_me_orientacao"+(qtosNodMe));
        orientacaoLabl.innerHTML = "Orientação: "
        container.appendChild(orientacaoLabl);

        // como criar os selects
        var orientacao = document.createElement("select");
        orientacao.setAttribute("onchange","");
        orientacao.options[orientacao.options.length] = new Option('Paralela');
        orientacao.options[orientacao.options.length] = new Option('Não paralela');
        orientacao.id = "nod_me_orientacao"+(qtosNodMe);        
        container.appendChild(orientacao);

        // como criar as labels
        var ecoLabl = document.createElement("label");
        ecoLabl.setAttribute("for","nod_me_eco"+(qtosNodMe));
        ecoLabl.innerHTML = "Eco: "
        container.appendChild(ecoLabl);

        // como criar os selects
        var eco = document.createElement("select");
        eco.setAttribute("onchange","");
        eco.options[eco.options.length] = new Option('Anecóico');
        eco.options[eco.options.length] = new Option('Hiperecóico');
        eco.options[eco.options.length] = new Option('Sólido-Cístico');
        eco.options[eco.options.length] = new Option('Hipoecóico');
        eco.options[eco.options.length] = new Option('Isoecóico');
        eco.options[eco.options.length] = new Option('Heterogêneo');
        eco.id = "nod_me_eco"+(qtosNodMe);        
        container.appendChild(eco);

        // como criar as labels
        var posteriorLabl = document.createElement("label");
        posteriorLabl.setAttribute("for","nod_me_posterior"+(qtosNodMe));
        posteriorLabl.innerHTML = "Posterior: "
        container.appendChild(posteriorLabl);

        // como criar os selects
        var posterior = document.createElement("select");
        posterior.setAttribute("onchange","");
        posterior.options[posterior.options.length] = new Option('Ausente');
        posterior.options[posterior.options.length] = new Option('Reforço');
        posterior.options[posterior.options.length] = new Option('Sombra');
        posterior.options[posterior.options.length] = new Option('Misto');
        posterior.id = "nod_me_posterior"+(qtosNodMe);        
        container.appendChild(posterior);

        // como criar as labels
        var tipoLabl = document.createElement("label");
        tipoLabl.setAttribute("for","nod_me_tipo"+(qtosNodMe));
        tipoLabl.innerHTML = "Tipo: "
        container.appendChild(tipoLabl);

        // como criar os selects
        var tipo = document.createElement("select");
        tipo.setAttribute("onchange","");
        tipo.options[tipo.options.length] = new Option('Cisto simples');
        tipo.options[tipo.options.length] = new Option('Nódulo sólido');
        tipo.options[tipo.options.length] = new Option('Cisto espesso');
        tipo.options[tipo.options.length] = new Option('Cisto complexo');
        tipo.id = "nod_me_tipo"+(qtosNodMe);        
        container.appendChild(tipo);

        // como criar as labels
        var medida = document.createElement("label");
        medida.setAttribute("for","nod_me_medida"+(qtosNodMe));
        medida.innerHTML = " Medidas: "
        container.appendChild(medida);

        // criar o input medidas
        var medida_nod_me = document.createElement("input"); 
        medida_nod_me.id = "medida_nod_me"+(qtosNodMe);  
        container.appendChild(medida_nod_me); 

        // como criar as labels
        var localizacaoLabl = document.createElement("label");
        localizacaoLabl.setAttribute("for","nod_me_localizacao"+(qtosNodMe));
        localizacaoLabl.innerHTML = "Localização: "
        container.appendChild(localizacaoLabl);

        // como criar os selects
        var localizacao = document.createElement("select");
        localizacao.setAttribute("onchange","");
        localizacao.options[localizacao.options.length] = new Option('1/2 horas');
        localizacao.options[localizacao.options.length] = new Option('2/3 horas');
        localizacao.options[localizacao.options.length] = new Option('3/4 horas');
        localizacao.options[localizacao.options.length] = new Option('4/5 horas');
        localizacao.options[localizacao.options.length] = new Option('5/6 horas');
        localizacao.options[localizacao.options.length] = new Option('6/7 horas');
        localizacao.options[localizacao.options.length] = new Option('7/8 horas');
        localizacao.options[localizacao.options.length] = new Option('8/9 horas');
        localizacao.options[localizacao.options.length] = new Option('9/10 horas');
        localizacao.options[localizacao.options.length] = new Option('10/11 horas');
        localizacao.options[localizacao.options.length] = new Option('11/12 horas');
        localizacao.options[localizacao.options.length] = new Option('12/1 horas');
        localizacao.options[localizacao.options.length] = new Option('Retroareolar');
        localizacao.options[localizacao.options.length] = new Option('Periareolar');
        localizacao.id = "nod_me_localizacao"+(qtosNodMe);        
        container.appendChild(localizacao);
       
    //    falta ver como remover o nódulo
        // como criar as labels
        var removerNod = document.createElement("input");
        removerNod.type = 'button';
        removerNod.value = 'Remover';
        
        // removerNod.onclick = container.removeChild(posterior)
        
        container.appendChild(removerNod);

        container.appendChild(document.createElement("br"));
    }       
        
       

}

function caracteristicas_md(){
    if(document.getElementById("carAss_md").checked){



        // var reforco = document.getElementById("nod_me_posterior"+i).selectedIndex;
        // if(reforco === 0){
        //     reforco = "sem apresentar elementos acústicos posteriores";
        // }
        qtasCarAss++
        var caracte = document.getElementById("carAss_md_select").selectedIndex;
        console.log(caracte)
        var container = document.getElementById("carAss_md_desc"); 
        if(caracte === 0){
            container.appendChild(document.createTextNode("Distorção arquitetural: "));         

            // como criar as labels
            var formaLabl = document.createElement("label");
            formaLabl.setAttribute("for","carAss_md"+(qtasCarAss));
            formaLabl.innerHTML = "Localização: "
            container.appendChild(formaLabl);
    
            // como criar os selects
            var forma = document.createElement("select");
            forma.setAttribute("onchange","");
            forma.options[forma.options.length] = new Option('QSL');
            forma.options[forma.options.length] = new Option('QSM');
            forma.options[forma.options.length] = new Option('QIL');
            forma.options[forma.options.length] = new Option('QIM');
            forma.options[forma.options.length] = new Option('UUQQSS');
            forma.options[forma.options.length] = new Option('UUQQLL');
            forma.options[forma.options.length] = new Option('UUQQII');
            forma.options[forma.options.length] = new Option('UUQQMM');
            forma.id = "dist_arq_md"+(qtasCarAss);        
            container.appendChild(forma);

            container.appendChild(document.createElement("br"));

        }
        if(caracte === 1){
            container.appendChild(document.createTextNode("Ectasia ductal sem material"));        


            container.appendChild(document.createElement("br"));

        }
        if(caracte === 2){
            container.appendChild(document.createTextNode("Ectasia ductal com material"));        


            container.appendChild(document.createElement("br"));

        }
        if(caracte === 3){
            container.appendChild(document.createTextNode("Espessamento da pele em: "));   
            
            // como criar os selects
            var espessamento_pele = document.createElement("select");
            espessamento_pele.setAttribute("onchange","");
            espessamento_pele.options[espessamento_pele.options.length] = new Option('QSL');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('QSM');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('QIL');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('QIM');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('UUQQSS');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('UUQQLL');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('UUQQII');
            espessamento_pele.options[espessamento_pele.options.length] = new Option('UUQQMM');
            espessamento_pele.id = "espessamento_pele_md"+(qtasCarAss);        
            container.appendChild(espessamento_pele);


            container.appendChild(document.createElement("br"));

        }
        if(caracte === 4){
            container.appendChild(document.createTextNode("Retração da pele em: "));   
            
            // como criar os selects
            var retracao_pele = document.createElement("select");
            retracao_pele.setAttribute("onchange","");
            retracao_pele.options[retracao_pele.options.length] = new Option('QSL');
            retracao_pele.options[retracao_pele.options.length] = new Option('QSM');
            retracao_pele.options[retracao_pele.options.length] = new Option('QIL');
            retracao_pele.options[retracao_pele.options.length] = new Option('QIM');
            retracao_pele.options[retracao_pele.options.length] = new Option('UUQQSS');
            retracao_pele.options[retracao_pele.options.length] = new Option('UUQQLL');
            retracao_pele.options[retracao_pele.options.length] = new Option('UUQQII');
            retracao_pele.options[retracao_pele.options.length] = new Option('UUQQMM');
            retracao_pele.id = "retracao_pele_md"+(qtasCarAss);        
            container.appendChild(retracao_pele);


            container.appendChild(document.createElement("br"));

        }

        
        
        



    }
}





