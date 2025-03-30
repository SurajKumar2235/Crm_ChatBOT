
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
Copiedcurl "https://www.zohoapis.com/crm/v7/Accounts/actions/remove_territories"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d @removeterritories.json
-X POST
```

#### Request JSON Keys

- idstring, mandatory if not specified in URL



Represents the unique ID of the Deal, Account, or the Contact you want to remove territories of.

- TerritoriesJSON array, mandatory



Each JSON object in the array represents the unique ID of the territory you want to remove for the record. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs.


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



Represents the response code. "SCHEDULED" indicates that a job is scheduled successfully to remove territories.

- detailsJSON object



- **id**- _string_ \- Represents the ID of the record whose territories you want to remove.
- **job\_id**- _string_ \- Represents the ID of the job scheduled to remove territories of the records. Use the record ID in the [Get feature-specific info](https://www.zoho.com/crm/developer/docs/api/v7/feature-info.html) API for the details of the scheduled job for that record.

#### Possible Errors

- ALREADY\_SCHEDULEDHTTP 400



You are trying to remove territories again from the record(s) while a job is already scheduled.

**Resolution:** After scheduling the job, use the [Get feature-specific info](https://www.zoho.com/crm/developer/docs/api/v7/feature-info.html) API for the status of the scheduled job for that record.

- INVALID\_DATAHTTP 400



The record Id given seems to be invalid

**Resolution:** The record ID specified in the request is incorrect. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the list of available records and their respective unique IDs. Specify valid record ID in the request.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** You have specified an incorrect territory ID (or) you are trying to remove a territory that is not assigned to that record. The "details" key gives the path of the territory JSON object with the invalid ID. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs. Specify valid territory ID in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



One of the expected parameter is missing

**Resolution:** You have not specified the unique ID of the record from which the territory must be removed. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the list of available records and their respective unique IDs. Specify valid record ID in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified the territory ID in the input (or) passed an empty JSON array for the "Territories" key (or) you have not specified the "Territories" key in your request input. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the list of available territories and their respective unique IDs. Specify valid territory ID in the request input.

- TERRITORY\_NOT\_ENABLEDHTTP 403



You are trying to remove a territory from a record in the Leads module

**Resolution:** You cannot directly remove territories from Leads using this API. Contact the support team to raise a request for the same.

- NOT\_ALLOWEDHTTP 403



You are trying to remove a territory from a record that was system-assigned. **Resolution:** You cannot remove system-assigned territories from records.

- INVALID\_DATAHTTP 207



One or more keys have invalid values in the request input. The response has multiple response states.

**Resolution:** Refer to request JSON keys section above and specify valid request input.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URL

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 401



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "554023000003908009",\
                "id": "554023000003635023"\
            },\
            "message": "Territory removal process scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/remove-territories-of-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)