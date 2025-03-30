
# Update Related Records

#### Purpose

To update the relation between the records.

#### Endpoints

[PUT /{module\_api\_name}/{record\_id}/{related\_list\_api\_name}/{related\_record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-related-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/{related\_list\_api\_name}/{related\_record\_id}

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

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, deals, contacts, accounts, products, campaigns, appointments, services and pricebooks

#### Possible operation types

ALL - Full access to records

WRITE - Edit related records

UPDATE - Update related records

#### Sample Request: To add the relation between a Lead and Campaigns

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/34876876000000376008/Campaigns"
-X PUT
-d @updaterelatedlead.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
CopiedSyntax:
zoho.crm.updateRelatedRecord(<module String>,<recordID Long>,<parentModuleName String>,<parentRecordId Long>,<dataMap Map>,<connectionName String>,<userAccess Boolean>);
mandatory : module,recordID,parentModuleName,parentRecordId,dataMap

Sample Request:
resp = zoho.crm.updateRelatedRecord("Related_List_Name_2","7000000037119","Leads","7000000037002", Map());
```

#### Request JSON keys

- idstring, mandatory



Specify the unique ID of the related record that you want to associate. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the unique ID of the records.


**Note**

- It is mandatory to send the sample data while adding relation between other modules.
- To relate multiple records of a module to the parent module, you must pass individual JSON objects for each related record as shown in the example.
- You can update a maximum of 100 related records per API call.

#### Sample Input

``` json
Copied{
	"data":[\
		{\
			"id":"3652397000000327001",\
			"Member_Status":"Active"\
\
		},\
		{\
			"id":"3652397000001854001",\
			"Member_Status":"Planning"\
\
		}]
}
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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update related records data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update related records data

**Resolution:** The user does not have the permission to update related records data. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** You have specified an incorrect related record ID. Please specify a valid record ID. Refer to [Get Related Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html) to get valid record IDs.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Specify a valid input

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000000327001"\
            },\
            "message": "relation added",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000001854001"\
            },\
            "message": "relation added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-related-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)