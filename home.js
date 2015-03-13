seajs.production = false;
seajs.debug = true;

seajs.config({
  base:  seajs.production ? "/dist" : "",
});

var prefix = seajs.production ? "helloworld/0.1.0/" : "./";

seajs.use(prefix + "index.js");