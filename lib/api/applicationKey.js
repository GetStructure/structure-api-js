var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Retrieves information on an applicationKey
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} applicationKeyId - ID associated with the applicationKey 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - applicationKey information (https://api.getstructure.io/#/definitions/applicationKey)
   *
   * Errors:
   *  404 - Error if applicationKey was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.get = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/keys/{applicationKeyId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['applicationKeyId']) { pathParams['applicationKeyId'] = params['applicationKeyId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Updates information about an applicationKey
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} applicationKeyId - ID associated with the applicationKey 
   *  {object} applicationKey - Object containing new properties of the applicationKey (https://api.getstructure.io/#/definitions/applicationKeyPatch)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated applicationKey information (https://api.getstructure.io/#/definitions/applicationKey)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
   *  404 - Error if applicationKey was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.patch = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/keys/{applicationKeyId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['applicationKeyId']) { pathParams['applicationKeyId'] = params['applicationKeyId']; }
    if ('undefined' !== typeof params['applicationKey']) { req.data = params['applicationKey']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Deletes an applicationKey
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} applicationKeyId - ID associated with the applicationKey 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If applicationKey was successfully deleted (https://api.getstructure.io/#/definitions/success)
   *
   * Errors:
   *  404 - Error if applicationKey was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.delete = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/keys/{applicationKeyId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['applicationKeyId']) { pathParams['applicationKeyId'] = params['applicationKeyId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
