
# Delete Notes

#### Purpose

To delete notes.

#### Endpoints

[DELETE /Notes/{note\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-notes.html)

[DELETE /Notes?ids={Entity\_ID1, Entity\_ID2, Entity\_ID3,..}](https://www.zoho.com/crm/developer/docs/api/v7/delete-notes.html)

[DELETE /{module\_api\_name}/{record\_id}/Notes/{note\_id}}](https://www.zoho.com/crm/developer/docs/api/v7/delete-notes.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Notes/{note\_id}

**To delete multiple notes:**

{api-domain}/crm/{version}/Notes?ids={Entity\_ID1, Entity\_ID2, Entity\_ID3,..}

**To delete notes of a specific record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Notes/{note\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Services and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

**(and)**

scope=ZohoCRM.modules.notes.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, events, calls, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, appointments, services and custom

#### Possible operation types

ALL - Full access to notes

WRITE - Edit note data

DELETE - Delete note data

#### Parameters

- idsstring, mandatory when deleting multiple notes



Specify the unique IDs of the notes to be deleted.


**Note**

You can delete a maximum of **100 notes** per API call.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Notes?ids=2883756000000268003,2883756000000987654,2883756000000736435"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X DELETE
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Notes?ids=2883756000000268003,2883756000000987654,2883756000000736435"\
	type: DELETE\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.notes.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete notes details

**Resolution:** The user does not have permission to delete notes data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete notes

**Resolution:** The user does not have the permission to delete notes data. Contact your system administrator.

- INVALID\_DATAHTTP 400



record not deleted

**Resolution:** The note ID specified in the URL is invalid. Refer to [Get Notes API](https://www.zoho.com/crm/developer/docs/api/v7/get-notes.html) to get valid note IDs.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 400



either the request body or parameters is in wrong format

**Resolution:** The parameter values are in the wrong format. Specify valid record IDs in the correct format. Refer to endpoints section above.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'ids' parameter is missing in the request. Please specify the IDs of the notes to be deleted. Refer to [Get Notes Data API](https://www.zoho.com/crm/developer/docs/api/v7/get-notes.html) to get valid record IDs.


#### Sample Response

``` json
Copied{
    "data": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2883756000000308033"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2883756000000308027"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2883756000000308021"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-notes.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)