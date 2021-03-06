# Org
Structure API

## org.get
Retrieves information on an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#org) | Organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.get(params)
  .then(console.log)
  .catch(console.error);
```
## org.patch
Updates information about an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| organization | [orgPatch](_schemas.md#orgpatch) | Y | Object containing new organization properties |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#org) | Updated organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if organization was not found |

### Example
```javascript
// with callbacks
client.org.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.patch(params)
  .then(console.log)
  .catch(console.error);
```
## org.delete
Deletes an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If organization was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if organization was not found |

### Example
```javascript
// with callbacks
client.org.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.delete(params)
  .then(console.log)
  .catch(console.error);
```
## org.pendingInvites
Gets the current pending invites



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [orgInvites](_schemas.md#orginvites) | Invitation information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.pendingInvites(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.pendingInvites(params)
  .then(console.log)
  .catch(console.error);
```
## org.inviteMember
Invites a person to an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| invite | [orgInvitePost](_schemas.md#orginvitepost) | Y | Object containing new invite info |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [orgInvites](_schemas.md#orginvites) | Invitation information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.inviteMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.inviteMember(params)
  .then(console.log)
  .catch(console.error);
```
## org.revokeInvite
Revokes an existing invite



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| inviteId | string | Y | Id of invite to revoke |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [orgInvites](_schemas.md#orginvites) | Invitation information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.revokeInvite(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.revokeInvite(params)
  .then(console.log)
  .catch(console.error);
```
## org.modifyMember
Modifies a current org member&#x27;s role



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| member | [orgMemberPatch](_schemas.md#orgmemberpatch) | Y | Object containing new member pair |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#org) | Updated organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.modifyMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.modifyMember(params)
  .then(console.log)
  .catch(console.error);
```
## org.removeMember
Modifies a current org member&#x27;s role



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| userId | string | Y | Id of user to remove |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#org) | Updated organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.removeMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.removeMember(params)
  .then(console.log)
  .catch(console.error);
```
