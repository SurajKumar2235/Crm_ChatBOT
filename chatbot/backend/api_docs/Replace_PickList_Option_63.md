
# Replace Global PickList Value

#### Purpose

To replace a picklist value from all the used places, with another existing option of the global picklist.

Existing value will be replaced in the used places like Records, Criteria, Workflow Actions, and Field Dependency. The replaced value will be moved to the **Unused values** section once the replacing action is over.

#### Endpoints

[POST /settings/global\_picklists/{global\_pick\_list\_id}/actions/replace\_picklist\_values](https://www.zoho.com/crm/developer/docs/api/v7/replace-global-picklist-options.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/{global\_pick\_list\_id}/actions/replace\_picklist\_values

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.CREATE

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000725183/actions/replace_picklist_values"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- old\_valueJSON object, mandatory



It represents the value which you want to replace in all used places.

- new\_valueJSON object, mandatory



It represents the new option, with which you want to replace the old value.


**Notes**

- The **-None-** value in picklist options cannot be replaced.
- The IDs of both the **old\_value** and **new\_value** cannot be the same.
- If you provide an **empty string** or **null** value for the **display\_value**, the system will throw an **INVALID\_DATA** error.
- You cannot replace a picklist that has already been scheduled for the deletion.
- When you try to replace an option in **a global picklist associated with any field in a record, the action triggers a scheduled job.** You won't receive an immediate response. Instead, you will be provided with a **job ID** to check the status of your replaced option using [Get the Status of a Scheduled Replace Job for Global Picklist Options API](https://www.zoho.com/crm/developer/docs/api/v7/gpl-replace-status.html).

#### Sample Input

``` json
Copied{
    "replace_picklist_values": [\
        {\
            "old_value": {\
                "id": "2423488000000492041",\
                "display_value": "Twitter"\
            },\
            "new_value": {\
                "id": "2423488000000725184",\
                "display_value": "X"\
            }\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The global picklist ID seems to be invalid
- Given ID of an option in the global picklist seems to be invalid.
- -None- and its value cannot be replaced

**Resoutions:**

- Provide a valid global picklist value.
- Provide a valid ID option.
- You cannot replace the **-None-** option. Try using a different value.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



The display\_value and its corresponding ID seems to be invalid



**Resolution:** Provide a valid display value and its corresponding ID to perform the action.

- EXPECTED\_FIELD\_MISSINGHTTP 400



- Specify atleast one field in the old\_value
- Specify atleast one field in the new\_value

**Resolutions:**

- It is mandatory to provide at least one field ( **ID** or **display\_value**) in the **old\_value** JSON object to perform the action.
- It is mandatory to provide at least one field ( **ID** or **display\_value**) in the **new\_value** JSON object to perform the action.

- NOT\_ALLOWEDHTTP 400



- Option cannot be replaced.
- Given global picklist ID has already been in deletion scheduler

**Resolutions:**

- The options you are trying to replace are associated with the features like **Blueprint** and **ABM mapping.**
- You **cannot replace** a picklist that has already been scheduled for deletion.

- LIMIT\_EXCEEDEDHTTP 400



The limit of used or unused options has been reached

**Resolution:** Used options can have up to **1000** limits, and unused options can have up to **500** limits. Specify the options in the input regarding limit.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 401



Either the request body or parameters is in wrong format

**Resolution:** Specify a valid input format.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to replace global picklist options. Create a valid token with required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "replace_picklist_values": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "2423488000000732044"\
            },\
            "message": "success",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/replace-global-picklist-options.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)