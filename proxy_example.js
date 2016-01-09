var source = Backbone.Radio.channel('source');
var proxy = Backbone.Radio.channel('proxy');

// 1 to 1 mapping
proxy.proxyEvents(source, {
  'source:foo': 'proxy:foo'
});

proxy.on('proxy:foo', console.log);
source.trigger('source:foo', 1);  // triggers proxy:foo on proxy, prints 1

//mapping with prefixing, probably too opinionated for most use cases
proxy.proxyEvents(source, ['bar'], {
  srcPrefix: 'source',
  proxyPrefix: 'proxy'
});

proxy.on('proxy:bar', console.log);
source.trigger('source:foo', 1);  // triggers proxy:bar on proxy, prints 1