
$(document).ready(function() {
	//realiza a contagem de artigos
	var cont = 1;
	$('#cont*').each(function(){
		$(this).text(cont);
		cont = cont + 1;
	});
	
	//realiza grafico de publicacoes
	var mapa = {};
	var x_valores = [];
	var y_valores = [];
	var titulo = '# of publications (Total: ';
        titulo = titulo.concat((cont-1));
        titulo = titulo.concat(')');
	$('#year*').each(function(){
		$(this).text(cont);
		if($(this).val() in mapa)
		    mapa[$(this).val()] = mapa[$(this).val()] + 1;
		else
		    mapa[$(this).val()] = 1;
	});
	
	for(valor in mapa){
	    x_valores.push(valor);
	    y_valores.push(mapa[valor]);
	}
	
	var trace1 = {
      x: x_valores, 
      y: y_valores, 
      name: titulo, 
      marker: {color: 'rgb(55, 83, 109)'}, 
      type: 'bar',
      text: y_valores.map(String),
      textposition: 'auto',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      },
      hoverinfo: 'none'
    };

    var data = [trace1];

    var layout = {
      title: titulo,
      xaxis: {tickfont: {
          size: 14, 
          color: 'rgb(107, 107, 107)'
        },
        tickangle: -45,
        dtick: 1 }, 
      yaxis: {
        title: '#',
        titlefont: {
          size: 16, 
          color: 'rgb(107, 107, 107)'
        }, 
        tickfont: {
          size: 14, 
          color: "rgb(107, 107, 107)"
        }
      }
    };

    Plotly.newPlot('graficoPublicacoes', data, layout, {responsive: true, displayModeBar: false});
});
