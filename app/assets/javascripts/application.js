// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require platform/platform
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore/underscore
//= require angular/angular
//= require custom-polymer-mappings
//= require ng-polymer-elements/ng-polymer-elements
//= require angular-ui-router/release/angular-ui-router
//= require qdb
//= require home/home
//= require tags/tags
//= require quotes/quotes
//= require admin/admin
//= require_tree

function searchToggle() {
  document.querySelector('#search').classList.toggle('none');
  if(!matches) {
    document.querySelector('paper-tabs').classList.toggle('none');
  } else {
    document.querySelector('#menuicon').classList.toggle('none');
  }
  document.querySelector('#logo').classList.toggle('none');
  document.querySelector('#createButton').classList.toggle('none');
}

function addDialogToggle() {
  document.querySelector('#addDialog').toggle();
}

document.addEventListener('polymer-ready', function() {
  var menuicon = document.getElementById('menuicon');
  var drawerPanel = document.getElementById('drawerPanel');
  menuicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
  CoreStyle.g.paperInput.focusedColor='#03a9f4';
  var input = document.querySelector('#search');
  input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      input.fire('enter-pressed');
    }
  });
});

document.addEventListener('core-media-change', function(e) {
  if(!document.querySelector('#search').classList.contains('none')){
    searchToggle();
  }
  if(e.detail.matches) {
    document.querySelector('#tabs').classList.add('none');
    document.querySelector('#menuicon').classList.remove('none');
    document.querySelector('#logo').innerHTML = 'SSE QDB';
    try{
      var drawer = document.querySelector('core-drawer-panel::shadow #drawer');
      $(drawer).show();
    } catch(err) {
      document.querySelector('core-drawer-panel').$.drawer.classList.remove('none');
    }
    document.querySelector('core-header-panel[drawer]').classList.remove('none');
    matches = true
  } else {
    document.querySelector('#tabs').classList.remove('none');
    document.querySelector('#logo').innerHTML = '';
    document.querySelector('#menuicon').classList.add('none');
    try{
      var drawer = document.querySelector('core-drawer-panel::shadow #drawer');
      $(drawer).hide();
    } catch(err) {
       document.querySelector('core-drawer-panel').$.drawer.classList.add('none');
    }
    document.querySelector('core-header-panel[drawer]').classList.add('none');
    matches = false
  }
});

