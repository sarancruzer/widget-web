(function(){

    window.widgetParameters = getWidgetParameters();

    if(typeof window.angular === 'undefined'){

        var angularJS = getAngularJS();
        document.getElementsByTagName("head")[0].appendChild(angularJS);        

        
        if(angularJS.complete){
            document.write = document._write;
        }else{
            angularJS.onload = function(){
                setTimeout(function(){
                    document.write = document._write;
                }, 0);
                main();

                var style = getStyles();
                document.getElementsByTagName("head")[0].appendChild(style);
        
                var Runtime = getRuntime();
                document.getElementsByTagName("head")[0].appendChild(Runtime);
        
                var polyfills = getpolyfills();
                document.getElementsByTagName("head")[0].appendChild(polyfills);
        
                var script = getScript();
                document.getElementsByTagName("head")[0].appendChild(script);
        
                var mainScript = getMainScript();
                document.getElementsByTagName("head")[0].appendChild(mainScript);

            }
        }
    }else{

        main();

        // var bootstrapCSS = getBootstrapCSS();
        // document.getElementsByTagName("head")[0].appendChild(bootstrapCSS);

        // var styleCSS = getStyleCSS();
        // document.getElementsByTagName("head")[0].appendChild(styleCSS);

        // var jqueryJS = getJqueryJS();
        // document.getElementsByTagName("head")[0].appendChild(jqueryJS);

        // var bootstrapJS = getBootstrapJS();
        // document.getElementsByTagName("head")[0].appendChild(bootstrapJS);

        // var customJS = getCustomScriptJS();
        // document.getElementsByTagName("head")[0].appendChild(customJS);

    }

    function getWidgetParameters() {
        var url = document.currentScript.src;
        var urlSplit = url.split("?");
        var parameters = urlSplit[1] ? urlSplit[1] : null;
        parameters = parameters.split("&");
        var objectListParameters = [];
        if(parameters)
        for (var i = 0; i < parameters.length; i++) {
            var splitParam = parameters[i].split("=");
            var parameter = {
                name: splitParam[0],
                value: splitParam[1]
            };
            objectListParameters.push(parameter);
        }
        return objectListParameters;
    }

    function getAngularJS() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js";
        return script;
    }

   
    
    // function getStyles() {
    //     var link = document.createElement("link");
    //     link.rel  = 'stylesheet';
    //     link.type = 'text/css';
    //     link.href = "../angular/widget/dist/widget/styles.css";
    //     return link;
    // }

    
    // function getRuntime() {
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../angular/widget/dist/widget/runtime.a66f828dca56eeb90e02.js";
    //     return script;
    // }


    // function getpolyfills() {
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../angular/widget/dist/widget/polyfills.7a0e6866a34e280f48e7.js";
        
    //     return script;
    // }

    // function getScript() {
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../angular/widget/dist/widget/scripts.30e5019b0786e917a43c.js";
    //     return script;
    // }

    // function getMainScript() {
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../angular/widget/dist/widget/main.64a7110cf33f2b7036ee.js";
    //     return script;
    // }


    
    
    function getStyles() {
        var link = document.createElement("link");
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = "widget/styles.css"
        return link;
    }

    
    function getRuntime() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "widget/runtime.a66f828dca56eeb90e02.js";
        return script;
    }


    function getpolyfills() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "widget/polyfills.7a0e6866a34e280f48e7.js";
        
        return script;
    }

    function getScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "widget/scripts.30e5019b0786e917a43c.js";
        return script;
    }

    function getMainScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "widget/main.64a7110cf33f2b7036ee.js";
        return script;
    }

    

    function main() {
       

        buildWidgetHtml(function(){
            var widgetJS = document.createElement("script");
            widgetJS.type = "text/javascript";
            widgetJS.src = "http://localhost/widgetcheck/widgetGithubRepos.js"; //widgetURL

            
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(widgetJS);
        });


    }

    function buildWidgetHtml(callback) {
        var widgetContainer = document.getElementById("widget");
        var appDiv = document.createElement("div");
        appDiv.setAttribute("ng-controller", "MainCtrl");
        appDiv.setAttribute("id", "MainCtrl");
        widgetContainer.appendChild(appDiv);
        loadTemplate(callback);
        
    }

    function loadTemplate(callback) {

        
        var ajax = new XMLHttpRequest();
		ajax.open("GET","http://localhost/widgetcheck/widget/index.html");
		ajax.send();
		ajax.onreadystatechange=function(){
			if(ajax.readyState == 4 && ajax.status == 200){
                var response = ajax.responseText;
                
                console.log("response");
                console.log(response);
				document.getElementById("MainCtrl").innerHTML = response;
                callback();
			}
		};
    }



})();
