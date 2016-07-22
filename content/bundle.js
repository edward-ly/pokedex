"use strict";var configFunction=function(e){e.otherwise("/list/")},run=function(e,t){e.$on("$stateChangeSuccess",function(){return e.$state=t})};angular.module("pokedex",["ui.router","angularSpinner","ngResource","pokedex.layout","pokedex.list","pokedex.details"]).config(configFunction).run(run),configFunction.$inject=["$urlRouterProvider"],run.$inject=["$rootScope","$state"],angular.module("pokedex.details",[]),angular.module("pokedex.layout",[]),angular.module("pokedex.list",["ui.router"]),angular.module("pokedex").constant("FORMS_URL","https://pokeapi.co/api/v2/pokemon-form/").constant("DETAILS_URL","https://pokeapi.co/api/v2/pokemon/");var detailsConfig=function(e){e.state("list.details",{url:"/:id",template:"<div my-details></div>",controller:"DetailsController",controllerAs:"vm"})};angular.module("pokedex.details").config(detailsConfig),detailsConfig.$inject=["$stateProvider"];var DetailsController=function(e,t){function r(){e.params.id?(n.loading=!0,t.findById(e.params.id).get().$promise.then(function(e){n.pokemon=e,t.getByUrl(e.species.url).get().$promise.then(function(e){return n.species=e})})["finally"](function(){return n.loading=!1})):n.pokemon.id=void 0}var n=this;n.pokemon={},n.species={},n.getDetails=r,n.getDetails()};angular.module("pokedex.details").controller("DetailsController",DetailsController),DetailsController.$inject=["$state","Details"];var Details=function(e,t){function r(r){return e(""+t+r,null,{update:{method:"PUT"}})}function n(t){return e(t,null,{update:{method:"PUT"}})}var i={findById:r,getByUrl:n};return i};angular.module("pokedex.details").factory("Details",Details),Details.$inject=["$resource","DETAILS_URL"];var myDetails=function(){return{restrict:"EA",templateUrl:"details/directives/details.html"}};angular.module("pokedex.details").directive("myDetails",myDetails);var myHeader=function(){return{restrict:"AE",templateUrl:"layout/directives/header.html",scope:{}}};angular.module("pokedex.layout").directive("myHeader",myHeader);var listConfig=function(e){e.state("list",{url:"/list",templateUrl:"list/list.html",controller:"ListController",controllerAs:"vm"})};angular.module("pokedex.list").config(listConfig),listConfig.$inject=["$stateProvider"];var ListController=function(e,t){function r(t){o.loading=!0,e.getListByUrl(t).get().$promise.then(function(t){o.previousURL=t.previous,o.nextURL=t.next;for(var r=[],n=t.results.length,i=0;i<n;i++)e.getListByUrl(t.results[i].url).get().$promise.then(function(e){var t={};t.sprite_url=e.sprites.front_default,t.id=e.id,t.name=e.name,r.push(t)});o.list=r})["finally"](function(){return o.loading=!1})}function n(){o.previousURL&&(o.currentUrl=o.previousURL,o.refresh(o.currentUrl))}function i(){o.nextURL&&(o.currentUrl=o.nextURL,o.refresh(o.currentUrl))}var o=this;o.list=[],o.currentUrl=t,o.previousURL=null,o.nextURL=null,o.refresh=r,o.previous=n,o.next=i,o.refresh(o.currentUrl)};angular.module("pokedex.list").controller("ListController",ListController),ListController.$inject=["List","FORMS_URL"];var List=function(e){function t(t){return e(t,null,{update:{method:"PUT"}})}var r={getListByUrl:t};return r};angular.module("pokedex.list").factory("List",List),List.$inject=["$resource"];
//# sourceMappingURL=bundle.js.map
