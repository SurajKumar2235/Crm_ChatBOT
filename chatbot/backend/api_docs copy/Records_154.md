
# Get Records

A record is an entity which stores all the combined information of a particular contact or company, which is acquired from various sources. The information may be acquired from a web-form, social media services, advertisements etc. The records API allows the user to get, create, update, delete, or search records.

#### Purpose

To retrieve the records that match your search criteria.

#### Endpoints

[GET /{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html)

[GET /{module\_api\_name}/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}

**To get specific record:**

https://www.zohoapis.com/crm/{version}/{module\_api\_name}/{record\_id}

##### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Appointments Rescheduled History, Services and Activities

##### Custom Modules

For custom modules, use their respective API names in the request URL. You can obtain the API name from **Setup** -\> **Developer Hub** -\> **APIs & SDKs** -\> **API Names**. You can also use the respective custom module's **api\_name** key in the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html)'s response to get the API name of the custom module.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

If-Modified-Since: 2019-07-25T15:26:49+05:30

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, appointments\_rescheduled\_history, services and activities.

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

##### Parameters

- fieldsstring, mandatory when fetching all records



To list all the module records with respect to fields. Note that you can include a maximum of 50 field API names in this parameter.

**Possible values**: Multiple field API names, comma separated. For example: Last\_Name, Email.



**Note:** The **"full\_name"** field contains the concatenated values of the **First Name** and **Last Name** fields.

This is a read-only field available only in the Leads, Contacts, and Users modules.

- cvidlong



To get the list of records based on custom views. Note that you cannot use this param with the "sort\_by" param.You can get custom view id from [Custom View Meta API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html)

**Possible values**: {custom\_view\_id}.

- idsstring, optional



To retrieve specific records based on their unique ID.

**Possible values:** Valid unique IDs of records. Example: 4150868000001944196

- pageinteger



To get the list of records from the respective pages. The default value is **1**. Note that you cannot use this param with the "page\_token" param.

**Possible values**: Positive integer values only.

- per\_pageinteger



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values**: Positive integer values only.

- page\_tokenstring, mandatory to fetch more than 2000 records by pagination



You can use the "page" param to fetch up to 2000 records without "page\_token". To fetch more than 2000 records, you must include the "page\_token" param in the request. This param takes the value from the key "next\_page\_token" in the response of the first Get Records call. Note that this token value is user-specific. If you use another user's token, the system throws an error.

Note that you cannot use this param with the "page" param.

- sort\_orderstring



To sort the available list of records in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order. The default value is 'desc'.

- sort\_bystring



To sort the records based on the fields **id**, **Created\_Time**, and **Modified\_Time**. The default value is 'id'. Note that you cannot use this param with the "cvid" param.

- convertedstring



To get the list of converted records. Default value is **false**.

**Possible values**: **true** \- get only converted records, **false** \- get only non-converted records, **both** \- get all records.

- territory\_idlong



To get the list of records based on the territory.

**Possible values**: {territory\_id}.

- include\_childboolean



To include records from the child territories.Default value is **false**.

**Possible values**: **true** \- includes child territory records, **false** \- does not include child territory records.


**Note**

- **sort\_order** applies to given **sort\_by** field.
- If **sort\_by** field is not provided, then it applies to the system-defined field.
- If your requirement is to fetch under 2000 records, use the "page" and "per\_page" parameters (page=1 to 10, per\_page=200).
- If you want to paginate for more than 2000 records, use the "page\_token" parameter you receive in the first response. You will have to pass the page token received from the response with param **page=10** to get records from 2001 to 2200. If there are more records, the API responses, will have "next\_page\_token" and "previous\_page\_token" for easy pagination.

Using the page tokens from the consecutive requests, you can navigate and fetch up to **100,000** records.
- The key "page\_token\_expiry" contains the time when next\_page\_token and previous\_page\_token expires.
- Note that in both the above scenarios, the maximum records per request will be only 200.
- Use the key **$approval\_state** in the fields param to retrieve the approval status of the record.
- The keys **Converted\_\_s** and **Converted\_Date\_Time** represent whether the record is converted, and the date and time at which it was converted, respectively.
- The fields **Enrich\_Status\_\_s** and **Last\_Enriched\_Time\_\_s** are added for the Data Enrichment module.
- You can get the values of subform records, multi-select lookup fields and multi-user lookup fields in the response only when a specific record is fetched.
- The **$has\_more** JSON object in the response renders the API names of the subforms, multi-select lookup fields and multi-user lookup fields in the module with boolean values to indicate whether or not there are more records in these fields in the module. This key is rendered in the response only when you fetch a specific record.
- Only while fetching a specific record from one of the inventory modules, the response will contain one of the following subforms:
  - Quoted\_Items (for a Quote)
  - Invoiced\_Items (for an Invoice)
  - Ordered\_Items (for a Sales Order)
  - Purchased\_Items (for a Purchase Order)
- Use the **$event\_cancelled** key in the fields param to retrieve the cancellation status of the Meeting. The **$event\_cancelled** key in the response represents the cancellation status of the Meeting.
- To get the list of territories enabled for your organization, refer to the [Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html).
- Territory is supported only for the modules Deals, Contacts, and Accounts.
- Only **admin users** can fetch the records from the **Notes** module. The system throws an error when non-admin users try to fetch the records from the Notes module.
- The value of the fields with sensitive health data will be retrieved **only** when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value will be **null**. Refer to [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) for more details.
- In the response of the Get Records API, rich text fields are truncated to display only the first **500 characters**. Use the [Rich Text Fields API](https://www.zoho.com/crm/developer/docs/api/v7/get-rich-text-fields.html) to retrieve the complete content of rich text fields.

#### Sample Request: First API Call

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads?fields=Last_Name,Email,Record_Status__s,Converted__s,Converted_Date_Time&converted=true&per_page=5"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response to the First API Call

``` json
Copied{
    "data": [\
        {\
            "Converted_Date_Time": "2022-11-21T15:12:13+05:30",\
            "Email": null,\
            "Last_Name": "test8000",\
            "id": "3652397000009851001",\
            "Record_Status__s": "Available",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T15:12:13+05:30",\
            "Email": null,\
            "Last_Name": "test7000",\
            "id": "3652397000009850001",\
            "Record_Status__s": "Available",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T11:34:37+05:30",\
            "Email": null,\
            "Last_Name": "test6000",\
            "id": "3652397000009843012",\
            "Record_Status__s": "Available",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T11:34:36+05:30",\
            "Email": null,\
            "Last_Name": "test3000",\
            "id": "3652397000009843001",\
            "Record_Status__s": "Available",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T22:47:16+05:30",\
            "Email": null,\
            "Last_Name": "test2000",\
            "id": "3652397000009836003",\
            "Record_Status__s": "Available",\
            "Converted__s": true\
        }\
    ],
    "info": {
        "call": false,
        "per_page": 5,
        "next_page_token": "c8582xx9e7c7",
        "count": 5,
        "sort_by": "id",
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": "2022-11-11T15:08:14+05:30",
        "sort_order": "desc",
        "email": false,
        "more_records": true
    }
}
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given is invalid.

**Resolution:** Specify a valid module API name. Refer to possible modules section above.

- INVALID\_MODULEHTTP 400



The given module is not supported in API.

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are supported). Specify a valid module API name. Refer to possible modules section above.

- INVALID\_MODULEHTTP 400



Territory is not supported for the given module.

**Resolution:** The given module is not territory-supported. Territory is supported only for the modules Deals, Contacts, and Accounts.

- TOKEN\_BOUND\_DATA\_MISMATCHHTTP 400



The page\_token given seems to be invalid or input param is added, altered, or deleted.

**Resolution:** The page\_token is bound to the parameters used in the request. Do not change the parameters and use the old page token.

- INVALID\_DATAHTTP 400



You have used unsupported fields in the "cvid" param.

**Resolution:** The "details" key in the response gives the supported fields you can use in the cvid param. Filter only by those fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameters is missing.

**Resolution:** The "details" key in the response gives the missing param in the request. Ensure that you include the params marked "mandatory" in the "Parameters" section.

- LIMIT\_EXCEEDEDHTTP 400



Fields limit exceeded.

**Resolution:** You can only include a maximum of 50 field API names in the "fields" param.

- INVALID\_DATAHTTP 400



The token given seems to be invalid. You have used an invalid page\_token or the one generated by another user.

**Resolution:** page\_token is user-specific. Use only the ones that are generated for you.

- EXPIRED\_VALUEHTTP 400



The token given has expired.

**Resolution:** page\_token is valid only for 24 hours from the time it was generated.

- DISCRETE\_PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get the first 2000 records without using page\_token param.

**Resolution:** If you want to fetch more than 2000 records, you must use the "page\_token" param.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You cannot use both cvid and sort\_by, and page and page\_token

**Resolution:** You cannot sort the records in a custom view. Use either "cvid" or "sort\_by" param in the request. Similarly, use either "page" or "page\_token" in the request.

- PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get up to first 100000 records using page\_token param.

**Resolution:** You can fetch a maximum of 100,000 records using the page\_token param in the get records API.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- NOT\_SUPPORTEDHTTP 403



This API is supported only for admin users.

**Resolution:** Only admin users can fetch records from the Notes module.


#### Sample Request: Second API Call using "page\_token"

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads?fields=Last_Name,Email,Converted__s,Converted_Date_Time&converted=true&per_page=5&page_token=c85829xxx5a049e7c7"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response to the Second API Call

``` json
Copied{
    "data": [\
        {\
            "Converted_Date_Time": "2022-11-11T15:12:13+05:30",\
            "Email": null,\
            "Last_Name": "test8000",\
            "id": "3652397000009851001",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T15:12:13+05:30",\
            "Email": null,\
            "Last_Name": "test7000",\
            "id": "3652397000009850001",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T11:34:37+05:30",\
            "Email": null,\
            "Last_Name": "test6000",\
            "id": "3652397000009843012",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T11:34:36+05:30",\
            "Email": null,\
            "Last_Name": "test3000",\
            "id": "3652397000009843001",\
            "Converted__s": true\
        },\
        {\
            "Converted_Date_Time": "2022-11-21T22:47:16+05:30",\
            "Email": null,\
            "Last_Name": "test2000",\
            "id": "3652397000009836003",\
            "Converted__s": true\
        }\
    ],
    "info": {
        "call": false,
        "per_page": 5,
        "next_page_token": "3040xxxx9d467",
        "count": 5,
        "sort_by": "id",
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": "2022-11-11T15:10:23+05:30",
        "sort_order": "desc",
        "email": false,
        "more_records": true
    }
}
```

Show full

Show less

#### Sample Response for Fetching a Specific Record

``` json
Copied{
    "data": [\
        {\
            "Company": "abc",\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "email": "p.boyle@abc.com"\
            },\
            "Email": "j.smith@abc.com",\
            "Full_Name": "Jason Smith",\
            "First_Name": "Jason",\
            .\
            .\
            .\
            "Languages_Known": [ //Custom Subform\
                {\
                    "Proficiency": "Professional",\
                    "Modified_Time": "2023-06-23T23:47:59-11:00",\
                    "Language": [\
                        "English"\
                    ],\
                    "Layout": {\
                        "name": "Standard",\
                        "id": "554023000000885006"\
                    },\
                    "$in_merge": false,\
                    "$field_states": null,\
                    "Created_Time": "2023-06-23T23:47:59-11:00",\
                    "Parent_Id": {\
                        "name": "Steven",\
                        "id": "554023000002750020"\
                    },\
                    "id": "554023000003129007",\
                    "$zia_visions": null\
                }\
            ],...\
            "$has_more": {\
                "Associated_Deal": false, //Custom multi-select lookup\
                "Languages_Known": false // Custom Subform\
            }\
        }\
    ]
}
```

Show full

Show less

#### Further Reading

- [Kaizen #29 - Parameters in Zoho CRM APIs](https://help.zoho.com/portal/en/community/topic/kaizen-29-parameters-in-zoho-crm-apis)
- [Kaizen #39 - Deals #API](https://help.zoho.com/portal/en/community/topic/kaizen-39-deals-api)
- [Kaizen #53 - Sales Orders #API](https://help.zoho.com/portal/en/community/topic/kaizen-53-sales-orders-api)
- [Kaizen #31 - Subforms #API](https://help.zoho.com/portal/en/community/topic/kaizen-53-sales-orders-api)
- [Kaizen #54 - Subforms vs. Related Lists](https://help.zoho.com/portal/en/community/topic/kaizen-54-subforms-vs-related-lists)

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)