/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module("app1",[]);


app.controller("PruebaController", function($scope){
    $scope.mensaje="Hola mundo";
    
    $scope.cambiar=function(){
        $scope.mensaje="Adios mundo!";
    };
});

app.controller("SeguroController",['$scope','$log',function($scope,$log){
    $scope.seguro={
    nif:"",
    nombre:"",
    ape1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numHijos:undefined,
    embarazada:false,
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  }
    
    $log.debug("Scope creado en el punto 3.2");
    
    
}]);
