
# Delink Related Records

#### Purpose

To delete the association between modules.

#### Endpoints

[DELETE /{module\_api\_name}/{record\_id}/{related\_list\_api\_name}/{related\_record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delink.html)

[DELETE /{module\_api\_name}/{record\_id}/{related\_list\_apiname}?ids={comma\_separated\_related\_record\_ids}](https://www.zoho.com/crm/developer/docs/api/v7/delink.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/{related\_list\_api\_name}/{related\_record\_id}

**To delete multiple related records:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/{related\_list\_api\_name}?ids={comma\_separated\_related\_record\_ids}

#### Supported relations

Campaigns - to - Leads, Contacts

Products - to - Leads, Accounts,

Contacts, Potentials, Price Books

Appointments - to - Services

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, deals, contacts, accounts, products, campaigns, appointments, services and pricebooks

#### Possible operation types

ALL - Full access to records

WRITE - Edit related records

DELETE - Delete related records

#### Parameters

- idsstring, mandatory when delinking multiple related records



Specify comma separated related record IDs.


**Note**

- You can delete a maximum of **100 related records** through an API call, that is, you can specify a maximum of 100 related record IDs in the request URL.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Campaigns/3652397000000327001/Contacts?ids=3652397000000925128,3652397000000649013"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Campaigns/3652397000000327001/Contacts?ids=3652397000000925128,3652397000000649013"\
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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete records

**Resolution:** The user does not have permission to delete related records data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete related records data

**Resolution:** The user does not have the permission to delete related records data. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** You have specified an incorrect related record ID. Please specify a valid record ID. Refer to [Get Related Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html) to get valid record IDs.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 400



either the request body or parameters is in wrong format

**Resolution:** The parameter values are in the wrong format. Specify valid record IDs in the correct format. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000000925128"\
            },\
            "message": "relation removed",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000000649013"\
            },\
            "message": "relation removed",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delink.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)