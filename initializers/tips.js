// Usage:
// <a class="tips" title="Awesome, right?::This custom tooltip will help branding immensely!">My Tooltip Link</a>

// Sources
// http://davidwalsh.name/mootools-12-tooltips-customize

window.addEvent("domready", function() {
  //store titles and text
  $$('a.tips').each(function(element,index) {
      var content = element.get('title').split('::');
      element.store('tip:title', content[0]);
      element.store('tip:text', content[1]);
  });

  //create the tooltips
  var tips = new Tips('.tips',{
      className: 'tips',
      fixed: true,
      hideDelay: 50,
      showDelay: 50
  });

  // fading
  tips.addEvents({
      'show': function(tip) {
        tip.fade('in');
      },
      'hide': function(tip) {
        tip.fade('out');
      }
  });
})