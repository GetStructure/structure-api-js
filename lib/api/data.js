var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the data for the given query
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {object} query - The query parameters (https://api.getstructure.io/#/definitions/timeSeriesQuery)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Data for requested time range (https://api.getstructure.io/#/definitions/timeSeriesData)
   *
   * Errors:
   *  404 - Error if application was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.timeSeriesQuery = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/data/time-series-query');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['query']) { req.data = params['query']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Returns the last known data for the given attribute
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {object} query - The query parameters (https://api.getstructure.io/#/definitions/lastValueQuery)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Last known data for the requested attribute (https://api.getstructure.io/#/definitions/lastValueData)
   *
   * Errors:
   *  404 - Error if application was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.lastValueQuery = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/data/last-value-query');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['query']) { req.data = params['query']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
