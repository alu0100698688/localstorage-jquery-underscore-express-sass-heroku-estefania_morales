
var expect = chai.expect;

describe("CSV", function() {

  it("original correcto", function(){
    var cadena = '"hola"';
    var r = calculate(cadena);
    expect(r[0].value[0]).to.equal('hola');
  });

});
