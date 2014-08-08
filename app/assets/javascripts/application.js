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
//= require angular/angular
//= require angular-route/angular-route
//= require ng-polymer-elements/ng-polymer-elements
//= require qdb
//= require_tree

function searchToggle() {
  $('#search').toggle();
  if(!matches) {
    $('paper-tabs').toggle();
  } else {
    $('#menuicon').toggle();
  }
  $('#logo').toggle();
  $('#createButton').toggle();
}

function addDialogToggle() {
  document.querySelector('add-dialog').toggle();
}

document.addEventListener('polymer-ready', function() {
  var menuicon = document.getElementById('menuicon');
  var drawerPanel = document.getElementById('drawerPanel');
  menuicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
  CoreStyle.g.paperInput.focusedColor='#03a9f4';
});

document.addEventListener('core-media-change', function(e) {
  if(e.detail.matches) {
    $('#tabs').hide();
    $('#menuicon').show();
    $('#logo').text('SSE QDB');
    var drawer;
    try{
      drawer = document.querySelector('core-drawer-panel::shadow #drawer');
    } catch(err) {
      drawer = document.querySelector('#drawer')
    }
    $(drawer).css('display', 'block');
    $('core-header-panel[drawer]').css('display', 'block');
    matches = true
  } else {
    $('#tabs').show();
    $('#logo').text('');
    $('#menuicon').hide();
    var drawer;
    try{
      drawer = document.querySelector('core-drawer-panel::shadow #drawer');
    } catch(err) {
      drawer = document.querySelector('#drawer')
    }
    $(drawer).css('display', 'none');
    $('core-header-panel[drawer]').css('display', 'none');
    matches = false
  }
});
