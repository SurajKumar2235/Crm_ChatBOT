
# Assign Territories to Records

#### Purpose

To assign territories to multiple records or a single record.

#### Endpoints

[POST /{module\_api\_name}/actions/assign\_territories](https://www.zoho.com/crm/developer/docs/api/v7/assign-territories-to-records.html)

[POST /{module\_api\_name}/{record\_id}/actions/assign\_territories](https://www.zoho.com/crm/developer/docs/api/v7/assign-territories-to-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/assign\_territories

**To assign territories to a single record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/assign\_territories

#### Supported modules

Leads, Accounts, Contacts, and Deals

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, and deals

#### Possible operation types

ALL - Full access to the record

UPDATE - Update records in the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Accounts/actions/assign_territories"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d @assignterritories.json
-X POST
```

#### Request JSON Keys

- idstring, mandatory if not specified in URL



Represents the unique ID of the Deal, Account, or the Contact you want to assign territories to.

- TerritoriesJSON array, mandatory



Each JSON object in the array represents the unique ID of the territory you want to assign to the record. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs.


**Note**

- You can assign **only one** territory to a deal.
- You can assign a **maximum of 10** territories to a lead, contact, or an account.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "id": "554023000003635023", //record_id\
            "Territories": [\
                {\
                    "id": "554023000000430409"\
                },\
                {\
                    "id": "554023000000430451"\
                }\
            ]\
        }\
    ]
}
```

#### Response JSON Keys

- codestring



Represents the response code. "SCHEDULED" indicates that a job is scheduled successfully to assign territories.

- detailsJSON object



- **id**- _string_ \- Represents the ID of the record to which you want to assign the territory.
- **job\_id**- _string_ \- Represents the ID of the job scheduled to assign territories to the records. Use the record ID in the [Get feature-specific info](https://www.zoho.com/crm/developer/docs/api/v7/feature-info.html) API for the details of the scheduled job for that record.

#### Possible Errors

- ALREADY\_SCHEDULEDHTTP 400



You are trying to assign territories again to the record(s) while a job is already scheduled.

**Resolution:** After scheduling the job, use the [Get feature-specific info](https://www.zoho.com/crm/developer/docs/api/v7/feature-info.html) API for the status of the scheduled job for that record.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.

- LIMIT\_EXCEEDEDHTTP 400



Maximum limit of territories for that record exceeds

**Resolution:** You can only assign a maximum of ten territories to a contact and an account, and one territory to a deal.

- INVALID\_DATAHTTP 400



The record Id given seems to be invalid

**Resolution:** The record ID specified in the request input is incorrect. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the list of available records and their respective unique IDs. Specify valid record ID in the request input.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** You have specified an incorrect territory ID (or) the territory you want to assign is deleted. The "details" key gives the path of the territory JSON object with the invalid ID. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs. Specify valid territory ID in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



One of the expected parameter is missing

**Resolution:** You have not specified the unique ID of the record for which the territory must be assigned to. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the list of available records and their respective unique IDs. Specify valid record ID in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified the territory ID in the input (or) passed an empty JSON array for the "Territories" key (or) you have not specified the "Territories" key in your request input. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs. Specify valid territory ID in the request input.

- DUPLICATE\_DATAHTTP 400



Given territory already exists for that record

**Resolution:** You can assign a territory to a record only once.

- ALREADY\_USEDHTTP 400



Duplicate territory ID found

**Resolution:** Use each territory ID only once in the input for a record.

- INVALID\_DATAHTTP 400



One or more keys have invalid values in the request input. The response has multiple response states.

**Resolution:** Refer to request JSON keys section above and specify valid request input.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Invalid OAuth scope to access this URL

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.ALL/UPDATE scope. Create a new client with the valid scope. Refer to scope section above.

- TERRITORY\_NOT\_ENABLEDHTTP 403



You are trying to assign a territory to a record in the Leads module (or) the territory feature is not enabled.

**Resolution:** You cannot directly assign territories to Leads using this API; contact the support team to raise a request for the same. Contact your administrator to enable territory for the module whose records you want to assign a territory to.

- NO\_PERMISSIONHTTP 403



Permission denied to create records.

**Resolution:** You not have permission to update variables. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "554023000003908007",\
                "id": "554023000003635023"\
            },\
            "message": "Territory assignment process scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/assign-territories-to-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)