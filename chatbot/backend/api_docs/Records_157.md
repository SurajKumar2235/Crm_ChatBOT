
# Delete Records

#### Purpose

To delete entities or records from a module.

#### Endpoints

[DELETE /{module\_api\_name}?ids={record\_id1,record\_id2,..}](https://www.zoho.com/crm/developer/docs/api/v7/delete-records.html)

[DELETE /{module\_api\_name}/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}?ids={record\_id1,record\_id2,..}

**To delete a specific record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Appointments Rescheduled History, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, appointments\_rescheduled\_history, services and activities

#### Possible operation types

ALL - Full access to the record

DELETE - Delete records in the module

#### Parameters

- idsstring, mandatory



Specify the unique ID of the record that you want to delete.

**Possible values:** Entity IDs separated by commas.

For example: 410405000002264040, 410405000002264025.

- wf\_triggerboolean, optional



Represents if the workflow rules are to be triggered upon record deletion. The default value is **true**.

**Possible values - true:** triggers associated workflows; **false:** does not trigger associated workflows.


**Note**

- A maximum of 100 records can be deleted per API call.
- By default, all the workflows related to this API will get executed.
- All the subforms related to this API will get deleted.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads?ids=410405000002264040,410405000002264025&wf_trigger=true"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads?ids=410405000002264040,410405000002264025&wf_trigger=true"\
	type: DELETE\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- INVALID\_DATAHTTP 400



record not deleted

**Resolution:** The record you are trying to delete has already been deleted. Specify a valid record ID. Refer [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 400



either the request body or parameters is in wrong format

**Resolution:** The parameter values are in the wrong format. Specify valid record IDs in the correct format. Refer to endpoints section above.

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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.DELETE. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete

**Resolution:** The user does not have permission to delete records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete records

**Resolution:** The user does not have the permission to delete records. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'ids' parameter is missing in the request. Please specify the valid IDs of the records to be deleted. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- RECORD\_LOCKEDHTTP 400



cannot delete record that is not approved yet

**Resolution:** Please wait until the Zia image or the merge duplicates process is complete and try again.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NOT\_APPROVEDHTTP 400



cannot delete record that is not approved yet

**Resolution:**



- **Case 1:** If the record is in the rejected state due to Zia image validation, delete the failed image and, resubmit the record to Zia image validation.
- **Case 2:** If the record is in Zia record approval, the system will not allow you to update the images of the record until the reviewer approves or rejects the record.

#### Sample Response

``` json
Copied{
    "data": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "410405000002264040"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "410405000002264025"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)