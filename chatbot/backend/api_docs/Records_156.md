
# Update Records

#### Purpose

To update existing entities in the module.

#### Endpoints

[PUT /{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-records.html)

[PUT /{module\_api\_name}/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}

**To update a specific record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Appointments Rescheduled History, Services and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

If-Unmodified-Since: 2024-01-15T15:26:49+05:30

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, appointments\_rescheduled\_history, services and notes

#### Possible operation types

ALL - Full access to the record

WRITE - Edit records in the module

UPDATE - Update records in the module

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals"
-X PUT
-d "@updatedeal.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
CopiedSyntax:
<variable> =zoho.crm.updateRecord(<module_name>, <record_ID>, <record_value>, [<query_value>], [<connection>]);
mandatory: module_name, record_id

Sample Request:
leadinfo =
 {
 "Company":"Zylker",
 "Last_Name":"Stewart",
 "Phone":"9876XXXXXX",
 "Email":"stewart@zylker.com"
 };

response = zoho.crm.updateRecord("Leads",23033XXXXXXXXXXXXXX,leadinfo);
```

In the request, "@updatelead.json" contains the sample input.

#### Request JSON Keys

- idstring, mandatory



Specify the unique ID of the record that you want to update. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the unique ID of the record.

- $append\_valuesJSON object, optional



Represents whether you want to append the values of the multi-select picklist you specified in the input to the existing values. Specify the API names of the multi-select picklist and "true" or "false" as key-value pairs in this JSON object. The value "true" adds the values in the input to the multi-select picklist, while the value "false" replaces the existing values with the ones in the input.

Example:

_"$append\_values":{_

_"Multi\_Select\_1": true,_

_"Multi\_Select\_2": false_

_}_

Note that the values are appended or replaced only for those records that have this key in the input. For the other multi-select picklists, the existing values are simply replaced by default.

- skip\_feature\_executionJSON array, optional



By default, if a Cadence is configured for a module, it will be executed automatically when you update a record via API. This key lets you **skip the execution of the Cadences feature** during record updates.

Specify **"cadences"** as the value for the **"name"** key to skip Cadences execution for the record. Ensure you include this key alongside the **"data"** key in your request. The supported value for the **"name"** key is **"cadences"**.


**Note**

- The 'INVALID\_DATA' error is thrown if the **field value length** is more than the maximum length defined for that field.
- If an API is used inside a Function and the field value length exceeds the limit, then that function receives error response from the API. For ex: If the max length for a "Text field" is defined as 10, then value given for it in API cannot be "12345678901", as it has 11 characters.
- A maximum of 100 records can be updated per API call.
- You must use only Field API names in the input. You can obtain the field API names from
  - [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field). (Or)
  - **Setup** \> **Developer Hub** \> **APIs and SDKs** \> **API Names** \> **{Module}**. Choose “Fields” from the “Filter By” drop-down.
- Records with **Subform** details can also be updated to CRM using the Records API. Please look at [Subforms API](https://www.zoho.com/crm/developer/docs/api/v7/update-subforms.html) to learn more about updating subform information within a record.
- If the update API calls for a record are from DRE(Functions), due to workflow triggered on the same record's create/update, workflow alone will not get executed, irrespective of the trigger param configuration.
- Use the "\_delete" key to delete data from multi-select lookup, multi-user lookup, and image upload fields. You must pass the ID of the linking module in the input. Refer to the sample input for details.
- All records that are updated will enter the review process by default.
- You can also use the sample response of each module as the input when you insert, update, or upsert a record in that corresponding module.
- Refer to the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to know more about field types and limits.
- You can update all fields in a module that are supported in the [insert records](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html) operation.
- You must provide the layout ID field if you want to
  - include the layout specific mandatory fields in the API-level mandatory check
  - include only the fields that are defined in your layout for API- level processing and ignore the rest
- Multiselect Lookup association is restricted if the dependent record is locked, and the system will throw a **RECORD\_LOCKED** error.
- In calls module, the call duration for an Inbound or Outbound call cannot be zero.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "id": "3652397000003852095",\
            "Deal_Name": "v7 Update",\
            "Stage": "Closed Won",\
            "Pipeline": "Standard (Standard)",\
            "Foreign_Languages": [ //multi-select picklist\
                "Korean",\
                "Spanish"\
            ],\
            "$append_values": {\
                "Foreign_Languages": false\
            },\
            "Image_Upload": [\
                {\
                    "File_Id__s": "2cxx2fa"\
                },\
                {\
                    "id": "738964000002363016",\
                    "_delete": null\
                }\
            ],\
            "Listings": [ //multi-select lookup\
                {\
                    "Interested_Listings": {\
                        "id": "3652397000001988001"\
                    }\
                },\
                {\
                    "id": "431581000000697244",\
                    "_delete": null\
                }\
            ],\
            "AssociatedUser": [ //multi-user lookup\
                {\
                    "User": {\
                        "name": "J Smith",\
                        "id": "3652397000000281001"\
                    }\
                },\
                {\
                    "id": "431581000000701821",\
                    "_delete": null\
                }\
            ]\
        }\
    ],
    "skip_feature_execution": [\
        {\
            "name": "cadences"\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** You have specified an incorrect record ID. Please specify a valid record ID. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified unique ID of the record to be updated in the request. Please specify the ID of the record to be updated, refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update

**Resolution:** The user does not have permission to update records data. Contact your system administrator.

- ALREADY\_MODIFIEDHTTP 412



Record updated time has already passed if-unmodified-since time

**Resolution:** The record has been updated after the specified If-Unmodified-Since timestamp. Try again with a more recent value for the _If-Unmodified-Since_ header.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the unique fields.

- LIMIT\_EXCEEDEDHTTP 400



Only 50 participants can be added to an event.

**Resolution:** You are trying to update an event with more than 50 participants. You can add only upto 50 participants to an event.

- RECORD\_LOCKEDHTTP 400



Cannot update record that is not approved yet

**Resolution:** Please wait until the Zia image or the merge duplicates process is complete and try again.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NOT\_APPROVEDHTTP 400



Cannot update record that is not approved yet

**Resolution:**



- **Case 1:** If the record is in the rejected state due to Zia image validation, either upload a new image (or) delete the failed image and, resubmit the record to Zia image validation.
- **Case 2:** If the record is in Zia record approval, the system will not allow you to update the images of the record until the reviewer approves or rejects the record.

- RECORD\_LOCKEDHTTP 400



Sorry, you cannot perform this operation as the record is locked.

**Resolution:** Multiselect Lookup association is restricted if the dependent record is in locked state. Make sure the dependent record is not in locked state and try again.

- DEPENDENT\_MISMATCHHTTP 400



Call Duration can not be zero.

**Resolution:** The duration of an inbound or outbound call cannot be zero. Try again with a non-zero value for _Call\_Duration._


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2021-05-02T11:17:33+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2021-05-02T11:17:33+05:30",\
                "id": "554023000000527003",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)