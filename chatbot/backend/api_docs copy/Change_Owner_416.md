
# Change Owner

#### Purpose

To change the owner of a record or multiple records.

#### Endpoint

[POST /{module\_api\_name}/actions/change\_owner](https://www.zoho.com/crm/developer/docs/api/v7/change-owner.html)

[POST /{module\_api\_name}/{record\_id}/actions/change\_owner](https://www.zoho.com/crm/developer/docs/api/v7/change-owner.html)

### Request Details

#### Request URL

For multiple records: {api-domain}/crm/{version}/{module\_api\_name}/actions/change\_owner

For a single record: {api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/change\_owner

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.change\_owner.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/change_owner"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
-d "@newdata.json"
```

#### Request JSON

- idsJSON array, mandatory when you want to change the owner for multiple records



The IDs of the records whose owners you want to change. A maximum of **500** record IDs can be given in a single API call.

- ownerJSON object, mandatory



The ID of the new owner you want to assign the record to.

- related\_modulesJSON object, optional



The API name and record ID of the meeting, task, or call that is related to the record whose owner you want to change. Note that if you have specified both API name and the ID of the related module, and only one of them is valid, the system proceeds with the valid one.

- notifyBoolean, optional



Represents whether you want to notify the new owner via an email when you assign the records.


#### Sample Input

``` json
Copied{
  "ids": [\
    "3652397000001935001",\
    "3652397000001970024"\
  ],
  "owner": {
    "id": "3652397000000281001"
  },
  "notify": true,
  "related_modules": [\
    {\
      "api_name": "Tasks",\
      "id": "3652397000007399045"\
    },\
    {\
      "api_name": "Events",\
      "id": "3652397000001339059"\
    }\
  ]
}
```

Show full

Show less

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the IDs in the request body, or the "ids" array is empty, or you have not specified the owner's details.

**Resolution:** The "ids" array is mandatory when you want to change the owner of multiple records. The Owner's ID is mandatory for this API. The "api\_name" and "json\_path" keys in the response give the details of what is missing in the input.

- INVALID\_DATAHTTP 400



Either the ID of the owner or one or many IDs of the records in the "ids" array is invalid.

**Resolution:** Specify valid values in the input.

- NOT\_SUPPORTEDHTTP 400



You have specified an invalid module API name in the "related\_modules" array, or the given module is not supported in this API.

**Resolution:** Specify the right API name of the related module. You can use this API to change owners of the records specified in the "Supported Modules" section.

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified either the API name or the ID of the related module.

**Resolution:** Refer to the "expected\_fields" array in the response for the API name and JSON path of the missing fields.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You have specified one or more incorrect values in the input.

**Resolution:** Refer to the "ambiguity\_due\_to" array in the response for the API name and JSON path of the invalid data.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.


#### Sample Response

``` json
Copied{
  "data": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "id": "3652397000001935001"\
      },\
      "message": "owner is successfully updated",\
      "status": "success"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "id": "3652397000001970024"\
      },\
      "message": "owner is successfully updated",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/change-owner.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)